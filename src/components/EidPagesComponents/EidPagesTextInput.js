import React from 'react'
import PropTypes from 'prop-types'

const Input = ({
  name,
  label,
  value,
  isDisabled = true,
  handleInputChange
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        margin: '5px',
        width: '50%'
      }}
    >
      <label>{label}</label>
      <input
        type="text"
        value={value}
        disabled={isDisabled}
        onChange={handleInputChange}
        placeholder={label}
        name={name}
        style={{ padding: '5px' }}
      />
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  isDisabled: PropTypes.bool,
  handleInputChange: PropTypes.func
}

export default Input
