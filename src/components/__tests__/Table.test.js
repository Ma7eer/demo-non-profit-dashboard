import '@testing-library/react/cleanup-after-each'
import React from 'react'
import { render } from '@testing-library/react'
import Table from '../Table'
import ReactTable from 'react-table'

const data = [
  {
    name: 'Tanner Linsley',
    age: 26,
    friend: {
      name: 'Jason Maurer',
      age: 23
    }
  }
]

const columns = [
  {
    Header: 'Name',
    accessor: 'name' // String-based value accessors!
  },
  {
    Header: 'Age',
    accessor: 'age',
    Cell: props => <span className="number">{props.value}</span> // Custom cell components!
  },
  {
    Header: props => <span>Friend Age</span>, // Custom header components!
    accessor: 'friend.age'
  }
]

test('Table renders only title when table and column data is empty', () => {
  const { container } = render(
    <Table tableData={[]} columnData={[]} title={'test title'} />
  )
  expect(container.firstChild).toMatchSnapshot()
})

test('Table renders only title and table with column', () => {
  const { container } = render(
    <>
      <h1>{'title'}</h1>
      <ReactTable
        data={data}
        columns={columns}
        defaultPageSize={10}
        filterable
        loading={false}
        className="-striped -highlight"
        style={{ backgroundColor: 'white', color: '#292f33', fontSize: '18px' }}
        noDataText="لا يوجد بيانات"
        defaultFilterMethod={(filter, row) =>
          String(row[filter.id])
            .toLowerCase()
            .includes(filter.value.toLowerCase())
        }
      />
    </>
  )
  expect(container).toMatchSnapshot()
})
