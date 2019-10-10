import React, { useContext } from "react"
import { Wrapper, Header3 } from "presentations"
import { ThemeContext } from "context/theme-context"

export default () => {
  const context = useContext(ThemeContext)
  return (
    <Wrapper
      position="absolute"
      bottom="0"
      row
      justify="center"
      align="center"
      height="35px"
      background={context.theme.footer}
      padding={context.scale.outerPadding}
    >
      <Header3
        fontSize={context.scale.footerText}
        margin="0 10px 0 0"
        opacity={context.theme.transluscent ? "0.7" : "1"}
        color={context.theme.footerText}
      >
        Alex Harris-Jedamski
      </Header3>
      <Header3
        fontSize={context.scale.footerText}
        margin="0"
        opacity={context.theme.transluscent ? "0.7" : "1"}
        color={context.theme.footerText}
      >
        &copy;2019
      </Header3>
    </Wrapper>
  )
}
