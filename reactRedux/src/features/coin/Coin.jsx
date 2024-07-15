import { useSelector } from "react-redux"
function Coin() {
  const count = useSelector((state) => state.counter.count)
  return (
    <div>
      <span className='value'>coin: {count}</span>
    </div>
  )
}

export default Coin
