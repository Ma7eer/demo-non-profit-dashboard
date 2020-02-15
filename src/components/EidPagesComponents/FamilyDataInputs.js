import React from 'react'
import PropTypes from 'prop-types'

// react-bootstrap components
import { Button } from 'react-bootstrap'

// core components
import EidPagesTextInput from './EidPagesTextInput'

const FamilyDataInputs = ({
  formId,
  husbandName,
  husbandPhone,
  husbandCivilId,
  handleFamInputChange,
  wifeName,
  wifePhone,
  wifeCivilId,
  handleSubmitButtonClick,
  handleEditButtonClick,
  allowEdit
}) => {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }} dir="rtl">
        <EidPagesTextInput label="رقم الملف" name="formId" value={formId} />
        <EidPagesTextInput
          label="اسم الزوج"
          name="husbandName"
          value={husbandName}
        />
        <EidPagesTextInput
          label="هاتف الزوج"
          value={husbandPhone}
          isDisabled={allowEdit ? false : true}
          handleInputChange={handleFamInputChange}
          name="husbandPhone"
        />
        <EidPagesTextInput
          label="الرقم المدني للزوج"
          value={husbandCivilId}
          isDisabled={allowEdit ? false : true}
          handleInputChange={handleFamInputChange}
          name="husbandCivilId"
        />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
        dir="rtl"
      >
        <EidPagesTextInput
          label="اسم الزوجة"
          name="wifeName"
          value={wifeName}
        />
        <EidPagesTextInput
          label="هاتف الزوجة"
          value={wifePhone}
          isDisabled={allowEdit ? false : true}
          name="wifePhone"
          handleInputChange={handleFamInputChange}
        />
        <EidPagesTextInput
          label="الرقم المدني للزوجة"
          value={wifeCivilId}
          isDisabled={allowEdit ? false : true}
          name="wifeCivilId"
          handleInputChange={handleFamInputChange}
        />
        {allowEdit ? (
          <Button onClick={handleSubmitButtonClick}>تم التعديل</Button>
        ) : (
          <Button onClick={handleEditButtonClick}>تعديل بيانات الاسرة</Button>
        )}
      </div>
    </>
  )
}

FamilyDataInputs.propTypes = {
  formId: PropTypes.string,
  husbandName: PropTypes.string,
  husbandPhone: PropTypes.string,
  husbandCivilId: PropTypes.string,
  handleFamInputChange: PropTypes.func,
  wifeName: PropTypes.string,
  wifePhone: PropTypes.string,
  wifeCivilId: PropTypes.string,
  handleSubmitButtonClick: PropTypes.func,
  handleEditButtonClick: PropTypes.func,
  allowEdit: PropTypes.bool
}

export default FamilyDataInputs
