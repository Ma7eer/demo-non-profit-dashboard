import React from 'react'
import PropTypes from 'prop-types'

// core components
import EidPagesCheckBox from './EidPagesCheckBox'

const EditPagesCheckBoxList = ({ handleInputChange, dataArray }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }} dir="rtl">
      {dataArray.map(d => (
        <EidPagesCheckBox
          key={d.label}
          label={d.label}
          value={d.value}
          handleCheckBoxChange={handleInputChange}
          isChecked={d.isChecked}
          name={d.value}
        />
      ))}
    </div>
  )
}

EditPagesCheckBoxList.propTypes = {
  handleInputChange: PropTypes.func,
  dataArray: PropTypes.array
}

export default EditPagesCheckBoxList
