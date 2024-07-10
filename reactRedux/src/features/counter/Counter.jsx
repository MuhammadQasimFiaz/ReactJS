import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './counterSlice'

function Counter() {
  const count = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()
  return (
    <div>
      <button className='button' aria-label='increment value' onClick={() => { dispatch(increment()) }}>+</button>
      <span className='value'>counter: {count}</span>
      <button className='button' aria-label='decrement value' onClick={() => { dispatch(decrement()) }}>-</button>
    </div>
  )
}

export default Counter
