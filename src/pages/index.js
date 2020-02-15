import React from 'react'
import { Link } from 'react-router-dom'
import { Panel } from 'react-bootstrap'

import elementOmanLogo from '../images/element-logo.png'

export default class Index extends React.Component {
  state = {
    loading: true,
    familyCount: '',
    sponsorshipCount: ''
  }
  render() {
    return (
      <>
        <Panel
          style={{ padding: '20px', width: '50%', margin: '0 auto' }}
          className="box"
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column'
            }}
          >
            <img src={elementOmanLogo} alt="alrahma logo" width="150px" />
            <br />
            <i className="fas fa-home" style={{ fontSize: '4rem' }}></i>
            <h2>الصفحة الرئيسية</h2>
            <h3>نسخة تجريبية</h3>
            <br />
            {localStorage.getItem('jwtToken') ? (
              <>
                <h3 className="hvr-bob">
                  {' '}
                  {localStorage.getItem('username')} مرحبا
                </h3>
                <Link to="/login">اعادة التسجيل؟</Link>
              </>
            ) : (
              <h4>
                يرجى <Link to="/login">تسجيل الدخول</Link>
              </h4>
            )}
            <div style={{ marginTop: '10%' }} />
          </div>
        </Panel>

        <footer
          style={{
            position: 'fixed',
            left: '0',
            bottom: '0',
            width: '100%',
            backgroundColor: '#242b32', //'#16a085'
            color: 'white',
            textAlign: 'right',
            padding: '16px 10px'
          }}
        >
          صناعة شركة العنصر&nbsp;&nbsp;&nbsp;
          <img
            src={elementOmanLogo}
            alt="element logo"
            width="70px"
            style={{ backgroundColor: 'white' }}
          />
        </footer>
      </>
    )
  }
}
