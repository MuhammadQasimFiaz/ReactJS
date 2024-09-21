function Buttons({className, value, name, handleClick}) {
  return (
    <>
      <button className={className} name={name} onClick={handleClick}>{value}</button>
    </>
  )
}

export default Buttons
