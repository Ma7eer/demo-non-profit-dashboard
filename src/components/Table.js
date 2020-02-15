import React from 'react'
import PropTypes from 'prop-types'

import '../App.css'

// Import React Table
import ReactTable from 'react-table'
import 'react-table/react-table.css'

const Table = ({
  tableData,
  columnData,
  title,
  defaultPageSize = 10,
  loading,
  r
}) => {
  const data = tableData
  let columns = columnData
  return (
    <>
      <h1>{title}</h1>
      <ReactTable
        data={data}
        columns={columns}
        defaultPageSize={defaultPageSize}
        filterable
        loading={loading}
        className="-striped -highlight"
        style={{ backgroundColor: 'white', color: '#292f33', fontSize: '18px' }}
        ref={r}
        noDataText="لا يوجد بيانات"
        defaultFilterMethod={(filter, row) =>
          String(row[filter.id])
            .toLowerCase()
            .includes(filter.value.toLowerCase())
        }
        getTheadGroupProps={() => {
          return {
            style: {
              background: 'linear-gradient(to bottom, #25aae1, #18a4e0)', //'#16a085',#19b394, #50c9ac
              color: 'white'
            }
          }
        }}
        getTheadProps={() => {
          return {
            style: {
              background: 'linear-gradient(to top, #110c11, #616161)', //'#110c11',
              color: 'white'
            }
          }
        }}
        getTheadThProps={() => {
          return {
            style: {
              border: '0.5px solid #e0dfdf'
            }
          }
        }}
        getTdProps={() => {
          return {
            style: {
              border: '0.1px solid #110c11'
            }
          }
        }}
      />
    </>
  )
}

Table.propTypes = {
  tableData: PropTypes.array,
  columnData: PropTypes.array,
  title: PropTypes.string,
  defaultPageSize: PropTypes.number,
  loading: PropTypes.bool,
  r: PropTypes.any
}

export default Table
