import React, { useState } from 'react'
import './app.css'

function App() {
  const [value, setValue] = useState(1)

  console.log('hello from react')
  return (
    <div className="app">
      <h1 className="title">AuctionGate.io</h1>
      <h3>Simple example:</h3>
      <p>VIN code: {value}</p>
      <p>2HGFA16527H500037</p>
      <button onClick={() => setValue(prev => prev + 1)}>click</button>
    </div>
  )
}

export default App
