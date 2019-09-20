import React, { useContext } from "react"
import { Wrapper, Header1, PageLink, MyButton } from "../../presentations"
import { ThemeContext } from "../../presentations/theme-context"

export default () => {
  const value = useContext(ThemeContext)

  const linkColor = value.theme.linkColor
  return (
    <Wrapper
      height="150px"
      justify="space-between"
      align="flex-start"
      background={value.theme.header}
    >
      <Header1
        color="#222"
        opacity=".8"
        margin="50px 0 0 50px"
        fontFamily="'Cinzel', serif"
        fontSize="40px"
        smallBreakMargin="50px 0 0 80px"
      >
        The Drifter
      </Header1>
      <Wrapper
        background={value.theme.nav}
        row
        width="100%"
        justify="flex-start"
        padding="10px 0 10px 50px"
        smallBreakPadding="10px 0 10px 80px"
      >
        <PageLink margin="0 20px 0 0" to="/" color={linkColor}>
          Home
        </PageLink>
        <PageLink margin="0 20px 0 0" to="/browse" color={linkColor}>
          Articles
        </PageLink>
        <PageLink to="/contact" color={linkColor}>
          Get in touch
        </PageLink>
        <MyButton
          onClick={value.toggleTheme}
          background={value.theme.button.background}
          width="15px"
          height="15px"
          borderRadius="7.5px"
          position="relative"
          left={value.theme.button.offset}
          margin="0 0 0 15px"
        ></MyButton>
      </Wrapper>
    </Wrapper>
  )
}
