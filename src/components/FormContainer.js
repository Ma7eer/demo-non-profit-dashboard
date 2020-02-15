import React from 'react'
import { Panel } from 'react-bootstrap'
import PropTypes from 'prop-types'

// import logo from '../images/logo.png'
import logo from '../images/element-logo.png'

const FormContainer = ({ title, ...props }) => (
  <div className="App">
    <Panel style={{ padding: '20px' }} className="box">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          textAlign: 'center'
        }}
      >
        <img src={logo} alt="logo" width="200px" height="100px" />
      </div>
      <h1>{title}</h1>
      <br />
      {props.children}
    </Panel>
  </div>
)

FormContainer.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any
}

export default FormContainer
