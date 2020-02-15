import React, { Component } from 'react'
import Form from 'react-formio/lib/components/Form'
import { CSVLink } from 'react-csv'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import printJS from 'print-js'

// form schema
import lowIncomeFamiliesSchema from '../../schemas/lowIncome/lowIncomeFamilies'
// api
import {
  patchData,
  postData,
  getData,
  deleteData,
  getOne,
  getDataQuietly
} from '../../api/index'

// import Table from '../../components/Table.js'
import TableButtons from '../../components/TableButtons'
import TableContainer from '../../components/TableContainer'
import FormContainer from '../../components/FormContainer'
import Separator from '../../components/Separator'
import ExportButton from '../../components/ExportButton'

/* TODO: 
  make edit work at all times
  try making conditional if not equal to expander then return
*/
const manifest = {
  schema: lowIncomeFamiliesSchema,
  path: ['lowIncomeFamilies', 'family/report'],
  title: 'بيانات الاسر المعسرة',
  columns: [
    {
      Header: 'حالة الاسرة',
      id: 'isActive',
      accessor: d => (d.isActive ? 'غير فعال' : 'فعال')
    },
    {
      Header: 'الملاحظات',
      accessor: 'notes'
    },
    {
      Header: 'اسم المركز',
      accessor: 'shoppingCenterName'
    },
    {
      Header: 'تاريخ انتهاء الكفالة',
      accessor: 'endDate'
    },
    {
      Header: 'رقم الارشفة',
      accessor: 'formId'
    },
    {
      Header: 'رقم الاسرة المعسرة',
      accessor: 'lowIncomeFamilyId'
    }
  ],
  subColumn: [
    {
      Header: 'المنطقة',
      accessor: 'familyAddress.0.state'
    },
    {
      Header: 'اسم الزوجة',
      accessor: 'wife.0.wifeName'
    },
    {
      Header: '	اسم الزوج',
      accessor: 'husband.0.husbandName'
    }
  ]
}

export default class LowIncomeFamilies extends Component {
  constructor(props) {
    super(props)
    this.state = {
      schema: {},
      editMode: false,
      editIndex: null,
      data: [],
      subData: [],
      loading: false,
      subLoading: false,
      dataToDownload: [],
      isOpen: true,
      expanded: {},
      husbandName: '',
      wifeName: '',
      state: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.editTableData = this.editTableData.bind(this)
    this.deleteTableData = this.deleteTableData.bind(this)
  }

  async componentDidMount() {
    await this.setState({ loading: true })
    await getData(manifest.path[0])
      .then(res => this.setState({ data: [...res], loading: false }))
      .catch(err => console.log(err))
  }

  async handleSubmit(Schema) {
    this.setState({ schema: Schema.data, loading: true })
    if (this.state.editMode) {
      patchData(manifest.path[0], Schema.data)
      getData(manifest.path[0]).then(res =>
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
      await postData(manifest.path[0], Schema.data)
      await getData(manifest.path[0]).then(res => {
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
    let a = []
    this.setState({ expanded: {}, subData: a })
    await this.fetchFam(data.formId)

    await this.setState({ loading: true })
    let d = await getOne(manifest.path[0], data._id)
    let merged = await { ...this.state.subData[0], ...d }
    this.setState({
      schema: merged,
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

  fetchFam = formId => {
    this.setState({ subLoading: true })
    getDataQuietly(`family/orphans/${formId}`)
      .then(res => {
        if (res.length > 1) {
          let arr = []
          this.setState({
            subData: arr,
            subLoading: false
          })
        } else {
          let arr = []
          arr.push(res)
          this.setState({
            subData: arr,
            subLoading: false
          })
        }
      })
      .catch(err => console.log(err))
  }

  changeExpanded = (newExpanded, index, event) => {
    if (newExpanded[index[0]] === false) {
      newExpanded = {}
    } else {
      Object.keys(newExpanded).map(
        k => (newExpanded[k] = parseInt(k) === index[0] ? {} : false)
      )
    }
    this.setState({
      ...this.state,
      expanded: newExpanded
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
          {/* <Table
            columnData={columns}
            tableData={this.state.data}
            loading={this.state.loading}
            r={r => (this.reactTable = r)}
          /> */}
          <ReactTable
            data={this.state.data}
            columns={columns}
            loading={this.state.loading}
            filterable={true}
            collapseOnDataChange={false}
            freezeWhenExpanded={true}
            expanded={this.state.expanded}
            onExpandedChange={(newExpanded, index, event) =>
              this.changeExpanded(newExpanded, index, event)
            }
            getTrProps={(state, rowInfo, column, instance) => {
              return {
                onClick: (e, handleOriginal) => {
                  // console.log(rowInfo.original.formId)
                  if (e.target.classList.value === 'rt-expander') {
                    this.fetchFam(rowInfo.original.formId)
                    if (handleOriginal) {
                      handleOriginal()
                    }
                  }
                }
              }
            }}
            SubComponent={() => (
              <ReactTable
                data={this.state.subData}
                columns={manifest.subColumn}
                showPagination={false}
                defaultPageSize={3}
                loading={this.state.subLoading}
              />
            )}
          />
        </TableContainer>
      </>
    )
  }
}
