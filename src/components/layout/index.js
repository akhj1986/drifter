import React, { useState } from "react"
import { Wrapper } from "../../presentations"
import Header from "./Header.js"
import Footer from "./Footer.js"
import { ThemeContext, themes } from "../../presentations/theme-context"

export default ({ children }) => {
  const [theme, setTheme] = useState(themes.light)

  const toggleTheme = () => {
    console.log(themeValues)
    setTheme(theme === themes.dark ? themes.light : themes.dark)
  }
  const themeValues = {
    theme,
    toggleTheme
  }

  return (
    <ThemeContext.Provider value={themeValues}>
      <Wrapper
        minHeight="100vh"
        justify="space-between"
        maxWidth="100%"
        fontFamily="'Darker Grotesque', sans-serif"
        color={theme.text}
        spacing="2px"
        background={theme.background}
      >
        <Header />
        {children}
        <Footer />
      </Wrapper>
    </ThemeContext.Provider>
  )
}
