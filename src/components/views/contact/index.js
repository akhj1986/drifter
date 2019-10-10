import React, { useContext } from "react"
import { Header2, Paragraph, Wrapper, Anchor } from "presentations"
import { ThemeContext } from "context/theme-context"
import info from "data/information.json"

export default () => {
  const context = useContext(ThemeContext)
  return (
    <Wrapper
      padding={context.scale.outerPadding}
      background={context.theme.background}
      color={context.theme.text}
    >
      <Header2 margin="0 0 30px" fontSize={context.scale.header2}>
        Contribute
      </Header2>
      <Paragraph lineHeight={context.scale.lineHeight}>{info.about}</Paragraph>
      <Paragraph lineHeight={context.scale.lineHeight}>
        If you would like to be published on Drifter, please email your work to{" "}
        <Anchor
          href="mailto: example@drifter.com"
          decoration="underline"
          color={context.theme.aTagColor}
        >
          example@drifter.com
        </Anchor>
        . Work should either be sent as a simple email, or as a pdf attachment.
        Please include author name and title and ensure there are breaks between
        paragraphs.
      </Paragraph>
    </Wrapper>
  )
}
