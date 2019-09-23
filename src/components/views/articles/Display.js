import React, { useContext } from "react"
import { Wrapper, Paragraph, Header2, Header3 } from "../../../presentations"
import { ThemeContext } from "../../../presentations/theme-context"

export default ({ title, author, paragraphs }) => {
  const context = useContext(ThemeContext)
  return (
    <Wrapper
      margin="50px 0 0"
      padding="0 50px"
      align="flex-start"
      smallBreakPadding="0 80px"
      background={context.theme.background}
      color={context.theme.text}
    >
      <Header2 margin="0 0 15px" italic>
        {title}
      </Header2>
      <Header3 fontSize="15px">{author}</Header3>
      <Wrapper
        align="flex-start"
        background={context.theme.background}
        color={context.theme.text}
      >
        {paragraphs.map((p, i) => (
          <Paragraph key={i}>{p}</Paragraph>
        ))}
      </Wrapper>
    </Wrapper>
  )
}
