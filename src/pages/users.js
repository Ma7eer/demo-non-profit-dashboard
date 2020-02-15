import React from 'react'

import PageLogicHandler from '../components/LogicHandlers/PageLogicHandler'
import usersSchema from '../schemas/users'

const manifest = {
  schema: usersSchema,
  path: 'users',
  title: 'بيانات مستخدمي البرنامج',
  columns: [
    {
      Header: 'الرقم السري',
      accessor: 'password'
    },
    {
      Header: 'اسم المستخدم',
      accessor: 'username'
    },
    {
      Header: 'اسم',
      accessor: 'name'
    }
  ]
}

const User = () => <PageLogicHandler manifest={manifest} />

export default User
