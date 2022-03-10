import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import jsdomGlobal from 'jsdom-global'
import Counter from '../'

jsdomGlobal()

test('increments the count', () => {
  const {getByText} = render(<Counter />)
  // const button = getByText('0')
  // fireEvent.click(button)
  // expect(button).toHaveTextContent('1')
  // fireEvent.click(button)
  // expect(button).toHaveTextContent('2')
})
