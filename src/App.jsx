import { useState } from 'react'
 import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1 className="text-4xl font-bold text-red-500">Hello World!</h1>
    </div>
  )
}

export default App
