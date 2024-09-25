import { useSelector } from "react-redux"
function Coin() {
  const count = useSelector((state) => state.counter.count)
  const themeTextColor = useSelector((state) => state.theme.color)
  return (
    <div className="flex justify-center bg-gray-300 m-auto p-2 rounded-lg w-fit">
      <span className='value' style={{color: themeTextColor}}>coin: {count}</span>
    </div>
  )
}

export default Coin
