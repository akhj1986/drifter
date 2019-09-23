import React, { useContext } from "react"
import {
  Wrapper,
  Header1,
  Header3,
  PageLink,
  MyButton,
  SunIcon,
  MoonIcon
} from "../../presentations"
import { ThemeContext } from "../../presentations/theme-context"

export default () => {
  const context = useContext(ThemeContext)

  return (
    <Wrapper
      height="150px"
      justify="space-between"
      align="flex-start"
      background={context.theme.header}
    >
      <Wrapper
        background={context.theme.header}
        position="absolute"
        top="10px"
        right={context.theme.button.offset}
        width="100px"
        height="50px"
        row
        justify="flex-start"
      >
        <Header3
          margin="0"
          padding="0"
          fontSize="12px"
          color={context.theme.siteTitle}
        >
          Contrast:
        </Header3>
        <MyButton
          onClick={context.toggleTheme}
          background={context.theme.button.background}
          width="18px"
          height="18px"
          borderRadius="9px"
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
      <Header1
        color={context.theme.siteTitle}
        opacity=".8"
        margin="50px 0 0 50px"
        fontFamily="'Cinzel', serif"
        fontSize="30px"
        smallBreakMargin="50px 0 0 80px"
      >
        The Drifter
      </Header1>

      <Wrapper
        background={context.theme.nav}
        row
        width="100%"
        justify="flex-start"
        padding="10px 0 10px 50px"
        smallBreakPadding="10px 0 10px 80px"
      >
        <PageLink
          margin="0 20px 0 0"
          to="/"
          color={context.theme.linkColor}
          fontWeight={context.theme.linkWeight}
        >
          Home
        </PageLink>
        <PageLink
          margin="0 20px 0 0"
          to="/browse"
          color={context.theme.linkColor}
          fontWeight={context.theme.linkWeight}
        >
          Articles
        </PageLink>
        <PageLink
          to="/contact"
          color={context.theme.linkColor}
          fontWeight={context.theme.linkWeight}
        >
          Get in touch
        </PageLink>
      </Wrapper>
    </Wrapper>
  )
}
