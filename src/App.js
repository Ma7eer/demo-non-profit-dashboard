import React, { Component } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

import Router from './router/router'
import './App.css'

class App extends Component {
  render() {
    return (
      <>
        <Router />
        <ToastContainer
          position="top-right"
          autoClose={4000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl
          pauseOnVisibilityChange
          draggable={false}
          pauseOnHover
        />
      </>
    )
  }
}

export default App
