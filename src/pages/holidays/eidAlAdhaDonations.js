import React, { Component } from 'react'
import Axios from 'axios'
import { CSVLink } from 'react-csv'
import printJS from 'print-js'

// react-bootstrap components
import { Button } from 'react-bootstrap'

// core components
import { getData, patchData, url } from '../../api/index'
import FormContainer from '../../components/FormContainer'
import TableContainer from '../../components/TableContainer'
import Table from '../../components/Table.js'
import TableButtons from '../../components/TableButtons'
import EidPagesCheckBox from '../../components/EidPagesComponents/EidPagesCheckBox'
import SignaturePopup from '../../components/SignaturePopup'
import Message from '../../components/Message'
import ExportButton from '../../components/ExportButton'
import EidPagesTextInput from '../../components/EidPagesComponents/EidPagesTextInput'
import FamilyDataInputs from '../../components/EidPagesComponents/FamilyDataInputs'
import EditPagesCheckBoxList from '../../components/EidPagesComponents/EidPagesCheckBoxList'

const manifest = {
  path: ['family/report', 'eidAlAdha', 'family/eidAlAdha'],
  title: 'قائمة عيد الاضحى',
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

export default class EidAlAdhaDonations extends Component {
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
      eidDonation: false,
      eidSacrifice: false,
      eidFoodDonation: false,
      date: '',
      eidAlAdhaSignature: '',
      notes: '',
      isDone: false,
      _id: '',
      isEmptyCanvas: true,
      editMode: false,
      allowEdit: false,
      open: false
    }
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
      this.setState({ eidAlAdhaSignature: this.state.trimmedDataURL })
      await Axios.patch(
        `${url}/family/${id}`,
        { 'eidAlAdha.0.eidAlAdhaSignature': this.state.trimmedDataURL },
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

  editTableData = rowData => {
    this.setState({ loading: true, editMode: true })
    Axios.get(`${url}/${manifest.path[2]}/${rowData._id}`, {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('jwtToken')
      }
    })
      .then(async res => {
        // console.log(res)
        await this.setState({
          formId: res.data.data.formId,
          husbandName: res.data.data.husband[0].husbandName,
          husbandPhone: res.data.data.husband[0].husbandPhone,
          husbandCivilId: res.data.data.husband[0].husbandCivilId,
          wifeName: res.data.data.wife[0].wifeName,
          wifePhone: res.data.data.wife[0].wifePhone,
          wifeCivilId: res.data.data.wife[0].wifeCivilId,
          eidDonation: res.data.data.eidAlAdha[0].eidDonation,
          eidSacrifice: res.data.data.eidAlAdha[0].eidSacrifice,
          eidFoodDonation: res.data.data.eidAlAdha[0].eidFoodDonation,
          date: res.data.data.eidAlAdha[0].date,
          notes: res.data.data.eidAlAdha[0].notes,
          isDone: res.data.data.eidAlAdha[0].isDone,
          _id: res.data.data._id,
          eidAlAdhaSignature: res.data.data.eidAlAdha[0].eidAlAdhaSignature
        })
      })
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
      trimmedDataURL: this.state.eidAlAdhaSignature
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
        eidAlAdhaSignature: ''
      })
      Axios.patch(
        `${url}/family/${this.state._id}`,
        { 'eidAlAdha.0.eidAlAdhaSignature': '' },
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

  handleSubmit = async () => {
    if (!this.state.editMode) {
      Message('warn', 'اختر الاسرة اولا!')
      return
    }
    this.setState({ loading: true })
    let data = {
      'eidAlAdha.0.eidDonation': this.state.eidDonation,
      'eidAlAdha.0.eidSacrifice': this.state.eidSacrifice,
      'eidAlAdha.0.eidFoodDonation': this.state.eidFoodDonation,
      'eidAlAdha.0.date': this.state.date,
      'eidAlAdha.0.notes': this.state.notes,
      'eidAlAdha.0.isDone': this.state.isDone
    }
    console.log(data)
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
      eidDonation: false,
      eidSacrifice: false,
      eidFoodDonation: false,
      date: '',
      notes: '',
      _id: '',
      eidAlAdhaSignature: '',
      isDone: false
    })

    this.setState({ editMode: false })
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
            accessor: '',
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
          {
            Header: 'تم التوقيع والتسليم؟',
            accessor: d => (d.eidAlAdha[0].isDone ? true : false),
            id: 'isDone',
            Cell: ({ value }) => (value === true ? 'نعم' : 'لا'),
            filterMethod: (filter, row) => {
              if (filter.value === 'all') {
                return true
              }
              if (filter.value === 'true') {
                return row[filter.id] === true
              }
              return row[filter.id] === false
            },
            Filter: ({ filter, onChange }) => (
              <select
                onChange={event => onChange(event.target.value)}
                style={{ width: '100%' }}
                value={filter ? filter.value : 'all'}
              >
                <option value="all" />
                <option value="true">نعم</option>
                <option value="false">لا</option>
              </select>
            )
          },
          {
            Header: 'تاريخ الاستلام',
            accessor: 'eidAlAdha.0.date'
          },
          // {
          //   Header: 'مبلغ كسوة العيد',
          //   accessor: 'eidAlAdha.0.eidSupportAmount',
          //   Cell: row => (
          //     <div
          //       style={{
          //         display: 'flex',
          //         justifyContent: 'center',
          //         textDecoration: 'none'
          //       }}
          //     >
          //       {row.value}
          //     </div>
          //   ),
          //   Footer: row => (
          //     <span>
          //       {row.data
          //         .map(d => parseInt(d['ramadan.0.eidSupportAmount']))
          //         .reduce(add, 0)}{' '}
          //       <strong>:المجموع</strong>
          //     </span>
          //   )
          // },
          {
            Header: 'كسوة العيد',
            accessor: 'eidAlAdha.0.eidDonation',
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
              if (row._original.eidAlAdha[0].eidDonation) {
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
            Header: 'اضحية',
            accessor: 'eidAlAdha.0.eidSacrifice',
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
              if (row._original.eidAlAdha[0].eidSacrifice) {
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
            Header: 'مواد غذائية',
            accessor: 'eidAlAdha.0.eidFoodDonation',
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
              if (row._original.eidAlAdha[0].eidFoodDonation) {
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
                label: 'كسوة عيد',
                value: 'eidDonation',
                isChecked: this.state.eidDonation
              },
              {
                label: 'اضحية',
                value: 'eidSacrifice',
                isChecked: this.state.eidSacrifice
              },
              {
                label: 'مواد غذائية',
                value: 'eidFoodDonation',
                isChecked: this.state.eidFoodDonation
              }
            ]}
          />
          {/* <div style={{ display: 'flex', justifyContent: 'center' }} dir="rtl"> */}
          {/* <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                margin: '5px',
                width: '50%'
              }}
            >
              <label>مبلغ كسوة العيد</label>
              <input
                type="number"
                value={this.state.eidSupportAmount}
                onChange={this.handleNumberChangeSecond}
                placeholder="مبلغ كسوة العيد"
                style={{ padding: '5px' }}
              />
            </div> */}
          <EidPagesTextInput
            label="تاريخ الاستلام (YYYY-MM-DD)"
            value={this.state.date}
            isDisabled={false}
            name="date"
            handleInputChange={this.handleInputChange}
          />
          {/* </div> */}
          <br />
          <label htmlFor="notes">ملاحظات</label>
          <textarea
            id="notes"
            placeholder="ملاحظات"
            style={{ width: '100%' }}
            value={this.state.notes}
            onChange={this.handleAreaTextChange}
          />
          <br />
          <SignaturePopup
            signature={this.state.eidAlAdhaSignature}
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
