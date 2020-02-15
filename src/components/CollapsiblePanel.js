import React from 'react'
import PropTypes from 'prop-types'

const CollapsiblePanel = ({ title, isOpen }) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}
  >
    {isOpen ? (
      <i
        className="fas fa-angle-up"
        style={{ fontSize: '20px', marginLeft: '10px' }}
      />
    ) : (
      <i
        className="fas fa-angle-down"
        style={{ fontSize: '20px', marginLeft: '10px' }}
      />
    )}
    <span>{title}</span>
  </div>
)

CollapsiblePanel.propTypes = {
  title: PropTypes.string,
  isOpen: PropTypes.bool
}

export default CollapsiblePanel
