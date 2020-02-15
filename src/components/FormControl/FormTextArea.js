import React from 'react'
import PropTypes from 'prop-types'

const inputStyle = {
  padding: '5px',
  width: '100%',
  border: '1px solid #ccc',
  borderRadius: '4px',
  boxShadow: 'inset 0 1px 1px rgba(0,0,0,.075)',
  transition: 'border-color ease-in-out .15s,box-shadow ease-in-out .15s'
}

const FormTextArea = ({ labelText, name, register }) => (
  <>
    <label htmlFor={name}>{labelText}</label>
    <textarea
      name={name}
      id={name}
      ref={register}
      placeholder={labelText}
      style={inputStyle}
    />
  </>
)

FormTextArea.propTypes = {
  labelText: PropTypes.string,
  name: PropTypes.string,
  register: PropTypes.any
}

export default FormTextArea
