import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from './counterSlice'
import { useState } from 'react'

function Counter() {
  const count = useSelector((state) => state.counter.count)
  const themeTextColor = useSelector((state) => state.theme.color)
  const [incrementBy, setIncrementBy] = useState(0)
  const dispatch = useDispatch()
  return (
    <div className='flex justify-center items-center m-auto rounded-xl p-8 mb-4 w-[50%] border-2 border-black' style={{backgroundColor: themeTextColor}}>
      <button className='rounded-lg bg-black text-white p-2 m-4' aria-label='decrement value' onClick={() => { dispatch(decrement()) }}>-</button>
      <span className='text-3xl'>counter: {count}</span>
      <button className='rounded-lg bg-black text-white p-2 m-4' aria-label='increment value' onClick={() => { dispatch(increment()) }}>+</button>
      <input className='border-2 border-black w-fit p-2' type="number" value={incrementBy} onChange={(e) => setIncrementBy(e.target.value)} />
      <button className='rounded-lg bg-black text-white p-2 m-4' aria-label='' onClick={() => { dispatch(incrementByAmount(parseInt(incrementBy))) }}>increment</button>
    </div>
  )
}

export default Counter
