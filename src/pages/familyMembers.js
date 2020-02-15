import React, { Component } from 'react'
import Form from 'react-formio/lib/components/Form'
import { CSVLink } from 'react-csv'
import PropTypes from 'prop-types'
import printJS from 'print-js'

import familyMembersSchema from '../schemas/familyMembers'
import { patchData, postData, getData, deleteData, getOne } from '../api/index'

import Table from '../components/Table.js'
import TableButtons from '../components/TableButtons'
import TableContainer from '../components/TableContainer'
import FormContainer from '../components/FormContainer'
import Separator from '../components/Separator'
import ExportButton from '../components/ExportButton'
import { sumAllRows } from '../util/tableMethods'

const manifest = {
  schema: familyMembersSchema,
  path: 'familyMembers',
  title: 'بيانات افراد الاسرة',
  columns: [
    {
      Header: 'حالة صحية',
      accessor: 'health'
    },
    {
      Header: 'قسط الشهري',
      accessor: 'monthlyInstallment'
    },
    {
      Header: 'مبلغ القرض',
      accessor: 'familyMemberLoan'
    },
    {
      Header: 'الراتب',
      accessor: 'familyMemberSalary'
    },
    {
      Header: 'المهنة',
      accessor: 'job'
    },
    {
      Header: 'صلة القرابة',
      accessor: 'relation'
    },
    {
      Header: 'الاسم',
      accessor: 'familyMemberName'
    },
    {
      Header: 'رقم الفرد',
      accessor: 'familyMemberId'
    },
    {
      Header: 'رقم الاسرة',
      accessor: 'familyId'
    }
  ]
}

export default class FamilyMembers extends Component {
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
      Id: Id
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.editTableData = this.editTableData.bind(this)
    this.deleteTableData = this.deleteTableData.bind(this)
  }

  componentDidMount() {
    this.setState({ loading: true })
    if (this.state.Id !== undefined) {
      getData(manifest.path + `/getOne/${this.state.Id}`)
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
            Footer: row => sumAllRows(row)
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
            title=""
            loading={this.state.loading}
            r={r => (this.reactTable = r)}
          />
        </TableContainer>
      </>
    )
  }
}

FamilyMembers.propTypes = {
  location: PropTypes.string
}
