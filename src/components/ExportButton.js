import React from 'react'
import PropTypes from 'prop-types'

const ExportButton = ({ handleExport, title = 'تنزيل البيانات' }) => {
  return (
    <button
      className="btn btn-primary"
      onClick={handleExport}
      style={{ margin: '3px' }}
    >
      {title}{' '}
      {title === 'تنزيل البيانات' ? (
        <i className="fas fa-download"></i>
      ) : (
        <i className="fas fa-print"></i>
      )}
    </button>
  )
}

ExportButton.propTypes = {
  handleExport: PropTypes.func,
  title: PropTypes.string
}

export default ExportButton
