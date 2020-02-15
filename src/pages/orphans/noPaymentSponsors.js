import React, { Component } from 'react'
// import Form from 'react-formio/lib/components/Form'
import { CSVLink } from 'react-csv'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import printJS from 'print-js'

import orphansSchema from '../../schemas/orphans/orphans'
import {
  patchData,
  postData,
  getData,
  deleteData,
  getOne
} from '../../api/index'
import Table from '../../components/Table.js'
// import TableButtons from '../../components/TableButtons'
import TableContainer from '../../components/TableContainer'
import ExportButton from '../../components/ExportButton'

const manifest = {
  schema: orphansSchema,
  path: 'orphanSponsors/noPaymentSponsors',
  title: 'بيانات الكفلاء بلا دفعات',
  columns: [
    {
      Header: 'حالة الكفيل',
      accessor: 'sponsorStatus'
    },
    {
      Header: 'رقم الحساب',
      accessor: 'sponsorBankAccountNum'
    },
    {
      Header: 'رقم الكفيل',
      accessor: 'sponsorPhone'
    },
    {
      Header: 'اسم الكفيل',
      accessor: 'sponsorName'
    },
    {
      Header: 'رقم الكفالة',
      accessor: 'sponsorshipId'
    },
    {
      Header: 'رقم الكفيل',
      accessor: 'sponsorId'
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
    })
    this.setState({ loading: true })
    this.fetchData()
  }

  fetchData = async () => {
    let noPaymentSponsorsList = await getData(manifest.path)
    // console.log(noPaymentSponsorsList)
    this.setState({
      data: [...noPaymentSponsorsList],
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
        sponsorId: this.state.selectVal
      })
      await patchData(manifest.path, x)
      await getData(manifest.path).then(res =>
        this.setState(() => {
          let arr = res
          arr.splice(this.state.editIndex, 1, Schema.data)
          return {
            schema: {},
            editMode: false,
            data: arr,
            editIndex: null,
            loading: false
          }
        })
      )
    } else {
      let x = Object.assign(Schema.data, {
        sponsorId: this.state.selectVal
      })
      await postData(manifest.path, x)
      await getData(manifest.path).then(res => {
        this.setState({
          data: res,
          schema: {},
          editMode: false,
          loading: false
        })
      })
    }
  }

  async editTableData(data, index) {
    this.setState({ loading: true })
    let d = await getOne(`${manifest.path}/getOne`, data._id)
    this.setState({
      schema: d,
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
          //   {
          //     Header: '',
          //     Cell: row => (
          //       <TableButtons
          //         row={row}
          //         handleEdit={this.editTableData}
          //         // handleDelete={this.deleteTableData}
          //         showDelete={false}
          //       />
          //     ),
          //     Footer: row => (
          //       <span>
          //         {row.data.length} <strong>:المجموع</strong>
          //       </span>
          //     )
          //   },
          {
            Header: '',
            Cell: row => (
              <Link
                to={`/orphanSponsors?sponsorId=${row.original.sponsorId}`}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  textDecoration: 'none'
                }}
              >
                <Button>الكفيل</Button>
              </Link>
            )
          },
          ...manifest.columns
        ]
      }
    ]
    return (
      <>
        {/* <FormContainer title={manifest.title}>
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
              <label>كود الاسرة</label>
              <input
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
              <label>اسم الام</label>
              <input
                placeholder="اسم الام"
                disabled
                value={this.props.match.params.wifeName}
                style={{ padding: '4px 8px', borderRadius: '4px' }}
              />
            </div>
          </div>
          {/* <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start'
            }}
          >
            <label>رقم الكفيل</label>
            <select
              value={this.state.selectVal}
              onChange={e => this.setState({ selectVal: e.target.value })}
              style={{
                backgroundColor: 'white',
                width: '100%',
                padding: '4px'
              }}
            >
              {' '}
              {this.state.options.map(option => (
                <option>{option.value}</option>
              ))}
            </select>
          </div> */}
        {/* <br />
          <hr />
          <br /> */}
        {/* <Form
            form={manifest.schema}
            onSubmit={this.handleSubmit}
            submission={{
              data: this.state.schema,
              orphanFamilyId: this.state.orphanFamilyId,
              sponsorId: this.state.selectVal
            }}
          /> */}
        {/* </FormContainer> */}
        {/* <Separator />  */}
        <h1>{manifest.title}</h1>
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
