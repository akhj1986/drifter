import React, { useState, useEffect } from "react"
import { Wrapper } from "../../presentations"
import Header from "./Header.js"
import Footer from "./Footer.js"
import { ThemeContext, themes, scales } from "../../context/theme-context"
import { useWindowWidth } from "../../hooks/useWindowWidth"

// This component provides most of the theming and scaling power of the website, including the Context.Provider and the functions for user interaction with theme and scale. This component provides the default color and font settings for the site through its Wrapper. It renders the Header and Footer of the website, and the rendered {children} are the site's different views (determined by react-router --- see App.js in the src directory)

export default ({ children }) => {
  //ThemeContext related-------------------------------------
  const [theme, setTheme] = useState(themes.light)
  const [scale, setScale] = useState(scales.regularMobile)
  const [scaleValue, setScaleValue] = useState(0)

  //Custom hook listens for window resizes and updates width to equal window-width
  const width = useWindowWidth()

  //----Effects and functions for ThemeContext---------------------------------------------------------------
  useEffect(() => {
    const screenTypeSetter = () => {
      if (width < 550) return "mobile"

      if (width < 768 && width >= 550) return "medium"

      if (width < 1200 && width >= 768) return "large"

      if (width >= 1200) return "extra-large"
    }
    const screenType = screenTypeSetter()
    setScale(() => {
      if (scaleValue === 0 && screenType === "mobile")
        return scales.regularMobile
      if (scaleValue === 1 && screenType === "mobile") return scales.largeMobile
      if (scaleValue === 2 && screenType === "mobile")
        return scales.extraLargeMobile
      if (scaleValue === 0 && screenType === "medium")
        return scales.regularMedium
      if (scaleValue === 1 && screenType === "medium") return scales.largeMedium
      if (scaleValue === 2 && screenType === "medium")
        return scales.extraLargeMedium
      if (scaleValue === 0 && screenType === "large")
        return scales.regularLargeScreen
      if (scaleValue === 1 && screenType === "large")
        return scales.largeLargeScreen
      if (scaleValue === 2 && screenType === "large")
        return scales.extraLargeLargeScreen
      if (scaleValue === 0 && screenType === "extra-large")
        return scales.regularExtraLargeScreen
      if (scaleValue === 1 && screenType === "extra-large")
        return scales.largeExtraLargeScreen
      if (scaleValue === 2 && screenType === "extra-large")
        return scales.extraLargeExtraLargeScreen
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
