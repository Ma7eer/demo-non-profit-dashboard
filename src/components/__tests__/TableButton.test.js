import '@testing-library/react/cleanup-after-each'
import React from 'react'
import { render } from '@testing-library/react'
import TableButtons from '../TableButtons'

test('TableButtons renders if no props given', () => {
  const { container } = render(<TableButtons />)
  expect(container.firstChild).toMatchSnapshot()
})

test('TableButtons renders only edit button', () => {
  const { container } = render(<TableButtons showDelete={false} />)
  expect(container.firstChild).toMatchSnapshot()
})

test('TableButtons renders only delete button', () => {
  const { container } = render(<TableButtons showEdit={false} />)
  expect(container.firstChild).toMatchSnapshot()
})
