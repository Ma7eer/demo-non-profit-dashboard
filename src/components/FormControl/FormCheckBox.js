import React from 'react'
import PropTypes from 'prop-types'

const inputStyle = { margin: '10px', width: '100%' }

const FormCheckBox = ({ labelText, name, register, isDisabled }) => {
  return (
    <div style={inputStyle}>
      <input type="checkbox" name={name} ref={register} disabled={isDisabled} />
      &ensp;
      <label>{labelText}</label>
    </div>
  )
}

FormCheckBox.propTypes = {
  labelText: PropTypes.string,
  name: PropTypes.string,
  register: PropTypes.any,
  isDisabled: PropTypes.bool
}

export default FormCheckBox
