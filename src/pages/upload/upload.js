import React from 'react'

// core components
import DownloadDocument from '../../components/Documents/DownloadDocument'
import UploadDocument from '../../components/Documents/UploadDocument'

// assets
import logo from '../../images/logo.png'

class Upload extends React.Component {
  state = {
    fileName: ''
  }
  handleChange = e => {
    this.setState({ fileName: e.target.value })
  }
  render() {
    return (
      <div className="container" style={{ textAlign: 'center' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center'
          }}
        >
          <img src={logo} alt="logo" width="100px" height="100px" />
        </div>
        <h1>رفع و تحميل ملفات الاسرة</h1>
        <br />
        <DownloadDocument
          fileName={this.state.fileName}
          handleChange={this.handleChange}
          serverDirectory={`https://alrahma4mc.com/log/elFinder-2.1.49/files/morfiqat/${this.state.fileName}.pdf`}
        />
        <br />
        <hr />
        <br />
        <UploadDocument
          action={'https://alrahma4mc.com/log/upload.php'}
          instruction={'تاكد ان اسم الملف مطابق لرقم الاسرة قبل رفع الملف'}
        />
      </div>
    )
  }
}

export default Upload
