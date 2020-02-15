import React from 'react'
import PropTypes from 'prop-types'
import Popup from 'reactjs-popup'
import SignatureCanvas from 'react-signature-canvas'

// react-bootstrap components
import { Button } from 'react-bootstrap'

const SignaturePopup = ({
  signature,
  handlePopupButtonClick,
  closeModal,
  open,
  isEmptyCanvas,
  trimmedDataURL,
  handleSaveButtonClick,
  handleClearButtonClick,
  handlePadDrawing
}) => {
  return (
    <Popup
      trigger={
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            textDecoration: 'none'
          }}
        >
          <Button
            style={
              signature.length === 0
                ? {}
                : { backgroundColor: '#28a745', color: 'white' }
            }
            onClick={handlePopupButtonClick}
          >
            {signature.length === 0 ? 'التوقيع' : 'تم التوقيع'}
          </Button>
        </div>
      }
      modal
      closeOnDocumentClick={false}
      onClose={closeModal}
      open={open}
      // style={{ backgroundColor: "red" }}
    >
      <div className="close" onClick={closeModal}>
        X
      </div>
      <span style={{ backgroundColor: 'grey' }}>
        {' '}
        <div
          style={{
            border: '1px solid black',
            width: '780px',
            // height: "300px",
            zIndex: '-1'
          }}
        >
          {isEmptyCanvas || signature.length === 0 ? (
            <SignatureCanvas
              penColor="black"
              canvasProps={{
                width: 780,
                height: 300,
                className: 'sigCanvas'
              }}
              ref={ref => {
                // sigPad = ref
                handlePadDrawing(ref)
              }}
            />
          ) : (
            <img src={trimmedDataURL} alt="signature" />
          )}{' '}
        </div>
        {isEmptyCanvas ? (
          <div />
        ) : (
          <button onClick={handleSaveButtonClick}>Save</button>
        )}
        {isEmptyCanvas ? (
          <button onClick={handleSaveButtonClick}>Save</button>
        ) : localStorage.getItem('username') === 'MANDOOB1' ||
          localStorage.getItem('username') === 'MANDOOB2' ? (
          <div />
        ) : (
          <button onClick={handleClearButtonClick}>Clear</button>
        )}
      </span>
    </Popup>
  )
}

SignaturePopup.propTypes = {
  signature: PropTypes.string,
  handlePopupButtonClick: PropTypes.func,
  closeModal: PropTypes.func,
  open: PropTypes.bool,
  isEmptyCanvas: PropTypes.bool,
  trimmedDataURL: PropTypes.string,
  handleSaveButtonClick: PropTypes.func,
  handleClearButtonClick: PropTypes.func,
  handlePadDrawing: PropTypes.func
}

export default SignaturePopup
