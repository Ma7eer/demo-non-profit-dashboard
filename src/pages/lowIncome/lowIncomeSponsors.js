import React, { Component } from 'react'
import Form from 'react-formio/lib/components/Form'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CSVLink } from 'react-csv'
import printJS from 'print-js'

/* CHANGE THIS */
import lowIncomeSponsorsSchema from '../../schemas/lowIncome/lowIncomeSponsors'
/* CHANGE THIS */

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

const manifest = {
  schema: lowIncomeSponsorsSchema,
  path: 'lowIncomeSponsors' /* CHANGE THIS */,
  title: 'بيانات كفلاء الاسر المعسرة',
  columns: [
    {
      Header: 'حالة الكفيل',
      id: 'isActive',
      accessor: d => (d.isActive ? 'غير فعال' : 'فعال')
    },
    {
      Header: 'الملاحظات',
      accessor: 'notes'
    },
    {
      Header: 'تاريخ الدفع',
      accessor: 'dateOfPayment'
    },
    {
      Header: 'المبلغ',
      accessor: 'paymentAmount'
    },
    {
      Header: 'طريقة الدفع',
      accessor: 'paymentMethod'
    },
    {
      Header: '	اسم الكفيل',
      accessor: 'sponsorName'
    },
    {
      Header: 'رقم الكفيل',
      accessor: 'sponsorId'
    }
  ]
}

export default class LowIncomeSponsors extends Component {
  constructor(props) {
    super(props)
    this.state = {
      schema: {},
      editMode: false,
      editIndex: null,
      data: [],
      loading: false,
      dataToDownload: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.editTableData = this.editTableData.bind(this)
    this.deleteTableData = this.deleteTableData.bind(this)
  }

  componentDidMount() {
    this.setState({ loading: true })
    getData(manifest.path)
      .then(res => this.setState({ data: [...res], loading: false }))
      .catch(err => console.log(err))
  }

  async handleSubmit(Schema) {
    this.setState({ schema: Schema.data, loading: true })
    if (this.state.editMode) {
      await patchData(manifest.path, Schema.data)
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
      await postData(manifest.path, Schema.data)
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
    let d = await getOne(manifest.path, data._id)
    this.setState({
      schema: d,
      editMode: true,
      editIndex: index,
      loading: false
    })
  }

  deleteTableData(data) {
    this.setState({ loading: true })
    deleteData(manifest.path, data.original)
    this.setState(prevState => {
      let arr = prevState.data
      arr.splice(data.index, 1)
      return { data: arr, loading: false }
    })
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
          //   Header: 'الدفع',
          //   Cell: row => (
          //     <Link
          //       to={`lowIncomePayments?sponsorId=${row.original.sponsorId}`}
          //       style={{
          //         display: 'flex',
          //         justifyContent: 'center',
          //         textDecoration: 'none'
          //       }}
          //     >
          //       <Button>الدفع</Button>
          //     </Link>
          //   )
          // },
          {
            Header: 'الكفالات',
            Cell: row => (
              <Link // ?sponsorId=${row.original.sponsorId}
                to={`lowIncomeSponsorships/?sponsorId=${row.original.sponsorId}`}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  textDecoration: 'none'
                }}
              >
                <Button>الكفالات</Button>
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
            loading={this.state.loading}
            r={r => (this.reactTable = r)}
          />
        </TableContainer>
        {/* <TableContainer>
          <Table
            columnData={columns}
            tableData={this.state.data}
            loading={this.state.loading}
          />
        </TableContainer> */}
      </>
    )
  }
}
