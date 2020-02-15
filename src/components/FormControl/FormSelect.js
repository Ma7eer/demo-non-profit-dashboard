import React from 'react'
import PropTypes from 'prop-types'

const inputStyle = {
  padding: '5px',
  width: '100%',
  border: '1px solid #ccc',
  borderRadius: '4px',
  boxShadow: 'inset 0 1px 1px rgba(0,0,0,.075)',
  transition: 'border-color ease-in-out .15s,box-shadow ease-in-out .15s',
  backgroundColor: 'white'
}

const FormTextInput = ({ labelText, name, register, isDisabled = false }) => (
  <>
    <label htmlFor={name}>{labelText}</label>
    {/* <input
      name={name}
      id={name}
      ref={register}
      placeholder={labelText}
      style={inputStyle}
      disabled={isDisabled}
    /> */}
    <select
      name={name}
      id={name}
      ref={register}
      placeholder={labelText}
      style={inputStyle}
    >
      <option></option>
      <option>واتساب</option>
      <option>اتصال</option>
      <option>رسالة نصية</option>
      <option>ايميل</option>
    </select>
  </>
)

FormTextInput.propTypes = {
  labelText: PropTypes.string,
  name: PropTypes.string,
  register: PropTypes.any,
  isDisabled: PropTypes.bool
}

export default FormTextInput
