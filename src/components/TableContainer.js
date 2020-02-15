import React from 'react'
import PropTypes from 'prop-types'

const TableContainer = ({ children }) => (
  <div className="App" style={{ textAlign: 'center' }}>
    {children}
    <br />
    <br />
  </div>
)

TableContainer.propTypes = {
  children: PropTypes.any
}

export default TableContainer
