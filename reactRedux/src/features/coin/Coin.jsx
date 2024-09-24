import { useSelector } from "react-redux"
function Coin() {
  const count = useSelector((state) => state.counter.count)
  const themeTextColor = useSelector((state) => state.theme.color)
  return (
    <div className="coin">
      <span className='value' style={{color: themeTextColor}}>coin: {count}</span>
    </div>
  )
}

export default Coin
