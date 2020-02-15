import React from 'react'
import PropTypes from 'prop-types'
import { Button, ButtonToolbar } from 'react-bootstrap'

const TableButtons = ({
  row,
  handleEdit,
  handleDelete,
  showDelete = true,
  showEdit = true
}) => {
  return showDelete && showEdit ? (
    <ButtonToolbar style={{ display: 'flex', justifyContent: 'center' }}>
      <Button
        bsSize="small"
        bsStyle="warning"
        onClick={() => handleEdit(row.original, row.index)}
      >
        <i className="glyphicon glyphicon-pencil" />
      </Button>
      <Button bsSize="small" bsStyle="danger" onClick={() => handleDelete(row)}>
        <i className="glyphicon glyphicon-trash" />
      </Button>
    </ButtonToolbar>
  ) : showDelete ? (
    <ButtonToolbar style={{ display: 'flex', justifyContent: 'center' }}>
      <Button bsSize="small" bsStyle="danger" onClick={() => handleDelete(row)}>
        <i className="glyphicon glyphicon-trash" />
      </Button>
    </ButtonToolbar>
  ) : (
    <ButtonToolbar style={{ display: 'flex', justifyContent: 'center' }}>
      <Button
        bsSize="small"
        bsStyle="warning"
        onClick={() => handleEdit(row.original, row.index)}
      >
        <i className="glyphicon glyphicon-pencil" />
      </Button>
    </ButtonToolbar>
  )
}

TableButtons.propTypes = {
  row: PropTypes.object,
  handleEdit: PropTypes.func,
  handleDelete: PropTypes.func,
  showDelete: PropTypes.bool,
  showEdit: PropTypes.bool
}

export default TableButtons
