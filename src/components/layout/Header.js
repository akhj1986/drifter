import React, { useContext } from "react"
import {
  Wrapper,
  Header1,
  Header3,
  MyButton,
  SunIcon,
  MoonIcon
} from "presentations"
import { ThemeContext } from "context/theme-context"
import NavBar from "./NavBar"

export default () => {
  const context = useContext(ThemeContext)

  return (
    <Wrapper
      height={context.scale.headerHeight}
      justify="space-between"
      background={context.theme.header}
      // background={`linear-gradient(180deg, ${context.theme.header} 20%, rgba(255,255,255,1) 100%)`}
      margin={context.scale.headerMargin}
    >
      {/* The following Wrapper contains the theme and scale option buttons------------------------ */}
      <Wrapper
        background="none"
        position="absolute"
        justify="space-between"
        align="center"
        row
        top={context.scale.headerButtons.offsetTop}
        right={context.scale.headerButtons.offsetRight}
        width={context.scale.headerButtons.containerWidth}
        spacing="2px"
      >
        <MyButton
          onClick={context.toggleTheme}
          background={context.theme.themeButtonColor}
          width={context.scale.headerButtons.buttonSize}
          height={context.scale.headerButtons.buttonSize}
          borderRadius="50%"
          border="none"
          margin="0 0 0 2px"
          color="yellow"
        >
          {context.theme.name === "dark" ? (
            <SunIcon></SunIcon>
          ) : (
            <MoonIcon></MoonIcon>
          )}
        </MyButton>
      </Wrapper>
      {/* Here ends the button section and below is simply the title of the site and the rendering of the NavBar component */}
      <Header1
        color={context.theme.siteTitle}
        opacity=".8"
        margin={context.scale.titleMargin}
        fontFamily="'Cinzel', serif"
        fontSize={context.scale.siteTitleFontSize}
        spacing="2px"
      >
        The Drifter
      </Header1>
      <NavBar></NavBar>
    </Wrapper>
  )
}
