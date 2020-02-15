import React, { Component } from 'react'
import Form from 'react-formio/lib/components/Form'
import { CSVLink } from 'react-csv'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import printJS from 'print-js'

import lowIncomeSponsorShipsSchema from '../../schemas/lowIncome/lowIncomeSponsorships'
import {
  patchData,
  postData,
  getData,
  deleteData,
  getOne
} from '../../api/index'

import Table from '../../components/Table.js'
import TableButtons from '../../components/TableButtons'
import TableContainer from '../../components/TableContainer'
import FormContainer from '../../components/FormContainer'
import Separator from '../../components/Separator'
import ExportButton from '../../components/ExportButton'
import { rn } from '../../util/randomNumber'

const manifest = {
  schema: lowIncomeSponsorShipsSchema,
  path: 'lowIncomeSponsorships',
  title: 'بيانات كفالات الاسر المعسرة',
  columns: [
    {
      Header: 'ملاحظات',
      accessor: 'notes'
    },
    {
      Header: 'الحالة',
      accessor: 'sponsorshipStatus'
    },
    {
      Header: 'المبلغ',
      accessor: 'amount'
    },
    {
      Header: 'رقم الاسرة',
      accessor: 'lowIncomeFamilyId'
    },
    {
      Header: 'كود الكفيل',
      accessor: 'sponsorId'
    },
    {
      Header: 'رقم الكفالة',
      accessor: 'sponsorshipId'
    }
  ]
}

export default class LowIncomeSponsorShips extends Component {
  constructor(props) {
    super(props)
    this.state = {
      schema: {},
      editMode: false,
      editIndex: null,
      data: [],
      loading: false,
      dataToDownload: [],
      sponsorshipId: rn(),
      sponsorId: '',
      lowIncomeFamilyId: '',
      objectURL: null
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.editTableData = this.editTableData.bind(this)
    this.deleteTableData = this.deleteTableData.bind(this)
  }

  componentDidMount() {
    this.setState({ loading: true })
    this.fetchData()
  }

  fetchData = () => {
    let url = window.location.href
    let objectURL = new URL(url)
    let id = objectURL.searchParams.get('lowIncomeFamilyId')
      ? objectURL.searchParams.get('lowIncomeFamilyId')
      : objectURL.searchParams.get('sponsorId')
    this.setState({ objectURL: objectURL })

    if (objectURL.searchParams.get('sponsorId')) {
      this.setState({ sponsorId: objectURL.searchParams.get('sponsorId') })
    } else {
      this.setState({
        lowIncomeFamilyId: objectURL.searchParams.get('lowIncomeFamilyId')
      })
    }

    if (objectURL.searchParams.get('lowIncomeFamilyId')) {
      getData(manifest.path + `/getBy2/${id}`)
        .then(res => this.setState({ data: [...res], loading: false }))
        .catch(err => console.log(err))
    } else if (objectURL.searchParams.get('sponsorId')) {
      getData(manifest.path + `/getBy/${id}`)
        .then(res => this.setState({ data: [...res], loading: false }))
        .catch(err => console.log(err))
    } else {
      getData(manifest.path)
        .then(res => this.setState({ data: [...res], loading: false }))
        .catch(err => console.log(err))
    }
  }

  async handleSubmit(Schema) {
    this.setState({ schema: Schema.data, loading: true })
    let submittedData = Object.assign(Schema.data, {
      sponsorshipId: this.state.sponsorshipId,
      sponsorId: this.state.sponsorId,
      lowIncomeFamilyId: this.state.lowIncomeFamilyId
    })
    if (this.state.editMode) {
      await patchData(manifest.path, submittedData)
      this.fetchData()
      this.setState({
        schema: {},
        editMode: false,
        loading: false,
        sponsorshipId: rn(),
        sponsorId: '',
        lowIncomeFamilyId: ''
      })
    } else {
      await postData(manifest.path, submittedData)
      // await getData(manifest.path).then(res => {
      this.setState({
        // data: res,
        schema: {},
        editMode: false,
        loading: false,
        sponsorshipId: rn(),
        sponsorId: '',
        lowIncomeFamilyId: ''
      })
      this.fetchData()
      // })
    }
  }

  async editTableData(data, index) {
    this.setState({ loading: true })
    let d = await getOne(manifest.path, data._id)
    if (d.sponsorshipId === '') {
      d.sponsorshipId = rn()
    }
    this.setState({
      schema: data,
      editMode: true,
      editIndex: index,
      loading: false,
      sponsorshipId: d.sponsorshipId,
      sponsorId: d.sponsorId,
      lowIncomeFamilyId: d.lowIncomeFamilyId
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
            Cell: row => (
              <Link // ?sponsorId=${row.original.sponsorId}
                to={`/lowIncomePayments/?sponsorshipId=${row.original.sponsorshipId}`}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  textDecoration: 'none'
                }}
              >
                <Button>الدفع</Button>
              </Link>
            )
          },
          ...manifest.columns
        ]
      }
    ]
    return (
      <>
        <FormContainer title={manifest.title}>
          <div style={{ display: 'flex' }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '33.33%',
                margin: '5px'
              }}
            >
              <label htmlFor="lowIncomeFamilyId">رقم الاسرة</label>
              <input
                id="lowIncomeFamilyId"
                name="lowIncomeFamilyId"
                placeholder="رقم الاسرة"
                type="number"
                value={this.state.lowIncomeFamilyId}
                onChange={e =>
                  this.setState({ lowIncomeFamilyId: e.target.value })
                }
                style={{ padding: '5px' }}
                disabled={
                  this.state.objectURL
                    ? this.state.objectURL.searchParams.get('lowIncomeFamilyId')
                      ? true
                      : false
                    : false
                }
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
              <label htmlFor="sponsorId">رقم الكفيل</label>
              <input
                id="sponsorId"
                name="sponsorId"
                placeholder="رقم الكفيل"
                type="number"
                value={this.state.sponsorId}
                onChange={e => this.setState({ sponsorId: e.target.value })}
                style={{ padding: '5px' }}
                disabled={
                  this.state.objectURL
                    ? this.state.objectURL.searchParams.get('sponsorId')
                      ? true
                      : false
                    : false
                }
              />
            </div>
          </div>

          <Form
            form={manifest.schema}
            onSubmit={this.handleSubmit}
            submission={{ data: this.state.schema }}
          />
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
