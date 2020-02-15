import React, { Component } from 'react'
import Form from 'react-formio/lib/components/Form'
import { CSVLink } from 'react-csv'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import printJS from 'print-js'

// Schema
import familySchema from '../schemas/family'

// Core components
import { getData, postData, patchData, getOne, deleteData } from '../api/index'
import Table from '../components/Table.js'
import TableButtons from '../components/TableButtons'
import TableContainer from '../components/TableContainer'
import FormContainer from '../components/FormContainer'
import Separator from '../components/Separator'
import ExportButton from '../components/ExportButton'
import { compare } from '../util/compare.js'
import getFormattedDate from '../util/extractDate'
import {
  sumAllRows,
  boolFilterMethod,
  boolDropDownFilter
} from '../util/tableMethods'

const manifest = {
  schema: familySchema,
  path: ['family', 'family/main'],
  title: 'دراسة حالة أسرة',
  columns: [
    {
      Header: 'مؤرشف',
      accessor: 'isArchived',
      id: 'isArchived',
      minWidth: 70,
      Cell: ({ value }) => (value === true ? 'نعم' : 'لا'),
      filterMethod: (filter, row) => boolFilterMethod(filter, row),
      Filter: ({ filter, onChange }) => boolDropDownFilter(filter, onChange)
    },
    {
      Header: 'سبب الارشفة',
      accessor: 'reasonForArchiving',
      minWidth: 110
    },
    {
      Header: 'تاريخ دراسة الحالة',
      accessor: 'dateOfCaseStudy',
      minWidth: 150,
      Cell: props => getFormattedDate(props.value)
    },
    // {
    //   id: 'numberOfChildren',
    //   Header: 'عدد الابناء',
    //   accessor: d =>
    //     parseInt(d.numberOfChildrenInElementary) +
    //     parseInt(d.numberOfChildrenInSecondary) +
    //     parseInt(d.numberOfChildrenInHighSchool) +
    //     parseInt(d.numberOfChildrenInHigherEducation)
    // },
    {
      Header: '	البلدة',
      accessor: 'familyAddress.0.town',
      minWidth: 60
    },
    {
      Header: '	الولاية',
      accessor: 'familyAddress.0.state',
      minWidth: 60
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
    {
      Header: 'رقم ملف الأسرة',
      accessor: 'formId',
      minWidth: 120
    }
    // {
    //   Header: 'رقم الاستمارة',
    //   accessor: 'familyId'
    // }
  ]
}

class Family extends Component {
  constructor(props) {
    super(props)
    this.state = {
      schema: {},
      editMode: false,
      editIndex: null,
      data: [],
      loading: false,
      dataToDownload: [],
      formSchema: manifest.schema
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.editTableData = this.editTableData.bind(this)
    this.deleteTableData = this.deleteTableData.bind(this)
  }

  // disableInputs = async bool => {
  //   let d = await this.state.formSchema
  //   // husband
  //   d.components[8].columns[0].components[0].disabled = bool
  //   d.components[8].columns[1].components[0].disabled = bool
  //   d.components[8].columns[2].components[0].disabled = bool
  //   d.components[8].columns[3].components[0].disabled = bool
  //   // wife
  //   d.components[14].columns[0].components[0].disabled = bool
  //   d.components[14].columns[1].components[0].disabled = bool
  //   d.components[14].columns[2].components[0].disabled = bool
  //   d.components[14].columns[3].components[0].disabled = bool
  //   d.components[14].columns[4].components[0].disabled = bool
  //   await this.setState({ formSchema: { ...d } })
  // }

  componentDidMount() {
    this.setState({ loading: true })
    getData(manifest.path[1])
      .then(res =>
        this.setState({ data: [...res.sort(compare)], loading: false })
      )
      // .then(res => this.setState({ data: [...res], loading: false }))
      .catch(err => console.log(err))
  }

  async handleSubmit(Schema) {
    // let reg = /[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/
    let x = Schema.data
    // x.dateOfCaseStudy = x.dateOfCaseStudy.match(reg)[0]
    // console.log(x.dateOfCaseStudy)
    this.setState({ schema: x, loading: true })
    if (this.state.editMode) {
      await patchData(manifest.path[0], x)
      await getData(manifest.path[1]).then(res =>
        this.setState(() => {
          let arr = res
          arr.splice(this.state.editIndex, 1, Schema.data)
          return {
            schema: {},
            editMode: false,
            data: arr.sort(compare),
            editIndex: null,
            loading: false
          }
        })
      )
      // this.disableInputs(false)
    } else {
      await postData(manifest.path[0], x)
      await getData(manifest.path[1]).then(res => {
        this.setState({
          data: [...res.sort(compare)],
          schema: {},
          editMode: false,
          editIndex: null,
          loading: false
        })
      })
      // this.disableInputs(false)
    }
  }

  async editTableData(data, index) {
    // if (localStorage.admin === 'false') {
    //   // console.log(localStorage.admin)
    //   // await this.disableInputs(true)
    // }

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
            minWidth: 100,
            Cell: row => (
              <TableButtons
                row={row}
                handleEdit={this.editTableData}
                showDelete={
                  localStorage.getItem('jwtToken') &&
                  localStorage.getItem('admin') === 'true'
                    ? true
                    : false
                }
                handleDelete={this.deleteTableData}
              />
            ),
            Footer: row => sumAllRows(row)
          },
          {
            Header: 'افراد الاسرة',
            Cell: row => (
              <Link
                to={`familyMembers?familyId=${row.original.formId}`}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  textDecoration: 'none'
                }}
              >
                <Button>افراد الاسرة</Button>
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
            form={this.state.formSchema}
            onSubmit={this.handleSubmit}
            submission={{ data: this.state.schema }}
          />
          <form
            action={`https://alrahma4mc.com/log/elFinder-2.1.49/files/morfiqat/${this.state.schema.formId}.pdf`}
          >
            <Button
              variant="primary"
              type="submit"
              style={{ backgroundColor: '#007bff', color: 'white' }}
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

export default Family
