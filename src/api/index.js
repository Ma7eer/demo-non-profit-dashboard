import axios from 'axios'

import ToastrBanner from '../components/Message'
import Message from '../data/toastrMessages'

export let url = null

if (process.env.NODE_ENV === 'development') {
  url = 'http://localhost:5000'
} else {
  url = 'https://dashboard.alrahma-baraka.com:5001'
}

export const getData = path => {
  return axios
    .get(`${url}/${path}`, {
      headers: { Authorization: 'Bearer ' + localStorage.getItem('jwtToken') }
    })
    .then(res => {
      ToastrBanner('success', Message.dataFetchedSuccessfully)
      return res.data.data
    })
    .catch(err => {
      if (err.response.status === 403) {
        ToastrBanner('error', Message.userNotLoggedIn)
        localStorage.clear()
      } else {
        ToastrBanner('error', Message.dataFetchingFailed)
      }
    })
}

export const getDataQuietly = path => {
  return axios
    .get(`${url}/${path}`, {
      headers: { Authorization: 'Bearer ' + localStorage.getItem('jwtToken') }
    })
    .then(res => {
      return res.data.data
    })
    .catch(err => {
      if (err.response.status === 403) {
        ToastrBanner('error', Message.userNotLoggedIn)
        localStorage.clear()
      } else {
        ToastrBanner('error', Message.dataFetchingFailed)
      }
    })
}

export const getOneQuietly = (path, id) => {
  return axios
    .get(`${url}/${path}/${id}`, {
      headers: { Authorization: 'Bearer ' + localStorage.getItem('jwtToken') }
    })
    .then(res => {
      return res.data.data
    })
    .catch(err => {
      if (err.response.status === 403) {
        localStorage.clear()
      } else {
        // Message('error', 'فشل في تجهيز البيانات للتحديث')
      }
    })
}
export const getOne = (path, id) => {
  return axios
    .get(`${url}/${path}/${id}`, {
      headers: { Authorization: 'Bearer ' + localStorage.getItem('jwtToken') }
    })
    .then(res => {
      ToastrBanner('success', Message.dataReadyForEditing)
      return res.data.data
    })
    .catch(err => {
      if (err.response.status === 403) {
        ToastrBanner('error', Message.userNotLoggedIn)
        localStorage.clear()
      } else {
        ToastrBanner('error', Message.dataEditingFailed)
      }
    })
}

export const postData = (path, postData) => {
  return axios
    .post(`${url}/${path}`, postData, {
      headers: { Authorization: 'Bearer ' + localStorage.getItem('jwtToken') }
    })
    .then(res => {
      ToastrBanner('success', Message.dataPostedSuccessfully)
      return res
    })
    .catch(err => {
      if (err.response.status === 403) {
        ToastrBanner('error', Message.userNotLoggedIn)
        localStorage.clear()
      } else if (err.response.status === 422) {
        ToastrBanner('error', Message.duplicateData)
      } else {
        ToastrBanner('error', Message.dataPostingFailed)
      }
    })
}

export const patchData = (path, patchData) => {
  axios
    .patch(`${url}/${path}/${patchData._id}`, patchData, {
      headers: { Authorization: 'Bearer ' + localStorage.getItem('jwtToken') }
    })
    .then(res => res)
    .then(() => ToastrBanner('success', Message.dataEditedSuccessfully))
    .catch(err => {
      if (err.response.status === 403) {
        ToastrBanner('error', Message.userNotLoggedIn)
        localStorage.clear()
      } else {
        ToastrBanner('error', Message.dataEditingFailed)
      }
    })
}
export const deleteData = (path, deleteData) => {
  axios
    .delete(`${url}/${path}/${deleteData._id}`, deleteData)
    .then(res => res)
    .then(() => ToastrBanner('success', Message.dataDeletedSuccessfully))
    .catch(err => {
      if (err.response.status === 403) {
        ToastrBanner('error', Message.userNotLoggedIn)
        localStorage.clear()
      } else {
        ToastrBanner('error', Message.dataDeletingFailed)
      }
    })
}
