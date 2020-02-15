import React from 'react'

import PageLogicHandler from '../components/LogicHandlers/PageLogicHandler'
import receptionSchema from '../schemas/reception.js'
import getFormattedDate from '../util/extractDate'
import {
  boolCellFormat,
  boolDropDownFilter,
  boolFilterMethod
} from '../util/tableMethods'

const manifest = {
  schema: receptionSchema,
  path: 'receptions',
  title: 'بيانات استقبال أسر الجمعية',
  columns: [
    {
      Header: 'انهاء الاجراءات؟',
      accessor: 'caseClosed',
      minWidth: 60,
      Cell: row => boolCellFormat(row, 'caseClosed'),
      filterMethod: (filter, row) => boolFilterMethod(filter, row),
      Filter: ({ filter, onChange }) => boolDropDownFilter(filter, onChange)
    },
    {
      Header: 'الإحالة إلى',
      accessor: 'caseMovedTo',
      minWidth: 70
    },
    {
      Header: 'تاريخ الزيارة',
      accessor: 'date',
      minWidth: 60,
      Cell: props => getFormattedDate(props.value)
    },
    {
      Header: 'سبب الزيارة',
      accessor: 'purposeOfVisit'
    },
    {
      Header: '	مقدم الطلب',
      accessor: 'visitorName'
    },
    {
      Header: 'رقم ملف الأسرة',
      accessor: 'familyId',
      minWidth: 60
    },
    {
      Header: 'رقم الزيارة',
      accessor: 'receptionNumber',
      minWidth: 50
    }
  ]
}

const Reception = () => {
  return <PageLogicHandler manifest={manifest} />
}

export default Reception
