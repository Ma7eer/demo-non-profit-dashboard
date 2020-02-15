import React, { Component } from 'react'
import Axios from 'axios'
import { CSVLink } from 'react-csv'
import printJS from 'print-js'

// react-bootstrap components
import { Button } from 'react-bootstrap'

// core components
import { getData, patchData, url } from '../api/index'
import FormContainer from '../components/FormContainer'
import TableContainer from '../components/TableContainer'
import Table from '../components/Table.js'
import TableButtons from '../components/TableButtons'
import EidPagesCheckBox from '../components/EidPagesComponents/EidPagesCheckBox'
import SignaturePopup from '../components/SignaturePopup'
import Message from '../components/Message'
import ExportButton from '../components/ExportButton'
import EidPagesTextInput from '../components/EidPagesComponents/EidPagesTextInput'
import FamilyDataInputs from '../components/EidPagesComponents/FamilyDataInputs'
import EditPagesCheckBoxList from '../components/EidPagesComponents/EidPagesCheckBoxList'
import {
  countAllRows,
  boolFilterMethod,
  boolDropDownFilter,
  sumAllRows
} from '../util/tableMethods'

const manifest = {
  path: ['family/report', 'ramadan', 'family/ramadan'],
  title: 'قائمة رمضان',
  columns: [
    {
      Header: 'الولاية',
      accessor: 'familyAddress.0.state'
    },
    {
      Header: 'الرقم المدني للزوجة',
      accessor: 'wife.0.wifeCivilId'
    },
    {
      Header: 'هاتف الزوجة',
      accessor: 'wife.0.wifePhone'
    },
    {
      Header: '	اسم الزوجة',
      accessor: 'wife.0.wifeName'
    },
    {
      Header: 'الرقم المدني للزوج',
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
      Header: 'رقم الملف',
      accessor: 'formId'
    }
  ]
}

export default class Ramadan extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      loading: false,
      dataToDownload: [],
      trimmedDataURL: null,
      formId: '',
      husbandName: '',
      husbandPhone: '',
      husbandCivilId: '',
      wifeName: '',
      wifePhone: '',
      wifeCivilId: '',
      breakfast: false,
      eidSupport: false,
      zakat: false,
      eidSacrifice: false,
      bookBags: '',
      date: '',
      signature: '',
      notes: '',
      isDone: false,
      _id: '',
      isEmptyCanvas: true,
      editMode: false,
      allowEdit: false,
      eidSupportAmount: '',
      open: false,
      textValue: ''
    }
    this.handleNumberChange = this.handleNumberChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleEditButtonClick = this.handleEditButtonClick.bind(this)
    this.handleSubmitButtonClick = this.handleSubmitButtonClick.bind(this)
    this.handleAreaTextChange = this.handleAreaTextChange.bind(this)
  }

  componentDidMount() {
    this.fetchData()
  }

  openModal = () => {
    this.setState({ open: true })
  }

  closeModal = () => {
    this.setState({ open: false })
  }

  fetchData = () => {
    this.setState({ loading: true })
    getData(manifest.path[2])
      .then(res => this.setState({ data: [...res] }))
      .then(() => this.setState({ loading: false }))
      .catch(err => Message('error', 'فشل في جلب البيانات من قاعدة البيانات'))
  }

  sigPad = {}

  trim = async id => {
    await this.setState({
      trimmedDataURL: this.sigPad.getTrimmedCanvas().toDataURL('image/png')
    })
    if (this.state.trimmedDataURL.length === 0) {
      Message('warn', 'فشل في حفل البيانات')
    } else {
      this.setState({ signature: this.state.trimmedDataURL })
      await Axios.patch(
        `${url}/family/${id}`,
        { signature: this.state.trimmedDataURL },
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('jwtToken')
          }
        }
      )
      this.setState({ isDone: true })
    }
  }

  handlePadDrawing = sigCanvasRef => {
    // ref cannot be changed directly in SignatureCanvas component because sigPad is being passed as a prop and props are immutable
    // we need this function so we can allow the child to pass data to the parent so we can change sigPad
    this.sigPad = sigCanvasRef
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

  editTableData = rowData => {
    this.setState({ loading: true, editMode: true })
    Axios.get(`${url}/${manifest.path[2]}/${rowData._id}`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('jwtToken')
      }
    })
      .then(res =>
        this.setState({
          formId: res.data.data.formId,
          husbandName: res.data.data.husband[0].husbandName,
          husbandPhone: res.data.data.husband[0].husbandPhone,
          husbandCivilId: res.data.data.husband[0].husbandCivilId,
          wifeName: res.data.data.wife[0].wifeName,
          wifePhone: res.data.data.wife[0].wifePhone,
          wifeCivilId: res.data.data.wife[0].wifeCivilId,
          breakfast: res.data.data.ramadan[0].breakfast,
          zakat: res.data.data.ramadan[0].zakat,
          eidSacrifice: res.data.data.ramadan[0].eidSacrifice,
          eidSupport: res.data.data.ramadan[0].eidSupport,
          bookBags: res.data.data.ramadan[0].bookBags,
          date: res.data.data.ramadan[0].date,
          notes: res.data.data.ramadan[0].notes,
          isDone: res.data.data.ramadan[0].isDone,
          eidSupportAmount: res.data.data.ramadan[0].eidSupportAmount,
          _id: res.data.data._id,
          signature: res.data.data.signature
        })
      )
      .then(() => {
        Message('success', 'البيانات جاهزة للتعديل!')
        this.setState({ loading: false })
      })
  }

  handleInputChange = e => {
    const target = e.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    this.setState({ [name]: value })
  }

  handleNumberChange(e) {
    e.preventDefault()
    this.setState({ bookBags: e.target.value })
  }

  handleNumberChangeSecond = e => {
    e.preventDefault()
    this.setState({ eidSupportAmount: e.target.value })
  }

  handleEditButtonClick(e) {
    e.preventDefault()
    if (!this.state.editMode) {
      Message('warn', 'اختر الاسرة اولا!')
      return
    }
    if (window.confirm('تعديل بيانات الاسرة؟')) {
      this.setState({ allowEdit: true })
    } else {
      return
    }
  }

  handlePopupButtonClick = () => {
    this.setState({ isEmptyCanvas: true })
    this.setState({
      isEmptyCanvas: false,
      trimmedDataURL: this.state.signature
    })
    this.openModal()
  }

  handleSaveButtonClick = () => {
    this.trim(this.state._id)
    this.setState({ isEmptyCanvas: false })
  }

  handleClearButtonClick = () => {
    if (window.confirm('مسح التوقيع؟')) {
      this.setState({
        trimmedDataURL: null,
        isEmptyCanvas: true,
        signature: ''
      })
      Axios.patch(
        `${url}/family/${this.state._id}`,
        { signature: '' },
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('jwtToken')
          }
        }
      )
    } else {
      return
    }
  }

  async handleSubmitButtonClick(e) {
    e.preventDefault()
    if (window.confirm('تم تعديل البيانات؟')) {
      let x = {
        _id: this.state._id,
        'wife.0.wifeCivilId': this.state.wifeCivilId,
        'wife.0.wifePhone': this.state.wifePhone,
        'husband.0.husbandCivilId': this.state.husbandCivilId,
        'husband.0.husbandPhone': this.state.husbandPhone
      }
      patchData('family', x)
      this.setState({ allowEdit: false })
    } else {
      return
    }
  }

  handleAreaTextChange(e) {
    e.preventDefault()
    this.setState({ notes: e.target.value })
  }

  async handleSubmit() {
    if (!this.state.editMode) {
      Message('warn', 'اختر الاسرة اولا!')
      return
    }
    this.setState({ loading: true })
    let data = {
      'ramadan.0.breakfast': this.state.breakfast,
      'ramadan.0.zakat': this.state.zakat,
      'ramadan.0.eidSacrifice': this.state.eidSacrifice,
      'ramadan.0.eidSupport': this.state.eidSupport,
      'ramadan.0.bookBags': this.state.bookBags,
      'ramadan.0.date': this.state.date,
      'ramadan.0.notes': this.state.notes,
      'ramadan.0.isDone': this.state.isDone,
      'ramadan.0.eidSupportAmount': this.state.eidSupportAmount
    }
    await Axios.patch(`${url}/family/${this.state._id}`, data, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('jwtToken')
      }
    }).then(() => this.fetchData())

    // CLEAR INPUTS
    this.setState({
      formId: '',
      husbandName: '',
      husbandPhone: '',
      husbandCivilId: '',
      wifeName: '',
      wifePhone: '',
      wifeCivilId: '',
      breakfast: false,
      zakat: false,
      eidSacrifice: false,
      eidSupport: false,
      bookBags: '',
      date: '',
      notes: '',
      _id: '',
      signature: '',
      eidSupportAmount: '',
      isDone: false
    })

    this.setState({ editMode: false })
  }

  render() {
    let columns = [
      {
        Header: manifest.title,
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
            ),
            Footer: row => countAllRows(row)
          },
          {
            Header: 'تم التوقيع والتسليم؟',
            accessor: d => (d.ramadan[0].isDone ? true : false),
            id: 'isDone',
            Cell: ({ value }) => (value === true ? 'نعم' : 'لا'),
            filterMethod: (filter, row) => boolFilterMethod(filter, row),
            Filter: ({ filter, onChange }) =>
              boolDropDownFilter(filter, onChange)
          },
          {
            Header: 'تاريخ الاستلام',
            accessor: 'ramadan.0.date'
          },
          {
            Header: 'مبلغ كسوة العيد',
            accessor: 'ramadan.0.eidSupportAmount',
            Cell: row => (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  textDecoration: 'none'
                }}
              >
                {row.value}
              </div>
            ),
            Footer: row => sumAllRows(row, 'ramadan.0.eidSupportAmount')
          },
          {
            Header: 'عدد الحقائب',
            accessor: 'ramadan.0.bookBags',
            Cell: row => (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  textDecoration: 'none'
                }}
              >
                {row.value}
              </div>
            ),
            Footer: row => sumAllRows(row, 'ramadan.0.bookBags')
          },
          {
            Header: 'حقائب مدرسية',
            accessor: 'bookBags',
            Cell: row => (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  textDecoration: 'none'
                }}
              >
                {row.original.ramadan[0].bookBags > 0
                  ? 'تم التسليم'
                  : 'لم يسلم'}
              </div>
            ),
            filterMethod: (filter, row) => {
              if (row._original.ramadan[0].bookBags > 0) {
                return String('تم التسليم')
                  .toLowerCase()
                  .includes(filter.value.toLowerCase())
              } else {
                return String('لم يسلم')
                  .toLowerCase()
                  .includes(filter.value.toLowerCase())
              }
            }
          },
          {
            Header: 'ذبيحة العيد',
            accessor: 'ramadan.0.eidSacrifice',
            Cell: row => {
              return (
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    textDecoration: 'none'
                  }}
                >
                  {row.value ? 'تم التسليم' : 'لم يسلم'}
                </div>
              )
            },
            filterMethod: (filter, row) => {
              if (row._original.ramadan[0].eidSacrifice) {
                return String('تم التسليم')
                  .toLowerCase()
                  .includes(filter.value.toLowerCase())
              } else {
                return String('لم يسلم')
                  .toLowerCase()
                  .includes(filter.value.toLowerCase())
              }
            }
          },
          {
            Header: 'زكاة الفطر',
            accessor: 'ramadan.0.zakat',
            Cell: row => (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  textDecoration: 'none'
                }}
              >
                {row.value ? 'تم التسليم' : 'لم يسلم'}
              </div>
            ),
            filterMethod: (filter, row) => {
              if (row._original.ramadan[0].zakat) {
                return String('تم التسليم')
                  .toLowerCase()
                  .includes(filter.value.toLowerCase())
              } else {
                return String('لم يسلم')
                  .toLowerCase()
                  .includes(filter.value.toLowerCase())
              }
            }
          },
          {
            Header: 'كسوة عيد',
            accessor: 'ramadan.0.eidSupport',
            Cell: row => (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  textDecoration: 'none'
                }}
              >
                {row.value ? 'تم التسليم' : 'لم يسلم'}
              </div>
            ),
            filterMethod: (filter, row) => {
              if (row._original.ramadan[0].eidSupport) {
                return String('تم التسليم')
                  .toLowerCase()
                  .includes(filter.value.toLowerCase())
              } else {
                return String('لم يسلم')
                  .toLowerCase()
                  .includes(filter.value.toLowerCase())
              }
            }
          },
          {
            Header: 'افطار صائم',
            accessor: 'ramadan.0.breakfast',
            Cell: row => (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  textDecoration: 'none'
                }}
              >
                {row.value ? 'تم التسليم' : 'لم يسلم'}
              </div>
            ),
            filterMethod: (filter, row) => {
              if (row._original.ramadan[0].breakfast) {
                return String('تم التسليم')
                  .toLowerCase()
                  .includes(filter.value.toLowerCase())
              } else {
                return String('لم يسلم')
                  .toLowerCase()
                  .includes(filter.value.toLowerCase())
              }
            }
          },
          ...manifest.columns
        ]
      }
    ]
    return (
      <>
        <FormContainer title={manifest.title}>
          <FamilyDataInputs
            formId={this.state.formId}
            husbandName={this.state.husbandName}
            husbandPhone={this.state.husbandPhone}
            handleFamInputChange={this.handleInputChange}
            husbandCivilId={this.state.husbandCivilId}
            wifeName={this.state.wifeName}
            wifePhone={this.state.wifePhone}
            wifeCivilId={this.state.wifeCivilId}
            handleSubmitButtonClick={this.handleSubmitButtonClick}
            handleEditButtonClick={this.handleEditButtonClick}
            allowEdit={this.state.allowEdit}
          />
          <hr />
          <EditPagesCheckBoxList
            handleInputChange={this.handleInputChange}
            dataArray={[
              {
                label: 'افطار صائم',
                value: 'breakfast',
                isChecked: this.state.breakfast
              },
              {
                label: 'كسوة عيد',
                value: 'eidSupport',
                isChecked: this.state.eidSupport
              },
              {
                label: 'زكاة الفطر',
                value: 'zakat',
                isChecked: this.state.zakat
              },
              {
                label: 'ذبيحة العيد',
                value: 'eidSacrifice',
                isChecked: this.state.eidSacrifice
              }
            ]}
          />
          <div style={{ display: 'flex', justifyContent: 'center' }} dir="rtl">
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                margin: '5px',
                width: '50%'
              }}
            >
              <label htmlFor="bookBags">عدد الحقائب المدرسية</label>
              <input
                type="number"
                value={this.state.bookBags}
                onChange={this.handleNumberChange}
                placeholder="عدد الحقائب المدرسية"
                style={{ padding: '5px' }}
                id="bookBags"
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                margin: '5px',
                width: '50%'
              }}
            >
              <label htmlFor="eidSupportAmount">مبلغ كسوة العيد</label>
              <input
                type="number"
                value={this.state.eidSupportAmount}
                onChange={this.handleNumberChangeSecond}
                placeholder="مبلغ كسوة العيد"
                style={{ padding: '5px' }}
                id="eidSupportAmount"
              />
            </div>
            <EidPagesTextInput
              label="تاريخ الاستلام (YYYY-MM-DD)"
              value={this.state.date}
              isDisabled={false}
              name="date"
              handleInputChange={this.handleInputChange}
            />
          </div>
          <br />
          <label htmlFor="notes">ملاحظات</label>
          <textarea
            placeholder="ملاحظات"
            style={{ width: '100%' }}
            value={this.state.notes}
            onChange={this.handleAreaTextChange}
            id="notes"
          />
          <br />
          <SignaturePopup
            signature={this.state.signature}
            handlePopupButtonClick={this.handlePopupButtonClick}
            closeModal={this.closeModal}
            open={this.state.open}
            isEmptyCanvas={this.state.isEmptyCanvas}
            trimmedDataURL={this.state.trimmedDataURL}
            handleSaveButtonClick={this.handleSaveButtonClick}
            handleClearButtonClick={this.handleClearButtonClick}
            handlePadDrawing={this.handlePadDrawing}
          />
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              onClick={this.handleSubmit}
              type="submit"
              style={{
                color: 'white',
                width: '100%',
                margin: '10px'
              }}
            >
              ادخال البيانات
            </Button>
          </div>
          <div style={{ display: 'flex' }} dir="rtl">
            <EidPagesCheckBox
              label="تم التوقيع و التسليم"
              value={'isDone'}
              handleCheckBoxChange={this.handleInputChange}
              isChecked={this.state.isDone}
              name="isDone"
            />
          </div>
        </FormContainer>

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
