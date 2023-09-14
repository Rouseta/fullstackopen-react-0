import React from 'react'
import { createRoot } from 'react-dom/client'

const Hello = () => {
  return (
    <div>
      <h3>Hola mundo</h3>
    </div>
  )
}
const App = () => {


  return (
    <div>
      <h1>Saluditos</h1>
      <Hello />
    </div >
  )
}


createRoot(document.getElementById('root')).render(<App />)