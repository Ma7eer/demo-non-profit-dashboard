import React, { Component } from 'react'
import Form from 'react-formio/lib/components/Form'
import { CSVLink } from 'react-csv'
// import { Button } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
import printJS from 'print-js'

import orphansSchema from '../../schemas/orphans/orphans'
import {
  patchData,
  postData,
  getData,
  deleteData
  // getOne
} from '../../api/index'
import Table from '../../components/Table.js'
import TableButtons from '../../components/TableButtons'
import TableContainer from '../../components/TableContainer'
import FormContainer from '../../components/FormContainer'
import Separator from '../../components/Separator'
import ExportButton from '../../components/ExportButton'

var getParams = function(url) {
  var params = {}
  var parser = document.createElement('a')
  parser.href = url
  var query = parser.search.substring(1)
  var vars = query.split('&')
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=')
    params[pair[0]] = decodeURIComponent(pair[1])
  }
  return params
}

const manifest = {
  schema: orphansSchema,
  path: 'orphans',
  title: 'بيانات الايتام',
  columns: [
    {
      Header: 'ملاحظات',
      accessor: 'notes'
    },
    {
      Header: 'حالة اليتيم',
      accessor: 'sponsorshipStatus'
    },
    {
      Header: 'حالة الصحية	',
      accessor: 'orphanHealth'
    },
    {
      Header: 'اسم اليتيم',
      accessor: 'orphanName'
    },
    {
      Header: 'رقم اليتيم',
      accessor: 'orphanId',
      Footer: row => (
        <span>
          {row.data.length} <strong>:عدد الايتام</strong>
        </span>
      )
    }
  ]
}

export default class Orphans extends Component {
  constructor(props) {
    super(props)
    this.state = {
      schema: {},
      editMode: false,
      editIndex: null,
      data: [],
      loading: false,
      dataToDownload: [],
      orphanFamilyId: '',
      numberOfFamilyMembers: getParams(window.location.href)
        .numberOfFamilyMembers,
      males: getParams(window.location.href).males,
      females: getParams(window.location.href).females,
      formId: getParams(window.location.href).formId,
      motherName: getParams(window.location.href).motherName,
      motherPhone: getParams(window.location.href).motherPhone,
      motherJob: getParams(window.location.href).motherJob,
      fatherName: getParams(window.location.href).fatherName,
      state: getParams(window.location.href).state,
      region: getParams(window.location.href).region,
      guardian: getParams(window.location.href).guardian,
      options: [],
      selectVal: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.editTableData = this.editTableData.bind(this)
    this.deleteTableData = this.deleteTableData.bind(this)
  }

  async componentDidMount() {
    getData('orphanSponsors').then(res => {
      let option = []
      res.forEach(r => {
        option.push({ value: r.sponsorId, label: r.sponsorId })
      })
      this.setState({ options: option })
      // console.log(option);
    })
    this.setState({ loading: true })
    this.fetchData()
  }

  fetchData = async () => {
    let orphanList = await getData(
      manifest.path + `/${this.props.match.params.orphanFamilyId}`
    )
    this.setState({
      data: [...orphanList],
      loading: false,
      schema: {},
      editMode: false,
      editIndex: null
    })
  }

  async handleSubmit(Schema) {
    this.setState({ schema: Schema.data, loading: true })
    if (this.state.editMode) {
      let x = Object.assign(Schema.data, {
        orphanFamilyId: this.props.match.params.orphanFamilyId,
        sponsorId: this.state.selectVal
      })
      await patchData(manifest.path, x)
      this.fetchData()
    } else {
      let x = Object.assign(Schema.data, {
        orphanFamilyId: this.props.match.params.orphanFamilyId,
        sponsorId: this.state.selectVal
      })
      await postData(manifest.path, x)
      this.fetchData()
    }
  }

  async editTableData(data, index) {
    this.setState({ loading: true })
    // let d = await getOne(`${manifest.path}/getOne`, data._id)
    this.setState({
      schema: data,
      editMode: true,
      editIndex: index,
      loading: false
    })
  }

  deleteTableData(data) {
    if (window.confirm('Are you sure you want to delete?')) {
      this.setState({ loading: true })
      deleteData(manifest.path, data.original)
      this.setState(prevState => {
        let arr = prevState.data
        arr.splice(data.index, 1)
        return { data: arr, loading: false }
      })
    } else {
      return
    }
  }

  getDataToDownLoad = () => {
    const currentRecords = this.reactTable.getResolvedState().sortedData
    var data_to_download = []
    for (var index = 0; index < currentRecords.length; index++) {
      let record_to_download = {}
      for (var colIndex = 0; colIndex < manifest.columns.length; colIndex++) {
        record_to_download[manifest.columns[colIndex].Header] =
          currentRecords[index][manifest.columns[colIndex].accessor]
      }
      data_to_download.push(record_to_download)
    }
    this.setState({ dataToDownload: data_to_download }, () => {
      // click the CSVLink component to trigger the CSV download
      // this.csvLink.link.click()
    })
    return data_to_download
  }

  download = async () => {
    await this.getDataToDownLoad()
    this.csvLink.link.click()
  }

  print = async () => {
    await this.getDataToDownLoad()
    let col = []
    for (let i = 0; i < manifest.columns.length; i++) {
      col.push(manifest.columns[i].Header)
    }
    printJS({
      printable: this.state.dataToDownload,
      properties: col,
      type: 'json',
      gridHeaderStyle:
        'color: black;  border: 2px solid #3971A5; font-weight: bold;',
      gridStyle: 'border: 2px solid #3971A5; text-align: center',
      header: `<h2 style="text-align:center">${manifest.title}</h2>`
    })
  }

  render() {
    let columns = [
      {
        Header: manifest.title,
        columns: [
          {
            Header: '',
            Cell: row => (
              <TableButtons
                row={row}
                handleEdit={this.editTableData}
                handleDelete={this.deleteTableData}
              />
            ),
            Footer: row => (
              <span>
                {row.data.length} <strong>:المجموع</strong>
              </span>
            )
          },
          // {
          //   Header: 'الكفالات',
          //   Cell: row => (
          //     <Link
          //       to={`/orphanSponsorships?orphanId=${row.original.orphanId}`}
          //       style={{
          //         display: 'flex',
          //         justifyContent: 'center',
          //         textDecoration: 'none'
          //       }}
          //     >
          //       <Button>الكفالات</Button>
          //     </Link>
          //   )
          // },
          ...manifest.columns
        ]
      }
    ]
    return (
      <>
        <FormContainer title={manifest.title}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginRight: '10px',
                width: '100%'
              }}
            >
              <label htmlFor="orphanFamId">كود الاسرة</label>
              <input
                id="orphanFamId"
                placeholder="كود الاسرة"
                disabled
                value={this.props.match.params.orphanFamilyId}
                style={{ padding: '4px 8px', borderRadius: '4px' }}
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: '10px',
                width: '100%'
              }}
            >
              <label htmlFor="motherName">اسم الام</label>
              <input
                id="motherName"
                placeholder="اسم الام"
                disabled
                value={this.props.match.params.wifeName}
                style={{ padding: '4px 8px', borderRadius: '4px' }}
              />
            </div>
          </div>

          <br />
          <hr />
          <br />
          <Form
            form={manifest.schema}
            onSubmit={this.handleSubmit}
            submission={{
              data: this.state.schema,
              orphanFamilyId: this.state.orphanFamilyId,
              sponsorId: this.state.selectVal
            }}
          />
          {/* {this.state.schema ? (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://heuristic-stallman-09135b.netlify.com/?orphanId=${this.state.schema.orphanId}&orphanName=${this.state.schema.orphanName}&orphanSex=${this.state.schema.orphanSex}&orphanNationality=${this.state.schema.orphanNationality}&orphanHealth=${this.state.schema.orphanHealth}&orphanDateOfBirth=${this.state.schema.orphanDateOfBirth}&fatherDeathDate=${this.state.schema.fatherDeathDate}&placeOfBirth=${this.state.schema.placeOfBirth}&notes=${this.state.schema.notes}&orphanFamilyId=${this.state.orphanFamilyId}&numberOfFamilyMembers=${this.state.numberOfFamilyMembers}&males=${this.state.males}&females=${this.state.females}&formId=${this.state.formId}&sponsorId=${this.state.schema.sponsorId}&motherPhone=${this.state.motherPhone}&motherName=${this.state.motherName}&motherJob=${this.state.motherJob}&fatherName=${this.state.fatherName}&guardian=${this.state.guardian}&region=${this.state.region}&state=${this.state.state}`}
            >
              <Button onClick={() => null}>طباعة</Button>
            </a>
          ) : (
            <div />
          )} */}
        </FormContainer>
        <Separator />
        <TableContainer>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <ExportButton title="تنزيل البيانات" handleExport={this.download} />
            <ExportButton title="طباعة البيانات" handleExport={this.print} />
          </div>
          <div>
            <CSVLink
              data={this.state.dataToDownload}
              filename="data.csv"
              className="hidden"
              ref={r => (this.csvLink = r)}
              target="_blank"
            />
          </div>
          <Table
            columnData={columns}
            tableData={this.state.data}
            loading={this.state.loading}
            r={r => (this.reactTable = r)}
          />
        </TableContainer>
      </>
    )
  }
}
