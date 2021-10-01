import { useCallback, useState } from "react"

const useToggle = (initialToggleValue ) => {
  const [value , setToggleValue] = useState(initialToggleValue);
  const toggle = useCallback(() => {
    setToggleValue(value => !value)
  }, [])
  return [value, toggle ]
}

export { useToggle }; 