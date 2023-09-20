import React from 'react'
import { createRoot } from 'react-dom/client'

const Hello = (props) => {
  return (
    <div>
      <h3>Hola mundo{props.name} </h3>
    </div>
  )
}
const App = () => {
  return (
    <div>
      <h1>Saluditos</h1>
      <Hello name="Manolo" />
      <Hello name="Benito" />
    </div >
  )
}


createRoot(document.getElementById('root')).render(<App />)