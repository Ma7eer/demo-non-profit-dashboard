import React from 'react'

import PageLogicHandler from '../components/LogicHandlers/PageLogicHandler'
import borrowSchema from '../schemas/borrow'
import getDate from '../util/extractDate'

const manifest = {
  schema: borrowSchema,
  path: 'borrow',
  title: 'استمارة الاستعارة',
  columns: [
    {
      Header: 'تاريخ الارجاع',
      accessor: 'dateOfReturn',
      Cell: props => <span>{getDate(props.value)}</span>
    },
    {
      Header: 'تاريخ الاستلام',
      accessor: 'dateOfBorrow',
      Cell: props => <span>{getDate(props.value)}</span>
    },
    {
      Header: 'اسم الموظف',
      accessor: 'nameOfEmployee'
    },
    {
      Header: 'تابع لقسم',
      accessor: 'department'
    },
    {
      Header: '	اسم المستلم',
      accessor: 'recipientName'
    },
    {
      Header: 'اسم الاسرة',
      accessor: 'familyName'
    },
    {
      Header: 'رقم ملف الاسرة',
      accessor: 'familyId'
    },
    {
      Header: 'رقم الملف',
      accessor: 'formId'
    }
  ]
}

const Borrow = () => <PageLogicHandler manifest={manifest} />

export default Borrow
