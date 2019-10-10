import React, { useContext } from "react"
import { Wrapper, PageLink } from "presentations"
import { ThemeContext } from "context/theme-context"

export default () => {
  const context = useContext(ThemeContext)

  return (
    <Wrapper
      background="none"
      row
      width="100%"
      height={context.scale.navBarHeight}
      padding={context.scale.navPadding}
      align="center"
    >
      <PageLink
        margin={context.scale.navLinkMargin}
        to="/"
        color={context.theme.linkColor}
        fontWeight={context.theme.linkWeight}
        fontSize={context.scale.navLink}
      >
        Home
      </PageLink>
      <PageLink
        margin={context.scale.navLinkMargin}
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
