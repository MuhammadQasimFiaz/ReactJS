import { useState } from "react";
import DisplayButtons from "./components/DisplayButtons";
import DisplayResult from "./components/DisplayResult";
import { CalculateProvider } from "./context/calculateContext";

const App = () => {
  const [display, setDisplay] = useState("")

  const handleClick = (e) => {
    const clickValue = e.target.name

    if (display === "Error" || display === "Infinity") {
      setDisplay(clickValue)
    } else if(['+','-','*','/','%'].includes(clickValue)) {
      if(['+','-','*','/','%'].includes(display.slice(-1))) {
        // console.log(display.slice(0, -1) + clickValue)
        setDisplay(display.slice(0, -1) + clickValue)
      } else {
        setDisplay(display + clickValue)
      }
    } else if(clickValue === '=') {
      calculateResult()
    } else {
      setDisplay(display + clickValue)
    }
  }

  const calculateResult = ()=> {
    try {
      const evalResult = eval(display)
      setDisplay(evalResult.toString())
    } catch {
      setDisplay("Error")
    }
  }

  const clear = () => {
    setDisplay("")
  }

  const backSpace = () => {
    setDisplay(display.slice(0, -1))
  }

  return (
    <CalculateProvider value={{display, handleClick, clear, backSpace}}>
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-80">
          <DisplayResult />
          <DisplayButtons />
        </div>
      </div>
    </CalculateProvider>
  );
}

export default App;
