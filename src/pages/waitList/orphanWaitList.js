import React, { Component } from 'react'
import { CSVLink } from 'react-csv'
import { Button } from 'react-bootstrap'

import { getData, patchData } from '../../api/index'
import Table from '../../components/Table.js'
import TableContainer from '../../components/TableContainer'
import DownloadButton from '../../components/ExportButton'
import Message from '../../components/Message'

const manifest = {
  path: ['family/orphanWaitList', 'family'],
  title: 'طلبات الايتام',
  columns: [
    {
      Header: 'اسم الزوجة',
      accessor: 'wife.0.wifeName'
    },
    {
      Header: '	اسم الزوج',
      accessor: 'husband.0.husbandName'
    },
    {
      Header: 'رقم ملف الاسرة',
      accessor: 'formId'
    }
  ]
}

export default class WaitList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      loading: false,
      dataToDownload: []
    }
    this.download = this.download.bind(this)
    this.fetchData = this.fetchData.bind(this)
    this.handleRefusal = this.handleRefusal.bind(this)
    this.handleAcceptance = this.handleAcceptance.bind(this)
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData() {
    this.setState({ loading: true })
    getData(manifest.path[0])
      .then(res => this.setState({ data: [...res], loading: false }))
      .catch(() => Message('error', 'فشل في الاتصال بقاعدة البيانات'))
  }

  async handleRefusal(Schema) {
    if (window.confirm('رفض الطلب؟')) {
      await patchData(manifest.path[1], {
        _id: Schema._id,
        isApproved: false,
        isWaitList: false
      })
      this.fetchData()
    } else {
      return
    }
  }

  async handleAcceptance(Schema) {
    if (window.confirm('قبول طلب الاسرة و ادخالها الى قائمة الايتام؟')) {
      await patchData(manifest.path[1], {
        _id: Schema._id,
        isApproved: true,
        isWaitList: false
      })
      this.fetchData()
    } else {
      return
    }
  }

  download() {
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
      this.csvLink.link.click()
    })
  }

  render() {
    let columns = [
      {
        Header: manifest.title,
        columns: [
          {
            Header: 'قبول الطلب',
            Cell: row => (
              <Button onClick={() => this.handleAcceptance(row.original)}>
                <i className="fas fa-check" style={{ color: 'green' }} />
              </Button>
            ),
            Footer: row => (
              <span>
                {row.data.length} <strong>:المجموع</strong>
              </span>
            )
          },
          {
            Header: 'رفض الطلب',
            Cell: row => (
              <Button onClick={() => this.handleRefusal(row.original)}>
                <i className="fas fa-times" style={{ color: 'red' }} />
              </Button>
            )
          },
          ...manifest.columns
        ]
      }
    ]
    return (
      <>
        <TableContainer>
          <DownloadButton download={this.download} />
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
