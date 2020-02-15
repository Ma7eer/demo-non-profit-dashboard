import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Axios from 'axios'

import { url } from '../api/index'

export default class Date extends Component {
  state = {
    date: this.props.rowData.original.ramadan[0].date
  }
  render() {
    return (
      <input
        type="text"
        placeholder="YYYY-MM-DD"
        style={{ width: '100%' }}
        onChange={e => this.setState({ date: e.target.value })}
        value={this.state.date}
        onBlur={e => {
          Axios.patch(
            `${url}/family/${this.props.rowData.original._id}`,
            {
              'ramadan.0.date': e.target.value
            },
            {
              headers: {
                Authorization: 'Bearer ' + localStorage.getItem('jwtToken')
              }
            }
          )
        }}
      />
    )
  }
}

Date.propTypes = {
  rowData: PropTypes.string
}
