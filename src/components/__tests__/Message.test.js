import React from 'react'
import { toast } from 'react-toastify'
import renderer from 'react-test-renderer'
import { ToastContainer } from 'react-toastify'
import Message from '../Message'

const settings = {
  position: 'top-right',
  autoClose: 4000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: false
}

test('it returns a toastr message', () => {
  let text = 'my Error message'
  let component = renderer.create(<ToastContainer />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
  //   expect(Message('error', text)).toBe(toast.error(text, settings))
})
