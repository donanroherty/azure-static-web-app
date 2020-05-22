import React, { useState, FormEvent, ChangeEvent } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [message, setMessage] = useState('')
  const [designId, setDesignId] = useState('')
  const [designResults, setDesignResults] = useState<any[]>([])

  const updateTime = async () => {
    try {
      const res = await fetch('/api/message')
      const { text } = await res.json()
      setMessage(text)
    } catch (error) {
      console.error(error)
    }
  }

  const fetchDesignData = async (id: string) => {
    try {
      const res = await fetch(`/api/GetDesignData?id=${id}`)
      const json = await res.json()
      console.log(json)
      setDesignResults(json)
    } catch (error) {
      console.error(error)
    }
  }

  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDesignId(e.target.value)
  }

  const submitForm = (e: FormEvent) => {
    e.preventDefault()
    fetchDesignData(designId)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {message && message}

        <button onClick={updateTime}>Get server time</button>

        <div style={{ padding: '10px', fontSize: '12px' }}>
          {designResults.map((dr, i) => (
            <div key={`${dr.id}`} style={{ padding: '10px', fontSize: '12px' }}>
              <div>Branch: {dr.branch}</div>
              <div>Designer: {dr.designer}</div>
              <div>Id: {dr.id}</div>
              <div>Name: {dr.name}</div>
            </div>
          ))}
        </div>

        <form onSubmit={submitForm} method="get">
          <label style={{ fontSize: '16px' }}>
            Design Id:
            <input
              type="text"
              name="design id"
              value={designId}
              onChange={handleFormChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </header>
    </div>
  )
}

export default App
