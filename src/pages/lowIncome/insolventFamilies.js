import React, { Component } from 'react'
import { CSVLink } from 'react-csv'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Form from 'react-formio/lib/components/Form'
import printJS from 'print-js'

// api
import {
  patchData,
  postData,
  getData,
  deleteData,
  // getOne,
  // getDataQuietly,
  getOneQuietly
} from '../../api/index'

// form schema
import insolventFamiliesSchema from '../../schemas/lowIncome/insolventFamilies'

// core components
import TableContainer from '../../components/TableContainer'
import Table from '../../components/Table.js'
import TableButtons from '../../components/TableButtons'
import ExportButton from '../../components/ExportButton'
import FormContainer from '../../components/FormContainer'
import Separator from '../../components/Separator'
import Message from '../../components/Message'

const manifest = {
  schema: insolventFamiliesSchema,
  path: [
    'insolventFamilies',
    'family/group/insolventFamilies',
    'family/single/insolventFamilies'
  ],
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
    // {
    //   Header: 'اسم المركز',
    //   accessor: 'shoppingCenterName'
    // },
    // {
    //   Header: 'تاريخ انتهاء الكفالة',
    //   accessor: 'endDate'
    // },
    {
      Header: 'المحافظة',
      accessor: 'familyAddress.0.governorate'
    },
    {
      Header: 'الولاية',
      accessor: 'familyAddress.0.governorate'
    },
    {
      Header: 'رقم الارشفة',
      accessor: 'formId'
    },
    {
      Header: 'رقم الاسرة المعسرة',
      accessor: 'lowIncomeFamilyId'
    }
  ]
}

export default class insolventFamilies extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataToDownload: [],
      data: [],
      schema: {},
      editMode: false,
      editIndex: null,
      loading: false
    }
  }
  async componentDidMount() {
    try {
      await this.setState({ loading: true })
      // let merged = {}
      let res1 = await getData(manifest.path[0])
      // console.log(res1)
      // let res2 = await getData(manifest.path[1])
      // console.log(res2)
      // let x = [...res1, ...res2]
      this.setState({ data: [...res1], loading: false })
    } catch (err) {
      Message('error', 'فشل في جلب البيانات من قاعدة المعلومات')
    }
  }

  handleSubmit = async Schema => {
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
      this.setState({ loading: true })
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

  editTableData = async (data, index) => {
    try {
      let d = {}
      this.setState({ loading: true })
      let d1 = await getOneQuietly(manifest.path[0], data._id)
      let d2 = await getOneQuietly(manifest.path[2], data.formId)
      let familyIncome = 0
      let familyLoan = 0
      let familyMonthlyInstallment = 0
      if (d2 === null && data.formId !== '') {
        // no family with this formid
        throw new Error('اسرة غير موجودة في قسم الملفات او الاسرة مؤرشفة')
      } else if (d2 === null || d2 === undefined) {
        // no formid given
        familyIncome = 0
        familyLoan = 0
        familyMonthlyInstallment = 0
        d = { ...d1, familyIncome, familyLoan, familyMonthlyInstallment }
      } else {
        familyIncome = d2.income
          ? parseInt(d2.income[0].alrahmaSalary) +
            parseInt(d2.income[0].bahwanSalary) +
            parseInt(d2.income[0].darAlataaSalary) +
            parseInt(d2.income[0].nafaqaSalary) +
            parseInt(d2.income[0].otherSalary) +
            parseInt(d2.income[0].retirementSalary) +
            parseInt(d2.income[0].salary) +
            parseInt(d2.income[0].socialSecuritySalary)
          : 0
        familyLoan = d2.loan
          ? parseInt(d2.loan[0].housingLoanAmount) +
            parseInt(d2.loan[0].personalLoanAmount) +
            parseInt(d2.loan[0].vehicleLoanAmount)
          : 0
        familyMonthlyInstallment = d2.loan
          ? parseInt(d2.loan[0].housingLoanMonthlyPayments) +
            parseInt(d2.loan[0].personalLoanMonthlyPayments) +
            parseInt(d2.loan[0].vehicleLoanMonthlyPayments)
          : 0
      }

      // if (d2 == null) {
      //   Message('warn', 'اسرة غير موجودة في قسم الملفات او الاسرة مؤرشفة')
      //   d = { ...d1, familyIncome, familyLoan, familyMonthlyInstallment }
      // } else {
      Message('success', 'البيانات جاهزة للتحديث')
      d = { ...d1, ...d2, familyIncome, familyLoan, familyMonthlyInstallment }
      // }
      this.setState({
        schema: d,
        editMode: true,
        editIndex: index,
        loading: false
      })
    } catch (err) {
      // console.log(err.stack)
      Message('error', err.message)
      // 'فشل في تعديل البيانات'
    }
  }

  deleteTableData = data => {
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
          {
            Header: 'الكفالات',
            Cell: row => (
              <Link // ?sponsorId=${row.original.sponsorId}
                to={`lowIncomeSponsorships/?lowIncomeFamilyId=${row.original.lowIncomeFamilyId}`}
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
          <br />
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
