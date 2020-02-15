import React, { Component } from 'react'
import Form from 'react-formio/lib/components/Form'
import { CSVLink } from 'react-csv'
import { Button } from 'react-bootstrap'
import printJS from 'print-js'

// form schema
import sponsorshipSchema from '../schemas/sponsorship'
// api
import { patchData, postData, getData, deleteData, getOne } from '../api/index'

import Table from '../components/Table.js'
import TableButtons from '../components/TableButtons'
import TableContainer from '../components/TableContainer'
import FormContainer from '../components/FormContainer'
import Separator from '../components/Separator'
import ExportButton from '../components/ExportButton'
import ToastrBanner from '../components/Message'
import Message from '../data/toastrMessages'
import { sumAllRows, countAllRows } from '../util/tableMethods'

const manifest = {
  schema: sponsorshipSchema,
  path: 'sponsorship',
  title: 'بيانات الكفالات',
  columns: [
    {
      Header: 'ملف مغلق',
      id: 'isClosed',
      minWidth: 80,
      accessor: d => (d.isClosed ? 'ملف مغلق' : 'غير مغلق')
    },
    {
      Header: 'نوع الكفالة',
      accessor: 'typeOfSponsorship'
    },
    {
      Header: 'البنك',
      accessor: 'bank'
    },
    {
      Header: 'رقم الحساب',
      accessor: 'bankAccount'
    },
    {
      Header: 'المبلغ',
      accessor: 'amount',
      minWidth: 60,
      Footer: row => sumAllRows(row, 'amount')
    },
    {
      Header: 'المستفيد - بالانجليزي',
      accessor: 'recipientNameEnglish',
      minWidth: 130
    },
    {
      Header: 'المستفيد',
      accessor: 'recipientName',
      minWidth: 80
    },
    {
      Header: 'اسم الزوجة',
      accessor: 'wifeName'
    },
    {
      Header: 'اسم الزوج',
      accessor: 'husbandName'
    },
    {
      Header: 'رقم الارشفة', //'رقم استمارة ارشفة'
      accessor: 'familyId',
      minWidth: 80
    },
    {
      Header: 'رقم الكفالة',
      accessor: 'sponsorshipId',
      minWidth: 80
    }
  ]
}

export default class Reception extends Component {
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
    await this.setState({ schema: Schema.data, loading: true })
    let dateFormat = /^\d{4}-\d{2}-\d{2}$/
    if (
      !this.state.schema.startDate.match(dateFormat) ||
      !this.state.schema.endDate.match(dateFormat)
    ) {
      ToastrBanner('error', Message.dataPostingFailed)
      ToastrBanner('warn', Message.enterDateInCorrectFormat)
      this.setState({ schema: Schema.data, loading: false })
      return 0
    }
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
    let columns = [
      {
        Header: manifest.title,
        columns: [
          {
            Header: '',
            minWidth: 60,
            Cell: row => (
              <TableButtons
                row={row}
                handleEdit={this.editTableData}
                handleDelete={this.deleteTableData}
                showDelete={true}
              />
            ),
            Footer: row => countAllRows(row)
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
          <form
            action={`https://alrahma4mc.com/log/elFinder-2.1.49/files/morfiqatkaf/morfiqatkaf/${this.state.schema.sponsorshipFormId}.pdf`}
          >
            <Button
              variant="primary"
              type="submit"
              style={{ backgroundColor: '#007bff', color: 'white' }}
              onClick={() => console.log(this.state.schema.formId)}
            >
              تحميل الملف
            </Button>
          </form>
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
