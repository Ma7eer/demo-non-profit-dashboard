import React from 'react'

import Page from '../components/LogicHandlers/VisitReportLogicHandler'
import visitReportSchema from '../schemas/visitReports'

const manifest = {
  schema: visitReportSchema,
  path: ['family/report', 'visitReports'],
  title: 'تقرير الباحث',
  columns: [
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
      accessor: 'formId'
    }
  ]
}

const VisitReports = () => <Page manifest={manifest} />

export default VisitReports
