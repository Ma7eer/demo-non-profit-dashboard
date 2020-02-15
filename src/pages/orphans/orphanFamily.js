import React, { Component } from 'react'
import Form from 'react-formio/lib/components/Form'
import { CSVLink } from 'react-csv'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import printJS from 'print-js'

import orphanFamilySchema from '../../schemas/orphans/orphanFamily'
import { getData, patchData, postData, getOne } from '../../api/index'
import TableButtons from '../../components/TableButtons'
import Table from '../../components/Table.js'
// import TableContainer from "../../components/TableContainer";
import FormContainer from '../../components/FormContainer'
import Separator from '../../components/Separator'
import Message from '../../components/Message'
import { add } from '../../util/add'
import ExportButton from '../../components/ExportButton'

const manifest = {
  schema: orphanFamilySchema,
  path: ['family/orphans', 'orphanFamily'],
  title: ['بيانات اسر الايتام', 'بيانات امهات الايتام'],
  columns: [
    [
      {
        Header: '	رقم الحساب',
        accessor: 'bankAccountNumber'
      },
      {
        Header: '	بنك',
        accessor: 'bankName'
      },
      {
        Header: '	حالة الملف',
        accessor: 'fileStatus'
      },
      {
        Header: '	المبلغ',
        accessor: 'allowance',
        Footer: row => (
          <span>
            {row.data.map(d => parseInt(d.allowance)).reduce(add, 0)}{' '}
            <strong>:المجموع</strong>
          </span>
        )
      },
      {
        Header: '	عدد المكفولين	',
        accessor: 'numberOfOrphansWithSponsors',
        Footer: row => (
          <span>
            {row.data
              .map(d => parseInt(d.numberOfOrphansWithSponsors))
              .reduce(add, 0)}{' '}
            <strong>:المجموع</strong>
          </span>
        )
      },
      // {
      //   Header: " الضمان",
      //   accessor: "socialSecurity"
      // },
      // {
      //   Header: "	الولاية",
      //   accessor: "familyAddress.0.state"
      // },
      // {
      //   Header: "	الهاتف",
      //   accessor: "wife.0.wifePhone"
      // },
      // {
      //   Header: "المهنة",
      //   accessor: "wife.0.wifeJob"
      // },
      {
        Header: '	اسم الام',
        accessor: 'motherName'
      },
      // {
      //   Header: "رقم ملف الأسرة",
      //   accessor: "formId"
      // },
      {
        Header: 'كود الاسرة',
        accessor: 'orphanFamilyId'
      }
    ]
  ]
}

export default class OrphanFamily extends Component {
  constructor(props) {
    super(props)
    this.state = {
      schema: {},
      editMode: false,
      editIndex: null,
      data: [],
      value: {},
      reportId: '',
      mergedData: [],
      loading: false,
      dataToDownload: []
    }
    this.fetchData = this.fetchData.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.editTableData = this.editTableData.bind(this)
  }

  componentDidMount() {
    this.setState({ loading: true })
    this.fetchData()
  }

  async fetchData() {
    try {
      let orphanFamilyData = await getData(manifest.path[1])
      this.setState({
        data: [...orphanFamilyData],
        // mergedData: [...orphanFamilyData],
        loading: false
      })
    } catch (e) {
      Message('error', 'فشل في جلب البيانات!')
    }
  }

  // handleSubmit(Schema) {
  //   this.setState({ loading: true });
  //   if (!this.state.editMode) {
  //     Message("warn", "اختار الاسرة اولا!");
  //     this.setState({ editMode: false, schema: {}, loading: false });
  //   } else {
  //     let d = {
  //       formId: Schema.data["formId"],
  //       orphanFamilyId: Schema.data["orphanFamilyId"],
  //       numberOfFamilyMembers: Schema.data["numberOfFamilyMembers"],
  //       males: Schema.data["males"],
  //       females: Schema.data["females"],
  //       numberOfOrphansWithSponsors: Schema.data["numberOfOrphansWithSponsors"],
  //       accountOwner: Schema.data["accountOwner"],
  //       bankName: Schema.data["bankName"],
  //       bankAccountNumber: Schema.data["bankAccountNumber"],
  //       allowance: Schema.data["allowance"],
  //       relation: Schema.data["relation"],
  //       nameOfGuardian: Schema.data["nameOfGuardian"],
  //       fileStatus: Schema.data["fileStatus"], // active or not
  //       startDate: Schema.data["startDate"],
  //       endDate: Schema.data["endDate"],
  //       reasonForStop: Schema.data["reasonForStop"],
  //       notes: Schema.data["notes"],
  //       motherName: Schema.data["motherName"],
  //       motherJob: Schema.data["motherJob"],
  //       motherPhone: Schema.data["motherPhone"],
  //       state: Schema.data["state"],
  //       region: Schema.data["region"],
  //       fatherName: Schema.data["fatherName"],
  //       guardian: Schema.data["guardian"],
  //       _id: Schema.data["_id"]
  //     };
  //     patchData(manifest.path[1], d);
  //     this.setState({ editMode: false, schema: {}, loading: false });
  //     this.fetchData();
  //   }
  // }

  async handleSubmit(Schema) {
    this.setState({ schema: Schema.data, loading: true })
    if (this.state.editMode) {
      await patchData(manifest.path[1], Schema.data)
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
      await postData(manifest.path[1], Schema.data)
      await getData(manifest.path[1]).then(res => {
        this.setState({
          data: res,
          schema: {},
          editMode: false,
          loading: false
        })
      })
    }
  }

  // editTableData = async (data, index) => {
  //   // take formId and get family with the same number
  //   // insert the data to the form
  //   // let x = {};
  //   // console.log(data.formId);
  //   this.setState({ loading: true });
  //   // await getData(manifest.path[0] + "/" + data.formId).then(res => {
  //   //   x = Object.assign(data, res);
  //   // });
  //   this.setState({
  //     schema: data,
  //     editMode: true,
  //     editIndex: index,
  //     // reportId: res[0]._id,
  //     loading: false
  //   });
  //   Message("success", "البيانات جاهزة للتعديل");
  //   // });
  // };

  async editTableData(data, index) {
    this.setState({ loading: true })
    let d = await getOne(manifest.path[1], data._id)
    console.log(d)
    this.setState({
      schema: d,
      editMode: true,
      editIndex: index,
      loading: false
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
    let staticColumns = [
      {
        Header: manifest.title[0],
        columns: [
          {
            Header: '',
            accessor: '',
            Cell: row => (
              <TableButtons
                row={row}
                handleEdit={this.editTableData}
                showDelete={false}
              />
            )
          },
          {
            Header: '',
            accessor: '',
            Cell: row => (
              <Link
                to={`orphans/${row.original.orphanFamilyId}/?numberOfFamilyMembers=${row.original.numberOfFamilyMembers}&males=${row.original.males}&females=${row.original.females}&formId=${row.original.formId}&motherName=${row.original.motherName}&motherJob=${row.original.motherJob}&motherPhone=${row.original.motherPhone}&region=${row.original.region}&state=${row.original.state}&fatherName=${row.original.fatherName}&guardian=${row.original.guardian}`}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  textDecoration: 'none'
                }}
              >
                <Button
                  onClick={() => console.log(row.original.orphanFamilyId)}
                >
                  الايتام
                </Button>
              </Link>
            )
          },
          ...manifest.columns[0]
        ]
      }
    ]
    return (
      <>
        <FormContainer title={manifest.title[0]}>
          <Form
            form={manifest.schema}
            onSubmit={this.handleSubmit}
            submission={{ data: this.state.schema }}
            onChange={this.handleChange}
          />
        </FormContainer>
        <Separator />
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
          columnData={staticColumns}
          tableData={this.state.data}
          loading={this.state.loading}
          r={r => (this.reactTable = r)}
        />
      </>
    )
  }
}
