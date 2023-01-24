import React from 'react'
import { logRoles, render, screen } from '@testing-library/react'
import App from './App'

test('button has correct initial color', () => {
  const { container } = render(<App />)
  logRoles(container)
  const colorButton = screen.getByRole('button', { name: 'Change to blue' })

  expect(colorButton).toHaveStyle({ 'background-color': 'red' })
})

test('button has correct initial text', () => {})

test('button turns blue when clicked', () => {})
