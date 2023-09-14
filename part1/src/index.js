import React from 'react'
import { createRoot } from 'react-dom/client'

const App = () => {
  const now = new Date()
  const a = 10
  const b = 20

  return (
    <div>
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
    </div>
  )
}


createRoot(document.getElementById('root')).render(<App />)