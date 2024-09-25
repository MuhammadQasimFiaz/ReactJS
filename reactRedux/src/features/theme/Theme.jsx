import { useState } from "react"
import { useDispatch } from "react-redux"
import { changeTextColor, changeBg } from "./themeSlice"

function Theme() {
  const [color, setColor] = useState('#ebc8b3')
  const [bgColor, setBgColor] = useState('#8A6729')
  const dispatch = useDispatch()
  return (
    <>
      <div className="flex justify-center mt-10">
      <input className="border-2 border-black p-2" type="text" value={color} onChange={(e) => setColor(e.target.value)} placeholder="Add color"/>
      <button className="bg-black ml-2 text-white p-2" onClick={() => { dispatch(changeTextColor(color)) }}>change text color</button>
    </div>
    <div className="flex justify-center mt-5">
      <input className="border-2 border-black p-2" type="text" value={bgColor} onChange={(e) => setBgColor(e.target.value)} placeholder="Add color"/>
      <button className="bg-black ml-2 text-white p-2" onClick={() => { dispatch(changeBg(bgColor)) }}>change background color</button>
    </div>
    </>
  )
}

export default Theme
