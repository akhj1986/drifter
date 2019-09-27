import { useState, useEffect } from "react"

export function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth)
    })
    return () => {
      window.removeEventListener("resize")
    }
  }, [])

  return windowWidth
}
