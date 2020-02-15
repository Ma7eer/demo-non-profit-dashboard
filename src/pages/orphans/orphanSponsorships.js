import React, { Component } from 'react'
import Form from 'react-formio/lib/components/Form'
import { CSVLink } from 'react-csv'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import printJS from 'print-js'

import orphanSponsorShipsSchema from '../../schemas/orphans/orphanSponsorships'
import {
  patchData,
  postData,
  getData,
  deleteData,
  getOne,
  getDataQuietly
} from '../../api/index'
import ToastrBanner from '../../components/Message'
import Message from '../../data/toastrMessages'

import Table from '../../components/Table.js'
import TableButtons from '../../components/TableButtons'
import TableContainer from '../../components/TableContainer'
import FormContainer from '../../components/FormContainer'
import Separator from '../../components/Separator'
import ExportButton from '../../components/ExportButton'
import { rn } from '../../util/randomNumber'

const manifest = {
  schema: orphanSponsorShipsSchema,
  path: 'orphanSponsorships',
  title: 'بيانات الكفالات',
  columns: [
    {
      Header: 'ملاحظات',
      accessor: 'notes'
    },
    {
      Header: 'الحالة',
      accessor: 'sponsorshipStatus'
    },
    // {
    //   Header: 'المبلغ',
    //   accessor: 'endDate',
    //   Cell: props => {
    //     let reg = /[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/
    //     let d = props.value ? props.value.match(reg) : ['']
    //     console.log(d[0])
    //     return <span>{d[0]}</span>
    //   }
    // },
    {
      Header: 'المبلغ',
      accessor: 'amount'
    },
    {
      Header: 'كود الكفيل',
      accessor: 'sponsorId'
    },
    {
      Header: 'اسم اليتيم',
      accessor: 'orphanName'
    },
    {
      Header: 'كود اليتيم',
      accessor: 'orphanId'
    },
    {
      Header: 'رقم الكفالة',
      accessor: 'sponsorshipId'
    }
    // {
    //   Header: 'اسم اليتيم',
    //   accessor: 'orphanName'
    // }
  ]
}

export default class OrphanSponsors extends Component {
  constructor(props) {
    super(props)
    let str = this.props.location.search
    const re = /=([^&]+)/
    let Id
    if (str.match(re) != null) {
      Id = str.match(re)[1]
    }
    this.state = {
      schema: {},
      editMode: false,
      editIndex: null,
      data: [],
      loading: false,
      dataToDownload: [],
      Id: Id,
      orphanId: null,
      sponsorId: null,
      sponsorshipId: rn(),
      options: [],
      selectVal: Id,
      options2: [],
      selectVal2: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.editTableData = this.editTableData.bind(this)
    this.deleteTableData = this.deleteTableData.bind(this)
  }

  fetchData = () => {
    if (this.state.Id !== undefined) {
      getData(manifest.path + `/getBy/${this.state.Id}`)
        // .then(res => console.log(res))
        .then(res => this.setState({ data: [...res], loading: false }))
        .catch(err => console.log(err))
    } else {
      getData(manifest.path)
        // .then(res => console.log(res))
        .then(res => this.setState({ data: [...res], loading: false }))
        .catch(err => console.log(err))
    }
  }

  componentDidMount() {
    // let url = window.location.href
    // let objectUrl = new URL(url)
    // let param = objectUrl.searchParams.get('sponsorId')
    //   ? objectUrl.searchParams.get('sponsorId')
    //   : objectUrl.searchParams.get('orphanId')
    this.fetchData()
    getDataQuietly('orphans').then(res => {
      let option = []
      res.forEach(r => {
        option.push({ value: r.orphanId, label: r.orphanId })
      })
      this.setState({ options2: option })
    })
    this.setState({ loading: true })
  }

  async handleSubmit(Schema) {
    let submittedData = Object.assign(Schema.data, {
      orphanId: this.state.selectVal2,
      sponsorId: this.state.selectVal,
      sponsorshipId: this.state.sponsorshipId
    })

    this.setState({ schema: Schema.data, loading: true })
    if (this.state.editMode) {
      await patchData(manifest.path, submittedData)
      await getData(manifest.path + `/getBy/${this.state.Id}`).then(res =>
        this.setState(() => {
          // let arr = res
          // arr.splice(this.state.editIndex, 1, Schema.data)
          return {
            schema: {},
            editMode: false,
            data: [...res],
            editIndex: null,
            loading: false
          }
        })
      )
      this.setState({
        orphanId: '',
        sponsorId: '',
        sponsorshipId: rn(),
        selectVal: '',
        selectVal2: ''
      })
    } else {
      await postData(manifest.path, submittedData)
      await getData(manifest.path + `/getBy/${this.state.Id}`).then(res => {
        this.setState({
          data: res,
          schema: {},
          editMode: false,
          loading: false
        })
      })
      this.setState({
        orphanId: '',
        sponsorId: '',
        sponsorshipId: rn(),
        selectVal: '',
        selectVal2: ''
      })
    }
  }

  async editTableData(data, index) {
    this.setState({ loading: true })
    let d = await getOne(manifest.path, data._id)
    if (d.sponsorshipId === '') {
      d.sponsorshipId = rn()
    }
    this.setState({
      schema: d,
      editMode: true,
      editIndex: index,
      loading: false,
      selectVal2: d.orphanId,
      selectVal: d.sponsorId,
      sponsorshipId: d.sponsorshipId
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
      gridStyle: 'border: 2px solid #3971A5; text-align: center'
    })
  }

  render() {
    const columns = [
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
          {
            Header: 'الدفع',
            Cell: row =>
              row.original.sponsorshipId.length > 0 ? (
                <Link // ?sponsorId=${row.original.sponsorId}
                  to={`/orphanPayments/?sponsorshipId=${row.original.sponsorshipId}`}
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    textDecoration: 'none'
                  }}
                >
                  <Button>الدفع</Button>
                </Link>
              ) : (
                <Button>الدفع</Button>
              )
          },
          ...manifest.columns
        ]
      }
    ]
    return (
      <>
        <FormContainer title={manifest.title}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '33.33%',
                margin: '5px'
              }}
            >
              <label htmlFor="sponsorId">كود الكفيل</label>
              <input
                id="sponsorId"
                name="sponsorId"
                placeholder="كود الكفيل"
                type="number"
                value={this.state.selectVal}
                // onChange={e => this.setState({ sponsorId: e.target.value })}
                style={{ padding: '5px' }}
                disabled
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '33.33%',
                margin: '5px'
              }}
            >
              <label htmlFor="sponsorshipId">رقم الكفالة</label>
              <input
                id="sponsorshipId"
                name="sponsorshipId"
                placeholder="رقم الكفالة"
                type="number"
                value={this.state.sponsorshipId}
                onChange={e => this.setState({ sponsorshipId: e.target.value })}
                style={{ padding: '5px' }}
                disabled
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '33.33%',
                margin: '5px'
              }}
            >
              <label htmlFor="orphanId">كود اليتيم</label>
              <select
                id="orphanId"
                value={this.state.selectVal2}
                onChange={e => this.setState({ selectVal2: e.target.value })}
                style={{
                  backgroundColor: 'white',
                  width: '100%',
                  padding: '5px'
                }}
              >
                {this.state.options2.map((option, i) => (
                  <option key={i}>{option.value}</option>
                ))}
              </select>
            </div>
          </div>

          <br />
          <hr />

          <Form
            form={manifest.schema}
            onSubmit={this.handleSubmit}
            submission={{
              orphanId: this.state.orphanId,
              sponsorId: this.state.sponsorId,
              sponsorshipId: this.state.sponsorshipId,
              data: this.state.schema
            }}
          />
          {this.state.schema && this.state.editMode ? (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://heuristic-stallman-09135b.netlify.com/?orphanId=${this.state.schema.orphanId}&sponsorId=${this.state.schema.sponsorId}`}
              onClick={() => null}
            >
              <Button onClick={() => null}>طباعة</Button>
            </a>
          ) : (
            <Button onClick={() => ToastrBanner('warn', Message.selectFirst)}>
              طباعة
            </Button>
          )}
          {/* &orphanName=${this.state.schema.orphanName}&orphanSex=${this.state.schema.orphanSex}&orphanNationality=${this.state.schema.orphanNationality}&orphanHealth=${this.state.schema.orphanHealth}&orphanDateOfBirth=${this.state.schema.orphanDateOfBirth}&fatherDeathDate=${this.state.schema.fatherDeathDate}&placeOfBirth=${this.state.schema.placeOfBirth}&notes=${this.state.schema.notes}&orphanFamilyId=${this.state.orphanFamilyId}&numberOfFamilyMembers=${this.state.numberOfFamilyMembers}&males=${this.state.males}&females=${this.state.females}&formId=${this.state.formId}&&motherPhone=${this.state.motherPhone}&motherName=${this.state.motherName}&motherJob=${this.state.motherJob}&fatherName=${this.state.fatherName}&guardian=${this.state.guardian}&region=${this.state.region}&state=${this.state.state} */}
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
            title=""
            loading={this.state.loading}
            r={r => (this.reactTable = r)}
          />
        </TableContainer>
      </>
    )
  }
}
