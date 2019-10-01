import React, { useContext } from "react"
import { Wrapper, Paragraph, Header2, Header3 } from "../../../presentations"
import { ThemeContext } from "../../../context/theme-context"

export default ({ title, author, paragraphs }) => {
  const context = useContext(ThemeContext)

  return (
    <Wrapper
      margin="50px 0 0"
      padding={context.scale.outerPadding}
      background={context.theme.background}
      color={context.theme.text}
    >
      <Header2 margin="0 0 15px" italic fontSize={context.scale.header2}>
        {title}
      </Header2>
      <Header3 fontSize={context.scale.header3}>{author}</Header3>
      <Wrapper background={context.theme.background} color={context.theme.text}>
        {paragraphs.map((p, i) => (
          <Paragraph key={i} lineHeight={context.scale.lineHeight}>
            {p}
          </Paragraph>
        ))}
      </Wrapper>
    </Wrapper>
  )
}
