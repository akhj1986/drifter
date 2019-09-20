import React from "react"
import { Wrapper, Paragraph, Header2, Header3 } from "../../../presentations"

export default ({ title, author, paragraphs }) => {
  return (
    <Wrapper
      margin="50px 0 0"
      padding="0 50px"
      align="flex-start"
      smallBreakPadding="0 80px"
    >
      <Header2 margin="0 0 15px" italic>
        {title}
      </Header2>
      <Header3 fontSize="15px">{author}</Header3>
      <Wrapper align="flex-start">
        {paragraphs.map((p, i) => (
          <Paragraph key={i}>{p}</Paragraph>
        ))}
      </Wrapper>
    </Wrapper>
  )
}
