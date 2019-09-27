import React, { useContext } from "react"
import { Wrapper, PageLink } from "../../presentations"
import { ThemeContext } from "../../context/theme-context"

export default () => {
  const context = useContext(ThemeContext)

  return (
    <Wrapper
      background={context.theme.nav}
      row
      width="100%"
      height="31px"
      padding="10px 0 10px 50px"
      smallBreakPadding="10px 0 10px 80px"
    >
      <PageLink
        margin="0 20px 0 0"
        to="/"
        color={context.theme.linkColor}
        fontWeight={context.theme.linkWeight}
        fontSize={context.scale.navLink}
      >
        Home
      </PageLink>
      <PageLink
        margin="0 20px 0 0"
        to="/browse"
        color={context.theme.linkColor}
        fontWeight={context.theme.linkWeight}
        fontSize={context.scale.navLink}
      >
        Browse
      </PageLink>
      <PageLink
        to="/contact"
        color={context.theme.linkColor}
        fontWeight={context.theme.linkWeight}
        fontSize={context.scale.navLink}
      >
        Contribute
      </PageLink>
    </Wrapper>
  )
}
