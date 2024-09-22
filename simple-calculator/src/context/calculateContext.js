import { createContext, useContext } from "react";

export const calculateContext = createContext({
  display: "",
  handleClick: () => {},
  clear: () => {},
  backSpace: () => {}
})

export const useCalculate = () => {
  return useContext(calculateContext)
}

export const CalculateProvider = calculateContext.Provider