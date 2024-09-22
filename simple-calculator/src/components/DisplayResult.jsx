import { useCalculate } from "../context/calculateContext"

function DisplayResult() {
  const {display} = useCalculate()
  return (
    <div className="mb-5">
      <input
            type="text"
            readOnly
            className="w-full p-4 text-4xl text-white bg-gray-900 rounded-md text-right"
            placeholder="0"
            value={display}
          />
    </div>
  )
}

export default DisplayResult
