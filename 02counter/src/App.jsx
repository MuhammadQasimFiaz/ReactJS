import { useState } from 'react'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(0)

  const addValue = () => {
    if (counter < 20 ) {
      setCounter(counter+1)
    }
  }
  const subValue = () => {
    if (counter > 0) setCounter(counter-1)
  }

  return (
    <>
      <h1>hello world</h1>
      <h2>counter value: {counter}</h2>

      <button onClick={addValue}>increment value</button>
      <br />
      <button onClick={subValue}>decrement value</button>
    </>
  )
}

export default App
