import React from 'react'
import {
  fireEvent,
  // logRoles,
  render,
  screen,
} from '@testing-library/react'
import App from './App'

test('button has correct initial color', () => {
  // const { container } =
  render(<App />)
  // logRoles(container)
  const colorButton = screen.getByRole('button', { name: 'Change to blue' })

  expect(colorButton).toHaveStyle({ 'background-color': 'red' })

  fireEvent.click(colorButton)

  expect(colorButton).toHaveStyle({ 'background-color': 'blue' })

  expect(colorButton).toHaveTextContent('Change to red')
})

test('initial conditions', () => {
  render(<App />)

  const colorButton = screen.getByRole('button', { name: 'Change to blue' })
  expect(colorButton).toBeEnabled()

  const checkBox = screen.getByRole('checkbox')
  expect(checkBox).not.toBeChecked()
})
