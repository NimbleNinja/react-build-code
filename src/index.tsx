import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const rootElement = document.createElement('div')
rootElement.id = 'r_o_o_t'
document.body.prepend(rootElement)

const root = ReactDOM.createRoot(document.getElementById('r_o_o_t') as HTMLElement)
root.render(<App />)
