import { useState } from "react"
import { useDispatch } from "react-redux"
import { changeTextColor } from "./themeSlice"

function Theme() {
  const [color, setColor] = useState('white')
  const dispatch = useDispatch()
  return (
    <div className="flex justify-center mt-10">
      <input className="border-2 border-black p-2" type="text" value={color} onChange={(e) => setColor(e.target.value)} placeholder="Add color"/>
      <button className="bg-black ml-2 text-white p-2" onClick={() => { dispatch(changeTextColor(color)) }}>change text color</button>
    </div>
  )
}

export default Theme
