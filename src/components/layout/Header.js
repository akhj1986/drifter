import React, { useContext } from "react"
import {
  Wrapper,
  Header1,
  Header3,
  MyButton,
  SunIcon,
  MoonIcon
} from "../../presentations"
import { ThemeContext } from "../../context/theme-context"
import NavBar from "./NavBar"

export default () => {
  const context = useContext(ThemeContext)

  return (
    <Wrapper
      height={context.scale.headerHeight}
      justify="space-between"
      background={context.theme.header}
      margin={context.scale.headerMargin}
    >
      {/* The following Wrapper contains the theme and scale option buttons------------------------ */}
      <Wrapper
        background={context.theme.header}
        position="absolute"
        justify="space-between"
        align="center"
        row
        top={context.scale.headerButtons.offsetTop}
        right={context.scale.headerButtons.offsetRight}
        width={context.scale.headerButtons.containerWidth}
        spacing="2px"
        height="25px"
      >
        <Wrapper
          background={context.theme.header}
          row
          align="baseline"
          width="auto"
        >
          {context.scale.screenType !== "mobile" ? (
            <Header3
              margin="0"
              padding="0"
              fontSize="13px"
              color={context.theme.siteTitle}
            >
              Contrast:
            </Header3>
          ) : null}
          <MyButton
            onClick={context.toggleTheme}
            background="#000"
            width="20px"
            height="20px"
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
        <Wrapper
          background={context.theme.header}
          row
          align="baseline"
          width="auto"
        >
          {console.log("ScreenType", context.scale.screenType)}
          {context.scale.screenType !== "mobile" ? (
            <Header3
              margin="0"
              padding="0"
              fontSize="13px"
              color={context.theme.siteTitle}
            >
              Text:
            </Header3>
          ) : null}
          <MyButton
            onClick={context.plusScale}
            width="24px"
            height="24px"
            fontSize="16px"
            fontWeight="700"
            margin="0 0 0 2px"
            background={context.theme.header}
            color={context.theme.siteTitle}
          >
            A+
          </MyButton>
          <MyButton
            onClick={context.minusScale}
            width="20px"
            height="20px"
            fontSize="14px"
            fontWeight="700"
            margin="0 0 0 0"
            background={context.theme.header}
            color={context.theme.siteTitle}
          >
            A-
          </MyButton>
        </Wrapper>
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
