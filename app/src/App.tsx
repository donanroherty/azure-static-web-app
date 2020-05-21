import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [message, setMessage] = useState('')

  const updateTime = async () => {
    try {
      const res = await fetch('/api/message')
      const { text } = await res.json()
      setMessage(text)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {message && message}
        <button onClick={updateTime}>Get server time</button>
      </header>
    </div>
  )
}

export default App
