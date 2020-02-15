import React, { useState } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'

import { Panel } from 'react-bootstrap'

import { url } from '../api/index'
import toastrBanner from '../components/Message'
import message from '../data/toastrMessages'
import logo from '../images/element-logo.png'

import './login.css'

const setLocalStorage = res => {
  window.localStorage.setItem('jwtToken', res.data.token)
  window.localStorage.setItem('username', res.data.user[0].username)
  window.localStorage.setItem('reception', res.data.user[0].reception)
  window.localStorage.setItem('orphan', res.data.user[0].orphan)
  window.localStorage.setItem('lowIncome', res.data.user[0].lowIncome)
  window.localStorage.setItem('wedding', res.data.user[0].wedding)
  window.localStorage.setItem('productive', res.data.user[0].productive)
  window.localStorage.setItem('finance', res.data.user[0].finance)
  window.localStorage.setItem('delegate', res.data.user[0].delegate)
  window.localStorage.setItem('admin', res.data.user[0].admin)
  window.localStorage.setItem('temp', res.data.user[0].temp)
}

const Login = ({ history }) => {
  // clear local storage only when this page loads
  window.localStorage.clear()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      let formData = {
        username,
        password
      }
      let res = await axios.post(`${url}/login`, formData)
      setLocalStorage(res)
      // redirect to front page
      history.push('/')
    } catch (err) {
      if (err.response) {
        toastrBanner('error', message.wrongUsernameOrPassword)
      } else {
        toastrBanner('error', message.notConnected)
      }
    }
  }

  return (
    <>
      <div className="login-page-container">
        <div className="login-page-form-wrapper">
          <Panel className="box pad">
            <div className="image-wrapper">
              <img src={logo} alt="logo" width="100px" height="100px" />
            </div>
            <h1>تسجيل الدخول</h1>
            <br />

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">اسم المستخدم:</label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  placeholder="اسم المستخدم"
                  value={username}
                  name="username"
                  onChange={e => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="pwd">رقم السر:</label>
                <input
                  type="password"
                  className="form-control"
                  id="pwd"
                  placeholder="رقم السر"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-default submit-button">
                دخول
              </button>
            </form>
          </Panel>
        </div>
      </div>
    </>
  )
}

Login.propTypes = {
  history: PropTypes.object
}

export default Login
