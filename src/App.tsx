import React, { useState, ChangeEvent } from 'react'
import './App.css'

function App() {
  const [buttonColor, setButtonColor] = useState('red')
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red'
  const [disabled, setDisabled] = useState(false)

  return (
    <div>
      <button
        style={{ backgroundColor: buttonColor }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={disabled}
      >
        Change to {newButtonColor}
      </button>
      <br />
      <input
        type="checkbox"
        id="disable-button-checkbox"
        onChange={(e: ChangeEvent<HTMLInputElement>) => setDisabled(e.target.checked)}
      />
    </div>
  )
}
export default App
