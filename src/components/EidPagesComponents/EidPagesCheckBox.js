import React from 'react'
import PropTypes from 'prop-types'

const EidPagesCheckBox = ({ label, isChecked, handleCheckBoxChange, name }) => {
  return (
    <div style={{ display: 'flex', margin: '18px', width: '20%' }}>
      <label style={{ marginLeft: '12px' }}>{label}</label>
      <input
        type="checkbox"
        onChange={handleCheckBoxChange}
        checked={isChecked}
        style={{ padding: '5px' }}
        name={name}
      />
    </div>
  )
}

EidPagesCheckBox.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  isChecked: PropTypes.bool,
  name: PropTypes.string,
  handleCheckBoxChange: PropTypes.func
}

export default EidPagesCheckBox
