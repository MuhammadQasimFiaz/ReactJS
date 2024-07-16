import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from './counterSlice'

function Counter() {
  const count = useSelector((state) => state.counter.count)
  const themeTextColor = useSelector((state) => state.theme.color)
  const dispatch = useDispatch()
  return (
    <div>
      <button className='button' aria-label='increment value' onClick={() => { dispatch(increment()) }}>+</button>
      <span className='value' style={{color: themeTextColor}}>counter: {count}</span>
      <button className='button' aria-label='decrement value' onClick={() => { dispatch(decrement()) }}>-</button>
      <button className='button' aria-label='' onClick={() => { dispatch(incrementByAmount(10)) }}>increment by 10</button>
    </div>
  )
}

export default Counter
