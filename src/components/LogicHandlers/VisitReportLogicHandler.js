import React, { Component } from 'react'
import Form from 'react-formio/lib/components/Form'
import { CSVLink } from 'react-csv'
import printJS from 'print-js'

import { getData, patchData, getOne } from '../../api/index'
import Table from '../Table.js'
import TableButtons from '../TableButtons'
import TableContainer from '../TableContainer'
import FormContainer from '../FormContainer'
import Separator from '../Separator'
import Message from '../Message'
import ExportButton from '../ExportButton'

export default class VisitReports extends Component {
  constructor(props) {
    super(props)
    this.state = {
      schema: {},
      editMode: false,
      editIndex: null,
      data: [],
      value: {},
      reportId: '',
      loading: false,
      dataToDownload: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.editTableData = this.editTableData.bind(this)
  }

  componentDidMount() {
    this.setState({ loading: true })
    getData(this.props.manifest.path[0])
      .then(res => {
        this.setState({ data: [...res], loading: false })
      })
      .catch(err => Message('error', 'فشل في جلب البيانات من قاعدة البيانات'))
  }

  handleSubmit(Schema) {
    this.setState({ loading: true })
    if (!this.state.editMode) {
      Message('warn', 'اختار الاسرة اولا!')
      this.setState({ editMode: false, schema: {}, loading: false })
    } else {
      let d = {
        formId: Schema.data['formId'],
        report: Schema.data['report'],
        suggestions: Schema.data['suggestions'],
        fieldAgentName: Schema.data['fieldAgentName'],
        fieldAgentPhone: Schema.data['fieldAgentPhone'],
        dateOfReport: Schema.data['dateOfReport'],
        panelRecFirst: Schema.data['panelRecFirst'],
        panelRecSecond: Schema.data['panelRecSecond'],
        panelRecThird: Schema.data['panelRecThird'],
        panelRecFourth: Schema.data['panelRecFourth'],
        panelRecFifth: Schema.data['panelRecFifth'],
        panelRecSixth: Schema.data['panelRecSixth'],
        _id: this.state.reportId
      }
      patchData(this.props.manifest.path[1], d)
      this.setState({ editMode: false, schema: {}, loading: false })
    }
  }

  async editTableData(data, index) {
    this.setState({ loading: true })
    try {
      let d = await getOne(this.props.manifest.path[1], data.formId)

      // need to make sure date is in the correct format
      let reg = /[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/
      let mergedData = Object.assign(d, data)
      mergedData.dateOfCaseStudy = mergedData.dateOfCaseStudy.match(reg)

      this.setState({
        schema: mergedData,
        editMode: true,
        editIndex: index,
        reportId: d._id,
        loading: false
      })
    } catch (err) {
      this.setState({
        schema: {},
        editMode: false,
        editIndex: null,
        loading: false
      })
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
      gridStyle: 'border: 2px solid #3971A5; text-align: center'
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
            Cell: row => (
              <TableButtons
                row={row}
                handleEdit={this.editTableData}
                showDelete={false}
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
            onChange={this.handleChange}
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
