import React from 'react'
import axios from 'axios'
import ReactToPrint from 'react-to-print'

import { url } from '../api/index'

class Page extends React.Component {
  render() {
    return (
      <div id="div1">
        <br />
        <table style={{ backgroundColor: 'white' }} className="myTable">
          <tbody>
            <tr>
              <td>
                <h1 className="printHeader">بيانات افراد الأسر</h1>
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <table dir="rtl">
          <thead style={{ backGround: 'rgb(235, 229, 229)' }}>
            <tr>
              <th width="3%">استمارة</th>
              <th width="3%">رقم</th>
              <th width="15%">اسم</th>
              <th width="4%">صلة</th>
              <th width="10%">تاريخ الميلاد</th>
              <th width="5%">حالة الاجتماغية</th>
              <th width="5%">حالة صحية</th>
              <th width="5%">مستوى التعليمي</th>
              <th width="5%">المهنة</th>
              <th width="10%">مكان العمل</th>
              <th width="5%">الراتب</th>
              <th width="5%">مبلغ القرض</th>
              <th width="5%">قسط الشهري</th>
              <th width="10%">سبب القرض</th>
            </tr>
          </thead>
          <tbody>
            {this.props.data.length > 0 ? (
              this.props.data.map((d, index) => (
                <tr key={index}>
                  <td>{d.familyId}</td>
                  <td>{d.familyMemberId}</td>
                  <td>{d.familyMemberName}</td>
                  <td>{d.relation}</td>
                  <td>{d.dateOfBirth}</td>
                  <td>{d.socialStatus}</td>
                  <td>{d.health}</td>
                  <td>{d.educationLevel}</td>
                  <td>{d.job}</td>
                  <td>{d.workPlace}</td>
                  <td>{d.familyMemberSalary}</td>
                  <td>{d.familyMemberLoan}</td>
                  <td>{d.monthlyInstallment}</td>
                  <td>{d.loanReason}</td>
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
}

export default class FamilyMembersPrint extends React.Component {
  state = {
    formId: '',
    data: []
  }

  handleChange = e => {
    this.setState({ formId: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    axios
      .get(`${url}/familyMembers/getOne/${this.state.formId}`, {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('jwtToken') }
      })
      // .then(res => console.log(res))
      .then(res => this.setState({ data: res.data.data }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <>
        <form
          onSubmit={this.handleSubmit}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <input
            type="text"
            value={this.state.formId}
            onChange={this.handleChange}
          />
        </form>
        <ReactToPrint
          trigger={() => (
            <button
              href="#"
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              طباعة
            </button>
          )}
          content={() => this.componentRef}
        />
        <Page data={this.state.data} ref={el => (this.componentRef = el)} />
      </>
    )
  }
}
