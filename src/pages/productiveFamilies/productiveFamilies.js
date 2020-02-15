import React, { useState, useEffect, useRef } from 'react'
import useForm from 'react-hook-form'
import { CSVLink } from 'react-csv'
import printJS from 'print-js'

// Data fetch abstraction
import { getData, postData, patchData } from '../../api/index'

// Core components
import FormContainer from '../../components/FormContainer'
import Separator from '../../components/Separator'
import TableButtons from '../../components/TableButtons'
import Table from '../../components/Table.js'
import TableContainer from '../../components/TableContainer'
import ExportButton from '../../components/ExportButton'
import FormTextArea from '../../components/FormControl/FormTextArea'
import FormTextInput from '../../components/FormControl/FormTextInput'
import FormDateInput from '../../components/FormControl/FormDateInput'
import FormCheckBox from '../../components/FormControl/FormCheckBox'
import FormSelect from '../../components/FormControl/FormSelect'
import SubmitButton from '../../components/FormControl/SubmitButton'
import {
  FormSection,
  FormElement
} from '../../components/FormControl/Containers'
import ToastrBanner from '../../components/Message'
import Message from '../../data/toastrMessages'

const headerStyle = {
  color: 'red'
}

const SubHeader = ({ headerText }) => <h2 style={headerStyle}>{headerText}</h2>

const manifest = {
  path: 'productiveFamilies',
  title: 'بيانات الاسر المنتجة - مشروع كفاف',
  schema: [
    'nameOfRecipient',
    'relationship',
    'ageOfRecipient',
    'RecipientNationalId',
    'RecipientEducationLevel',
    'fieldOfWork',
    'formOfContact',
    'dateOfContact',
    'reasonForNotRegistering',
    'phoneNumberOfRecipient',
    'isRegistered',
    'reasonForContact',
    'status',
    'workExperience',
    'formId',
    'claimMadeBy',
    'wifePhone',
    'isHouseWife',
    'wifeIsRetired',
    'wifeIsWidow',
    'wifeIsAbandoned',
    'wifeIsDisabled',
    'wifeIsSick',
    'wifeIsDeceased',
    'wifeIsDivorced',
    'salary',
    'retirementSalary',
    'socialSecuritySalary',
    'alrahmaSalary',
    'darAlataaSalary',
    'nafaqaSalary',
    'bahwanSalary',
    'otherSalary',
    'rentAmount',
    'lateElectricalAmount',
    'lateWaterAmount',
    'housingLoanAmount',
    'personalLoanAmount',
    'vehicleLoanAmount',
    'governorate',
    'state',
    'town',
    'neighborhood',
    '_id'
  ],
  columns: [
    {
      Header: 'تاريخ التواصل',
      accessor: 'dateOfContact'
    },
    {
      Header: 'الولاية',
      accessor: 'familyAddress.0.state'
    },
    {
      Header: 'المجال',
      accessor: 'fieldOfWork'
    },
    {
      Header: 'المستوى الدراسي',
      accessor: 'RecipientEducationLevel'
    },
    {
      Header: 'الرقم المدني',
      accessor: 'RecipientNationalId'
    },
    {
      Header: 'اسم المستفيد',
      accessor: 'nameOfRecipient'
    },
    {
      Header: 'اسم المرجع',
      accessor: 'claimMadeBy'
    },
    {
      Header: 'رقم ملف الأسرة',
      accessor: 'formId'
    }
  ]
}

const ProductiveFamilies = () => {
  // # region hooks
  const { register, handleSubmit, setValue } = useForm()

  const [editMode, setEditMode] = useState(false)
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [dataToDownload, setDataToDownload] = useState([])

  const reactTable = useRef({})
  const csvLink = useRef({})
  // #end region

  // # region util functions
  const fetchData = async () => {
    setLoading(true)
    /* try catch abstracted in getData method */
    const fetchedData = await getData(manifest.path)

    setData([...fetchedData])
    setLoading(false)
  }

  const setFormValue = dataArray => {
    if (dataArray.length > 0) {
      manifest.schema.forEach(col => {
        setValue(col, dataArray[0][col])
      })
    } else {
      manifest.schema.forEach(col => {
        setValue(col, '')
      })
    }
  }
  // # end region

  // # region lifecycle methods
  useEffect(() => {
    fetchData()
  }, [])
  // # end region

  // # region handlers
  const onSubmit = async values => {
    /* Table loading */
    setLoading(true)

    /* Check if we are submitting form without 
    selecting a family from the table */
    if (editMode) {
      if (values._id) {
        await patchData(manifest.path, values)
      } else {
        await postData(manifest.path, values)
      }
      /* Refresh table data */
      fetchData()
    } else {
      ToastrBanner('warn', Message.selectFirst)
    }

    /* Empty form fields */
    setFormValue('')

    /* table stop loading */
    setLoading(false)
  }

  const handleEditButtonClick = async data => {
    /* Table loading */
    setLoading(true)

    /* set value of form inputs */
    /* some values are nested so we have to manually set them */
    let val = {
      ...data,
      state: data.familyAddress[0].state,
      town: data.familyAddress[0].town,
      neighborhood: data.familyAddress[0].neighborhood,
      governorate: data.familyAddress[0].governorate,
      wifePhone: data.wife[0].wifePhone,
      isHouseWife: data.wife[0].isHouseWife,
      wifeIsRetired: data.wife[0].wifeIsRetired,
      wifeIsWidow: data.wife[0].wifeIsWidow,
      wifeIsAbandoned: data.wife[0].wifeIsAbandoned,
      wifeIsDisabled: data.wife[0].wifeIsDisabled,
      wifeIsSick: data.wife[0].wifeIsSick,
      wifeIsDeceased: data.wife[0].wifeIsDeceased,
      wifeIsDivorced: data.wife[0].wifeIsDivorced,
      salary: data.income[0].salary,
      retirementSalary: data.income[0].retirementSalary,
      socialSecuritySalary: data.income[0].socialSecuritySalary,
      alrahmaSalary: data.income[0].alrahmaSalary,
      darAlataaSalary: data.income[0].darAlataaSalary,
      nafaqaSalary: data.income[0].nafaqaSalary,
      bahwanSalary: data.income[0].bahwanSalary,
      otherSalary: data.income[0].otherSalary,
      rentAmount: data.accommodationStatus[0].rentAmount,
      lateElectricalAmount: data.accommodationStatus[0].lateElectricalAmount,
      lateWaterAmount: data.accommodationStatus[0].lateWaterAmount,
      housingLoanAmount: data.loan[0].housingLoanAmount,
      personalLoanAmount: data.loan[0].personalLoanAmount,
      vehicleLoanAmount: data.loan[0].vehicleLoanAmount
    }
    setFormValue([val])

    /* form is in edit mode */
    setEditMode(true)

    /* Inform user that data is ready for edit */
    ToastrBanner('success', Message.dataReadyForEditing)

    /* Table stop loading */
    setLoading(false)
  }

  const getDataToDownLoad = async () => {
    const currentRecords = await reactTable.current.getResolvedState()
      .sortedData
    var data_to_download = []
    for (var index = 0; index < currentRecords.length; index++) {
      let record_to_download = {}
      for (var colIndex = 0; colIndex < manifest.columns.length; colIndex++) {
        record_to_download[manifest.columns[colIndex].Header] =
          currentRecords[index][manifest.columns[colIndex].accessor]
      }
      data_to_download.push(record_to_download)
    }
    await setDataToDownload(data_to_download)
    // this.setState({ dataToDownload: data_to_download }, () => {
    //   // click the CSVLink component to trigger the CSV download
    //   // this.csvLink.link.click()
    // })
    // await csvLink.current.link.click()
    return data_to_download
  }

  const download = async () => {
    await getDataToDownLoad()
    await csvLink.current.link.click()
  }

  const print = async () => {
    let d = await getDataToDownLoad()
    let col = []
    for (let i = 0; i < manifest.columns.length; i++) {
      col.push(manifest.columns[i].Header)
    }
    await printJS({
      printable: d,
      properties: col,
      type: 'json',
      gridHeaderStyle:
        'color: black;  border: 2px solid #3971A5; font-weight: bold;',
      gridStyle: 'border: 2px solid #3971A5; text-align: center'
    })
  }
  // # end region ////////////////////

  let columns = [
    {
      Header: manifest.title,
      columns: [
        {
          Header: '',
          Cell: row => (
            <TableButtons
              row={row}
              handleEdit={handleEditButtonClick}
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
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
          dir="rtl"
        >
          <FormSection>
            <FormElement>
              <FormTextInput
                labelText="اسم المستفيد الباحث عن العمل"
                name="nameOfRecipient"
                register={register}
              />
            </FormElement>
            <FormElement>
              <FormTextInput
                labelText="علاقة المستفيد بالمرجعي"
                name="relationship"
                register={register}
              />
            </FormElement>
            <FormElement>
              <FormTextInput
                labelText="العمر"
                name="ageOfRecipient"
                register={register}
              />
            </FormElement>
            <FormElement>
              <FormTextInput
                labelText="رقم الهاتف"
                name="phoneNumberOfRecipient"
                register={register}
              />
            </FormElement>
          </FormSection>

          <FormSection>
            <FormElement>
              <FormTextInput
                labelText="الرقم المدني"
                name="RecipientNationalId"
                register={register}
              />
            </FormElement>
            <FormElement>
              <FormTextInput
                labelText="المستوى الدراسي"
                name="RecipientEducationLevel"
                register={register}
              />
            </FormElement>
            <FormElement>
              <FormTextInput
                labelText="المجال"
                name="fieldOfWork"
                register={register}
              />
            </FormElement>
            <FormElement>
              <FormTextInput
                labelText="خبرات العمل"
                name="workExperience"
                register={register}
              />
            </FormElement>
            <FormElement>
              <FormTextInput
                labelText="حالة الفرد"
                name="status"
                register={register}
              />
            </FormElement>
          </FormSection>

          <FormSection>
            <FormElement>
              <FormSelect
                labelText="طريقة التواصل مع المستفيد"
                name="formOfContact"
                register={register}
              />
              {/* <FormTextInput
                labelText="طريقة التواصل مع المستفيد"
                name="formOfContact"
                register={register}
              /> */}
            </FormElement>
            <FormElement>
              <FormDateInput
                labelText="تاريخ التواصل"
                name="dateOfContact"
                register={register}
              />
            </FormElement>
          </FormSection>

          <FormSection>
            <FormElement>
              <FormTextArea
                labelText="تفاصيل التواصل"
                name="reasonForContact"
                register={register}
              />
            </FormElement>
          </FormSection>

          <FormSection>
            <FormCheckBox
              labelText="لا يرغب في التسجيل"
              name="isRegistered"
              register={register}
            />
          </FormSection>

          <FormSection>
            <FormElement>
              <FormTextArea
                labelText="سبب عدم الرغبة في التسجيل"
                name="reasonForNotRegistering"
                register={register}
              />
            </FormElement>
          </FormSection>

          <hr />

          <SubHeader headerText="بيانات الاسرة" />

          <FormSection>
            <FormElement>
              <FormTextInput
                labelText="رقم ملف الاسرة"
                name="formId" // from family Form
                register={register}
                isDisabled
              />
            </FormElement>
            <FormElement>
              <FormTextInput
                labelText="الاسم المرجعي"
                name="claimMadeBy" // from family Form
                register={register}
                isDisabled
              />
            </FormElement>
            <FormElement>
              <FormTextInput
                labelText="رقم هاتف الاسم المرجعي"
                name="wifePhone" // from family Form
                register={register}
                isDisabled
              />
            </FormElement>
          </FormSection>

          <FormSection>
            <FormElement>
              <FormTextInput
                labelText="المحافظة"
                name="governorate" // from family Form
                register={register}
                isDisabled
              />
            </FormElement>
            <FormElement>
              <FormTextInput
                labelText="الولاية"
                name="state" // from family Form
                register={register}
                isDisabled
              />
            </FormElement>
            <FormElement>
              <FormTextInput
                labelText="البلدة"
                name="town" // from family Form
                register={register}
                isDisabled
              />
            </FormElement>
            <FormElement>
              <FormTextInput
                labelText="الحلة"
                name="neighborhood" // from family Form
                register={register}
                isDisabled
              />
            </FormElement>
          </FormSection>

          <SubHeader headerText="حالة الام" />

          <FormSection>
            <FormCheckBox
              labelText="الام ربة منزل"
              name="isHouseWife"
              register={register}
              isDisabled
            />
            <FormCheckBox
              labelText="الام متقاعدة"
              name="wifeIsRetired"
              register={register}
              isDisabled
            />
            <FormCheckBox
              labelText="الام ارملة"
              name="wifeIsWidow"
              register={register}
              isDisabled
            />
            <FormCheckBox
              labelText="حالة هجر"
              name="wifeIsAbandoned"
              register={register}
              isDisabled
            />
            <FormCheckBox
              labelText="حالة عجز"
              name="wifeIsDisabled"
              register={register}
              isDisabled
            />
            <FormCheckBox
              labelText="الام مريضة"
              name="wifeIsSick"
              register={register}
              isDisabled
            />
            <FormCheckBox
              labelText="الام متوفاة"
              name="wifeIsDeceased"
              register={register}
              isDisabled
            />
            <FormCheckBox
              labelText="الام مطلقة"
              name="wifeIsDivorced"
              register={register}
              isDisabled
            />
          </FormSection>

          <SubHeader headerText="مصادر دخل الاسرة" />

          <FormSection>
            <FormElement>
              <FormTextInput
                labelText="مبلغ الراتب"
                name="salary" // from family Form
                register={register}
                isDisabled
              />
            </FormElement>
            <FormElement>
              <FormTextInput
                labelText="مبلغ التقاعد"
                name="retirementSalary" // from family Form
                register={register}
                isDisabled
              />
            </FormElement>
            <FormElement>
              <FormTextInput
                labelText="مبلغ الضمان"
                name="socialSecuritySalary" // from family Form
                register={register}
                isDisabled
              />
            </FormElement>
            <FormElement>
              <FormTextInput
                labelText="مبلغ جمعية الرحمة"
                name="alrahmaSalary" // from family Form
                register={register}
                isDisabled
              />
            </FormElement>
          </FormSection>
          <FormSection>
            <FormElement>
              <FormTextInput
                labelText="مبلغ دار العطاء"
                name="darAlataaSalary" // from family Form
                register={register}
                isDisabled
              />
            </FormElement>
            <FormElement>
              <FormTextInput
                labelText="النفقة"
                name="nafaqaSalary" // from family Form
                register={register}
                isDisabled
              />
            </FormElement>
            <FormElement>
              <FormTextInput
                labelText="مبلغ بهوان"
                name="bahwanSalary" // from family Form
                register={register}
                isDisabled
              />
            </FormElement>
            <FormElement>
              <FormTextInput
                labelText="مبالغ اخرى"
                name="otherSalary" // from family Form
                register={register}
                isDisabled
              />
            </FormElement>
          </FormSection>

          <SubHeader headerText="انفاق الاسرة" />

          <FormSection>
            <FormElement>
              <FormTextInput
                labelText="مبلغ الايجار"
                name="rentAmount" // from family Form
                register={register}
                isDisabled
              />
            </FormElement>
            <FormElement>
              <FormTextInput
                labelText="مبلغ فاتورة الكهرباء"
                name="lateElectricalAmount" // from family Form
                register={register}
                isDisabled
              />
            </FormElement>
            <FormElement>
              <FormTextInput
                labelText="مبلغ فاتورة المياه"
                name="lateWaterAmount" // from family Form
                register={register}
                isDisabled
              />
            </FormElement>
          </FormSection>

          <FormSection>
            <FormElement>
              <FormTextInput
                labelText="مبلغ القرض السكني"
                name="housingLoanAmount" // from family Form
                register={register}
                isDisabled
              />
            </FormElement>
            <FormElement>
              <FormTextInput
                labelText="مبلغ القرض الشخصي"
                name="personalLoanAmount" // from family Form
                register={register}
                isDisabled
              />
            </FormElement>
            <FormElement>
              <FormTextInput
                labelText="مبلغ قرض شراء سيارة"
                name="vehicleLoanAmount" // from family Form
                register={register}
                isDisabled
              />
            </FormElement>
          </FormSection>

          {/* This is a hidden for field holding the id of the element */}
          <input name="_id" hidden ref={register} disabled />

          <br />

          <SubmitButton />
        </form>
      </FormContainer>

      <Separator />

      <TableContainer>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ExportButton title="تنزيل البيانات" handleExport={download} />
          <ExportButton title="طباعة البيانات" handleExport={print} />
        </div>
        <div>
          <CSVLink
            data={dataToDownload}
            filename="data.csv"
            className="hidden"
            ref={csvLink}
            target="_blank"
          />
        </div>
        <Table
          columnData={columns}
          tableData={data}
          loading={loading}
          r={reactTable}
        />
      </TableContainer>
    </>
  )
}

export default ProductiveFamilies
