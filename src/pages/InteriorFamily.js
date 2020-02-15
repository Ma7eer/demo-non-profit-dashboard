import React, { Component } from 'react'
import Form from 'react-formio/lib/components/Form'
import { CSVLink } from 'react-csv'
import { Button } from 'react-bootstrap'
import printJS from 'print-js'

// core components
import interiorFamilySchema from '../schemas/family'
import { getData, postData, patchData, deleteData, getOne } from '../api/index'
import Table from '../components/Table.js'
import TableButtons from '../components/TableButtons'
import TableContainer from '../components/TableContainer'
import FormContainer from '../components/FormContainer'
import Separator from '../components/Separator'
import ExportButton from '../components/ExportButton'
import Message from '../components/Message'
import { compare } from '../util/compare.js'
import {
  boolDropDownFilter,
  boolFilterMethod,
  sumAllRows
} from '../util/tableMethods'

const manifest = {
  schema: interiorFamilySchema,
  path: ['interiorFamily', 'interiorFamily/main'],
  title: 'دراسة حالة أسر الولايات',
  columns: [
    {
      Header: 'مؤرشف',
      accessor: 'isArchived',
      id: 'isArchived',
      Cell: ({ value }) => (value === true ? 'نعم' : 'لا'),
      filterMethod: (filter, row) => boolFilterMethod(filter, row),
      Filter: ({ filter, onChange }) => boolDropDownFilter(filter, onChange)
    },
    {
      Header: 'تاريخ دراسة الحالة',
      accessor: 'dateOfCaseStudy'
    },
    {
      Header: '	البلدة',
      accessor: 'familyAddress.0.town'
    },
    {
      Header: '	الولاية',
      accessor: 'familyAddress.0.state'
    },
    {
      Header: '	رقم مدني',
      accessor: 'wife.0.wifeCivilId'
    },
    {
      Header: ' هاتف الزوجة',
      accessor: 'wife.0.wifePhone'
    },
    {
      Header: '	اسم الزوجة',
      accessor: 'wife.0.wifeName'
    },
    {
      Header: '	رقم مدني',
      accessor: 'husband.0.husbandCivilId'
    },
    {
      Header: 'هاتف الزوج',
      accessor: 'husband.0.husbandPhone'
    },
    {
      Header: '	اسم الزوج',
      accessor: 'husband.0.husbandName'
    },
    // {
    //   Header: 'رقم ملف الأسرة',
    //   accessor: 'formId'
    // },
    {
      Header: 'رقم ملف الأسرة',
      accessor: 'familyId'
      // 'رقم الاستمارة'
    }
  ]
}

export default class InteriorFamily extends Component {
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
    getData(manifest.path[1])
      // .then(res => console.log(res.sort(compare)))
      .then(res =>
        this.setState({ data: [...res.sort(compare)], loading: false })
      )
      .catch(err => Message('warn', 'فشل في جلب البيانات من قاعدة البيانات'))
  }

  async handleSubmit(Schema) {
    this.setState({ schema: Schema.data, loading: true })
    if (this.state.editMode) {
      await patchData(manifest.path[0], Schema.data)
      await getData(manifest.path[1]).then(res =>
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
      await getData(manifest.path[1]).then(res => {
        this.setState({
          data: [...res],
          schema: {},
          editMode: false,
          editIndex: null,
          loading: false
        })
      })
    }
  }

  async editTableData(data, index) {
    this.setState({ loading: true })
    let d = await getOne(manifest.path[0] + '/getOne', data._id)
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
      deleteData(manifest.path[0], data.original)
      this.setState(prevState => {
        let arr = prevState.data
        arr.splice(data.index, 1)
        return { data: arr, loading: false }
      })
    } else {
      return
    }
  }

  getDataToDownLoad = event => {
    const currentRecords = this.reactTable.getResolvedState().sortedData
    var data_to_download = []
    for (var index = 0; index < currentRecords.length; index++) {
      let record_to_download = {}
      for (var colIndex = 0; colIndex < manifest.columns.length; colIndex++) {
        // This is a hack and we should find a better solution
        // since currentRecords[index][manifest.columns[colIndex].accessor]
        // returns TRUE or FALSE the excel file would show TRUE or FALSE and
        // sometimes
        // this can be buggy on excel
        // this solution checks if we are looking at the first item in our
        // manifest.column (isArchived in this case) then we should check true
        // and false and hard code values into them otherwise print normally
        if (colIndex === 0) {
          if (
            currentRecords[index][manifest.columns[colIndex].accessor] === true
          ) {
            record_to_download[manifest.columns[colIndex].Header] = 'نعم'
          } else {
            record_to_download[manifest.columns[colIndex].Header] = 'لا'
          }
        } else {
          record_to_download[manifest.columns[colIndex].Header] =
            currentRecords[index][manifest.columns[colIndex].accessor]
        }
      }

      data_to_download.push(record_to_download)
    }
    this.setState({ dataToDownload: data_to_download }, () => {
      // click the CSVLink component to trigger the CSV download
      // this.csvLink.link.click()
    })
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
            Cell: row => (
              <TableButtons
                row={row}
                handleEdit={this.editTableData}
                handleDelete={this.deleteTableData}
              />
            ),
            Footer: row => sumAllRows(row)
          },
          // {
          //   Header: "افراد الاسرة",
          //   Cell: row => (
          //     <Link
          //       to={`familyMembers?familyId=${row.original.familyId}`}
          //       style={{
          //         display: "flex",
          //         justifyContent: "center",
          //         textDecoration: "none"
          //       }}
          //     >
          //       <Button onClick={() => console.log(row.original.familyId)}>
          //         افراد الاسرة
          //       </Button>
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
          <Form
            form={manifest.schema}
            onSubmit={this.handleSubmit}
            submission={{ data: this.state.schema }}
          />
          <form
            action={`https://alrahma4mc.com/log/elFinder-2.1.49/files/morfiqatWilayat/file/${this.state.schema.familyId}.pdf`}
          >
            <Button
              variant="primary"
              type="submit"
              style={{ backgroundColor: '#007bff', color: 'white' }}
              // onClick={() => null}
              // console.log(this.state.schema.formId)
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
