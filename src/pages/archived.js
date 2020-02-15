import React, { Component } from 'react'
import { CSVLink } from 'react-csv'
import { Button } from 'react-bootstrap'
import printJS from 'print-js'

import familySchema from '../schemas/family'
import { getData, patchData } from '../api/index'
import Table from '../components/Table.js'
import TableContainer from '../components/TableContainer'
import ExportButton from '../components/ExportButton'

const manifest = {
  schema: familySchema,
  path: ['family/archived', 'family'],
  title: 'المؤرشف',
  columns: [
    {
      Header: 'تاريخ دراسة الحالة',
      accessor: 'dateOfCaseStudy'
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
      minWidth: 50
    }
  ]
}

export default class Archived extends Component {
  constructor(props) {
    super(props)
    this.state = {
      schema: {},
      editMode: false,
      editIndex: null,
      data: [],
      loading: false,
      dataToDownload: [],
      unArchiveData: null
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.setState({ loading: true })
    getData(manifest.path[0])
      .then(res => {
        return this.setState({ data: [...res], loading: false })
      })
      .catch(err => console.log(err))
  }

  async handleClick(data) {
    if (window.confirm('اعادة دراسة هذه الاسرة؟')) {
      await this.setState({
        unArchiveData: { isArchived: false, _id: data.original._id }
      })
      patchData(manifest.path[1], this.state.unArchiveData)
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
            Cell: row => (
              <Button onClick={() => this.handleClick(row)}>
                اعادة الدراسة
              </Button>
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
    )
  }
}
