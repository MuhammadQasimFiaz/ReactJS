import { useCalculate } from "../context/calculateContext"

function Buttons({className, value, name}) {
  const {handleClick} = useCalculate()
  return (
    <>
      <button className={className} name={name} onClick={handleClick}>{value}</button>
    </>
  )
}

export default Buttons
