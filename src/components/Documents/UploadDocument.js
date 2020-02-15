import React, { useState } from 'react'
import PropTypes from 'prop-types'

// core compoenets
import Message from '../Message'

// react-bootstrap components
import { Button } from 'react-bootstrap'

const UploadDocument = ({ action, instruction }) => {
  const [file, setFile] = useState('')

  const handleChange = e => {
    let fileName = e.target.value
    if (fileName.includes('.pdf')) {
      setFile(fileName)
    } else {
      setFile('')
      Message('warn', 'يجب ام يكون الملف  pdf')
    }
  }
  return (
    <form
      action={action}
      method="post"
      encType="multipart/form-data"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <input
        type="file"
        name="file"
        accept=".pdf"
        value={file}
        onChange={handleChange}
      />
      <br />
      <Button
        type="submit"
        name="submit"
        style={{ backgroundColor: '#007bff', color: 'white' }}
      >
        رفع الملف الى الموقع الجمعية
      </Button>
      <br />
      <br />
      <br />
      <p>{instruction}</p>
    </form>
  )
}

UploadDocument.propTypes = {
  action: PropTypes.string,
  instruction: PropTypes.string
}

export default UploadDocument
