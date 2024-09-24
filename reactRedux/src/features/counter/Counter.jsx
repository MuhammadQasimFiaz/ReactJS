import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from './counterSlice'

function Counter() {
  const count = useSelector((state) => state.counter.count)
  const themeTextColor = useSelector((state) => state.theme.color)
  const dispatch = useDispatch()
  return (
    <div className='counter'>
      <button className='button div1' aria-label='decrement value' onClick={() => { dispatch(decrement()) }}>-</button>
      <span className='value div2' style={{color: themeTextColor}}>counter: {count}</span>
      <button className='button div3' aria-label='increment value' onClick={() => { dispatch(increment()) }}>+</button>
      <button className='button div4' aria-label='' onClick={() => { dispatch(incrementByAmount(10)) }}>increment by 10</button>
    </div>
  )
}

export default Counter
