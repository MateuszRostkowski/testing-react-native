import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import { Counter } from './components/Counter'

test('Render corectly', () => {
  const { toJSON } = render(<Counter />)

  expect(toJSON()).toMatchSnapshot()
})

test('Test counter', async () => {
  const { getByTestId } = render(<Counter />)
  const buttonText = getByTestId('buttonText')

  fireEvent.press(buttonText)
  expect(buttonText.props.children).toBe(1)
  fireEvent.press(buttonText)
  expect(buttonText.props.children).toBe(2)
})
