import { useState } from 'react'
function Counter() {
  const [counter, setCounter] = useState(0)
  return (
    <div>
      <button className='button' aria-label='increment value' onClick={() => {setCounter(counter+1)}}>+</button>
      <span className='value'>counter: {counter}</span>
      <button className='button' aria-label='decrement value' onClick={() => {setCounter(counter-1)}}>-</button>
    </div>
  )
}

export default Counter
