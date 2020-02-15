import React, { Component } from 'react'
import Form from 'react-formio/lib/components/Form'
import { CSVLink } from 'react-csv'
import printJS from 'print-js'

// api
import {
  patchData,
  postData,
  getData,
  deleteData
  // getOne
} from '../../api/index'

import Table from '../Table.js'
import TableButtons from '../TableButtons'
import TableContainer from '../TableContainer'
import FormContainer from '../FormContainer'
import Separator from '../Separator'
import ExportButton from '../ExportButton'
import Message from '../../data/toastrMessages'
import toastrBanner from '../Message'

export default class Borrow extends Component {
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

  fetchData = () => {
    getData(this.props.manifest.path)
      .then(res => this.setState({ data: [...res], loading: false }))
      .catch(err => toastrBanner('error', Message.dataFetchingFailed))
  }

  componentDidMount() {
    this.setState({ loading: true })
    this.fetchData()
  }

  async handleSubmit(Schema) {
    this.setState({ schema: Schema.data, loading: true })
    if (this.state.editMode) {
      patchData(this.props.manifest.path, Schema.data)
      this.fetchData()
      // getData(this.props.manifest.path).then(res =>
      this.setState(() => {
        //     let arr = res
        //     arr.splice(this.state.editIndex, 1, Schema.data)
        return {
          schema: {},
          editMode: false,
          //       data: arr,
          editIndex: null,
          loading: false
        }
      })
    } else {
      this.setState({ loading: true })
      await postData(this.props.manifest.path, Schema.data)
      this.fetchData()
      // await getData(this.props.manifest.path).then(res => {
      this.setState({
        // data: res,
        schema: {},
        editMode: false,
        loading: false
      })
      // })
    }
  }

  async editTableData(data, index) {
    this.setState({ loading: true })
    // let d = await getOne(this.props.manifest.path, data._id)
    this.setState({
      schema: data,
      editMode: true,
      editIndex: index,
      loading: false
    })
  }

  deleteTableData(data) {
    if (window.confirm('Are you sure you want to delete?')) {
      this.setState({ loading: true })
      deleteData(this.props.manifest.path, data.original)
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
      for (
        var colIndex = 0;
        colIndex < this.props.manifest.columns.length;
        colIndex++
      ) {
        record_to_download[this.props.manifest.columns[colIndex].Header] =
          currentRecords[index][this.props.manifest.columns[colIndex].accessor]
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
    for (let i = 0; i < this.props.manifest.columns.length; i++) {
      col.push(this.props.manifest.columns[i].Header)
    }
    printJS({
      printable: this.state.dataToDownload,
      properties: col,
      type: 'json',
      gridHeaderStyle:
        'color: black;  border: 2px solid #3971A5; font-weight: bold;',
      gridStyle: 'border: 2px solid #3971A5; text-align: center',
      header: `<h2 style="text-align:center">${this.props.manifest.title}</h2>`
    })
  }

  render() {
    const { manifest } = this.props
    let columns = [
      {
        Header: manifest.title,
        columns: [
          {
            Header: '',
            minWidth: 50,
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
