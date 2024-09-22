import { useCalculate } from "../context/calculateContext";
import Buttons from "./Buttons"
import { FaBackspace } from "react-icons/fa";

function DisplayButtons() {
  const {clear, backSpace} = useCalculate()
  return (
    <div className="grid grid-cols-4 gap-3">
      <button className="bg-gray-600 p-4 text-white text-xl rounded-md" onClick={backSpace}><FaBackspace /></button>
      <button className="bg-gray-600 p-4 text-white text-xl rounded-md" onClick={clear} >C</button>
      {/* <Buttons className="bg-gray-600 p-4 text-white text-xl rounded-md" name={"±"} value={"±"} /> */}
      <Buttons className="bg-gray-600 p-4 text-white text-xl rounded-md" name={"%"} value={"%"} />
      <Buttons className="bg-yellow-500 p-4 text-white text-xl rounded-md" name={"÷"} value={"÷"} />

      <Buttons className="bg-gray-600 p-4 text-white text-xl rounded-md" name={"7"} value={"7"} />
      <Buttons className="bg-gray-600 p-4 text-white text-xl rounded-md" name={"8"} value={"8"} />
      <Buttons className="bg-gray-600 p-4 text-white text-xl rounded-md" name={"9"} value={"9"} />
      <Buttons className="bg-yellow-500 p-4 text-white text-xl rounded-md" name={"×"} value={"×"} />

      <Buttons className="bg-gray-600 p-4 text-white text-xl rounded-md" name={"4"} value={"4"} />
      <Buttons className="bg-gray-600 p-4 text-white text-xl rounded-md" name={"5"} value={"5"} />
      <Buttons className="bg-gray-600 p-4 text-white text-xl rounded-md" name={"6"} value={"6"} />
      <Buttons className="bg-yellow-500 p-4 text-white text-xl rounded-md" name={"−"} value={"−"} />

      <Buttons className="bg-gray-600 p-4 text-white text-xl rounded-md" name={"1"} value={"1"} />
      <Buttons className="bg-gray-600 p-4 text-white text-xl rounded-md" name={"2"} value={"2"} />
      <Buttons className="bg-gray-600 p-4 text-white text-xl rounded-md" name={"3"} value={"3"} />
      <Buttons className="bg-yellow-500 p-4 text-white text-xl rounded-md" name={"+"} value={"+"} />
       
      <Buttons className="bg-gray-600 p-4 text-white text-xl rounded-md col-span-2" name={"0"} value={"0"} />
      <Buttons className="bg-gray-600 p-4 text-white text-xl rounded-md" name={"."} value={"."} />
      <Buttons className="bg-yellow-500 p-4 text-white text-xl rounded-md" name={"="} value={"="} />
    </div>
  )
}

export default DisplayButtons
