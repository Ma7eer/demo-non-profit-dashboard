import React from 'react'
import { add } from './add'

export const sumAllRows = (row, accessor) => (
  <span>
    {row.data.map(d => parseInt(d[accessor])).reduce(add, 0)}{' '}
    <strong>:المجموع</strong>
  </span>
)

export const countAllRows = row => (
  <span>
    {row.data.length} <strong>:المجموع</strong>
  </span>
)

export const boolCellFormat = (row, accessor) =>
  row.original[accessor] ? <div>نعم</div> : <div>لا</div>

export const boolDropDownFilter = (filter, onChange) => (
  // eslint-disable-next-line jsx-a11y/no-onchange
  <select
    onChange={event => onChange(event.target.value)}
    style={{ width: '100%' }}
    value={filter ? filter.value : 'all'}
  >
    <option value="all" />
    <option value="true">نعم</option>
    <option value="false">لا</option>
  </select>
)

export const boolFilterMethod = (filter, row) => {
  if (filter.value === 'all') {
    return true
  }
  if (filter.value === 'true') {
    return row[filter.id] === true
  }
  return row[filter.id] === false
}
