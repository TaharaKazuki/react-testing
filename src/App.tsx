import React, { useState, ChangeEvent } from 'react'
import './App.css'

export const replaceCamelWithSpaces = (colorName: string) => {
  return colorName.replace(/\B([A-Z])\B/g, ' $1')
}

function App() {
  const [buttonColor, setButtonColor] = useState('red')
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red'
  const [disabled, setDisabled] = useState(false)

  return (
    <div>
      <button
        style={{ backgroundColor: disabled ? 'gray' : buttonColor }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={disabled}
      >
        Change to {newButtonColor}
      </button>
      <br />
      <input
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={disabled}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setDisabled(e.target.checked)}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  )
}
export default App
