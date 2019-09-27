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
      height="150px"
      justify="space-between"
      background={context.theme.header}
    >
      <Wrapper
        background={context.theme.header}
        position="absolute"
        justify="space-between"
        align="center"
        row
        top="10px"
        right={context.theme.button.offset}
        width="200px"
        spacing="2px"
        height="25px"
      >
        <Wrapper background={context.theme.header} row align="center">
          <Header3
            margin="0"
            padding="0"
            fontSize="13px"
            color={context.theme.siteTitle}
          >
            Contrast:
          </Header3>
          <MyButton
            onClick={context.toggleTheme}
            background={context.theme.button.background}
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
        <Wrapper background={context.theme.header} row align="baseline">
          <Header3
            margin="0"
            padding="0"
            fontSize="13px"
            color={context.theme.siteTitle}
          >
            Text:
          </Header3>
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
      <Header1
        color={context.theme.siteTitle}
        opacity=".8"
        margin="60px 0 0 50px"
        fontFamily="'Cinzel', serif"
        fontSize="34px"
        smallBreakMargin="50px 0 0 80px"
        spacing="2px"
      >
        The Drifter
      </Header1>
      <NavBar></NavBar>
    </Wrapper>
  )
}
