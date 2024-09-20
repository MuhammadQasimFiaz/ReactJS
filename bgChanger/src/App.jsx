import { useState } from 'react'
import Button from './components/Button'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-xl">
          {/* <button onClick={ () => setColor("red") } className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "red" }} >Red</button> */}
          {/* <button onClick={ (e) => setColor(e.target.style.backgroundColor) } className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "green" }} >Green</button> */}
          {/* <button onClick={ () => setColor("blue") } className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "blue" }} >Blue</button> */}
          {/* <button onClick={ (e) => setColor(e.target.style.backgroundColor) } className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "yellow" }} >Yellow</button> */}
          <Button color="red" onClick={(e) => setColor(e.target.style.backgroundColor)} />
          <Button color="green" onClick={(e) => setColor(e.target.style.backgroundColor)} />
          <Button color="blue" onClick={(e) => setColor(e.target.style.backgroundColor)} />
          <Button color="black" onClick={(e) => setColor(e.target.style.backgroundColor)} />
          <Button color="yellow" onClick={(e) => setColor(e.target.style.backgroundColor)} />
        </div>
      </div>
    </div>
  )
}

export default App
