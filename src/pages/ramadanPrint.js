import React from 'react'
import axios from 'axios'
import ReactToPrint from 'react-to-print'
import PropTypes from 'prop-types'
import ReactLoading from 'react-loading'

import { url } from '../api/index'

const Page = ({ data, loading }) => {
  return (
    <div id="div1">
      <br />
      <table style={{ backgroundColor: 'white' }} className="myTable">
        <tbody>
          <tr>
            <td>
              <h1 className="printHeader">بيانات اسر رمضان</h1>
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <table dir="rtl">
        <thead style={{ backGround: 'rgb(235, 229, 229)' }}>
          <tr>
            <th width="3%">رقم</th>
            <th width="5%">اسم الزوج</th>
            <th width="3%">هاتف الزوج</th>
            <th width="5%">اسم الزوجة</th>
            <th width="3%">هاتف الزوجة</th>
            <th width="6%">التوقيع</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <div
              style={{
                position: 'absolute',
                left: '50%',
                marginLeft: '-10%',
                marginTop: '6%'
              }}
            >
              <ReactLoading
                type={'spin'}
                color={'#50c9ac'}
                height={567}
                width={300}
              />
            </div>
          ) : data.length > 0 ? (
            data.map((d, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{d.husband[0].husbandName}</td>
                <td>{d.husband[0].husbandPhone}</td>
                <td>{d.wife[0].wifeName}</td>
                <td>{d.wife[0].wifePhone}</td>
                <td>
                  <img
                    src={d.signature}
                    alt="signature"
                    // width="100px"
                    height="25px"
                  />
                </td>
              </tr>
            ))
          ) : (
            <div />
          )}
        </tbody>
      </table>
    </div>
  )
}

export default class SponsorPrintTable extends React.Component {
  state = {
    formId: '',
    data: [],
    loading: true
  }

  handleChange = e => {
    this.setState({ formId: e.target.value })
  }

  componentDidMount() {
    let u = url + '/family/ramadanPrint'
    axios
      .get(u, {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('jwtToken') }
      })
      .then(res => this.setState({ data: res.data.data, loading: false }))
      // .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <>
        <ReactToPrint
          trigger={() => (
            <button style={{ display: 'flex', justifyContent: 'center' }}>
              طباعة
            </button>
          )}
          content={() => this.componentRef}
        />
        <Page
          data={this.state.data}
          ref={el => (this.componentRef = el)}
          loading={this.state.loading}
        />
      </>
    )
  }
}

Page.propTypes = {
  data: PropTypes.any,
  loading: PropTypes.bool
}
