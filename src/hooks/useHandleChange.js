import { useState } from "react"

export function useHandleChange(initialValue) {
  const [value, setValue] = useState(initialValue)

  return [value, e => setValue(e.target.value), () => setValue("")]
}
