import { useCalculate } from "../context/calculateContext"

function Buttons({className, value, name, onClick}) {
  const {handleClick} = useCalculate()
  return (
    <>
      {/* onClick checking if the onClick function is passed then use it otherwise use hndleClick function */}
      <button className={className} name={name} onClick={onClick ? onClick : handleClick}>{value}</button>
    </>
  )
}

export default Buttons
