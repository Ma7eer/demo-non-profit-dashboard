import React from 'react'
import PropTypes from 'prop-types'

const formSection = { display: 'flex', justifyContent: 'center', width: '100%' }

const formElement = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  width: '100%',
  margin: '10px'
}

export const FormSection = ({ children }) => (
  <div style={formSection}>{children}</div>
)
export const FormElement = ({ children }) => (
  <div style={formElement}>{children}</div>
)

FormSection.propTypes = {
  children: PropTypes.any
}

FormElement.propTypes = {
  children: PropTypes.any
}
