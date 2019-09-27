import React, { useState, useEffect } from "react"
import { Wrapper } from "../../presentations"
import Header from "./Header.js"
import Footer from "./Footer.js"
import { ThemeContext, themes, scales } from "../../context/theme-context"
import { useWindowWidth } from "../../hooks/useWindowWidth"

export default ({ children }) => {
  //ThemeContext related-------------------------------------
  const [theme, setTheme] = useState(themes.light)
  const [scale, setScale] = useState(scales.regularMobile)
  const [scaleValue, setScaleValue] = useState(0)

  const width = useWindowWidth()

  useEffect(() => {
    console.log(width)
  }, [width])

  //----Effects and functions for ThemeContext---------------------------------------------------------------
  useEffect(() => {
    const mobile = width < 768
    setScale(() => {
      if (scaleValue === 0 && mobile) {
        return scales.regularMobile
      }
      if (scaleValue === 1 && mobile) {
        return scales.largeMobile
      }
      if (scaleValue === 2 && mobile) {
        return scales.extraLargeMobile
      }
      if (scaleValue === 0 && !mobile) {
        return scales.regularLargeScreen
      }
      if (scaleValue === 1 && !mobile) {
        return scales.largeLargeScreen
      }
      if (scaleValue === 2 && !mobile) {
        return scales.extraLargeLargeScreen
      }
    })
  }, [scaleValue, width])

  const toggleTheme = () => {
    console.log(themeValues)
    setTheme(theme === themes.dark ? themes.light : themes.dark)
  }

  const plusScale = () => {
    setScaleValue(scaleValue < 2 ? scaleValue + 1 : scaleValue)
  }

  const minusScale = () => {
    setScaleValue(scaleValue > 0 ? scaleValue - 1 : scaleValue)
  }

  const themeValues = {
    theme,
    toggleTheme,
    scale,
    plusScale,
    minusScale
  }

  return (
    <ThemeContext.Provider value={themeValues}>
      <Wrapper
        minHeight="100vh"
        position="relative"
        maxWidth="100%"
        fontFamily="'Darker Grotesque', sans-serif"
        color={theme.text}
        spacing={scale.spacing}
        background={theme.background}
        fontSize={scale.fontSize}
      >
        <Header />
        <Wrapper padding="0 0 35px" background={theme.background}>
          {children}
        </Wrapper>
        <Footer />
      </Wrapper>
    </ThemeContext.Provider>
  )
}
