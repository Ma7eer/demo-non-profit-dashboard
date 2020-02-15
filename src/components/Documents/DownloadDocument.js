import React from 'react'
import PropTypes from 'prop-types'

// react-bootstrap components
import { Button } from 'react-bootstrap'

const DownloadDocument = ({ fileName, handleChange, serverDirectory }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <input
        type="number"
        onChange={handleChange}
        value={fileName}
        placeholder="رقم الاسرة"
        min={0}
      />
      <form action={serverDirectory}>
        <Button
          variant="primary"
          type="submit"
          style={{ backgroundColor: '#007bff', color: 'white' }}
        >
          تحميل الملف
        </Button>
      </form>
    </div>
  )
}

DownloadDocument.propTypes = {
  fileName: PropTypes.string,
  handleChange: PropTypes.func,
  serverDirectory: PropTypes.string
}

export default DownloadDocument
