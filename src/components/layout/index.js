import React, { useState, useEffect } from "react"
import { Wrapper } from "presentations"
import Header from "./Header"
import Footer from "./Footer"
import LandingBanner from "./LandingBanner"
import { ThemeContext, themes, scales } from "context/theme-context"
import { useWindowWidth } from "hooks/useWindowWidth"

// This component provides most of the theming and scaling power of the website, including the Context.Provider and the functions for user interaction with theme and scale. This component provides the default color and font settings for the site through its Wrapper. It renders the Header and Footer of the website, and the rendered {children} are the site's different views (determined by react-router --- see App.js in the src directory)

export default ({ children }) => {
  //ThemeContext related-------------------------------------
  const [theme, setTheme] = useState(themes.light)
  const [scale, setScale] = useState(scales.mobile)
  const [scaleValue, setScaleValue] = useState(0)
  const [bannerState, setBannerState] = useState(true)
  const [bannerOpacity, setBannerOpacity] = useState("1")

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
      if (screenType === "mobile") return scales.mobile
      if (screenType === "medium") return scales.mediumScreen
      if (screenType === "large") return scales.largeScreen
      if (screenType === "extra-large") return scales.extraLargeScreen
    })
  }, [scaleValue, width])

  const toggleTheme = () => {
    console.log(themeValues)
    setTheme(theme === themes.dark ? themes.light : themes.dark)
  }

  const themeValues = {
    theme,
    toggleTheme,
    scale
  }

  const bannerClose = () => {
    setBannerOpacity("0")
    setTimeout(() => {
      setBannerState(false)
    }, 1200)
  }

  return (
    <ThemeContext.Provider value={themeValues}>
      {bannerState ? (
        <LandingBanner
          handleClick={bannerClose}
          opacity={bannerOpacity}
        ></LandingBanner>
      ) : null}
      <Wrapper
        minHeight="100vh"
        position="relative"
        maxWidth="100%"
        color={theme.text}
        spacing={scale.spacing}
        background={theme.background}
        fontSize={scale.fontSize}
        fontFamily="'Noto Serif SC', serif"
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
