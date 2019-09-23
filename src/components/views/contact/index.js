import React, { useContext } from "react"
import { Header2, Paragraph, Wrapper, Anchor } from "../../../presentations"
import { ThemeContext } from "../../../presentations/theme-context"

export default () => {
  const context = useContext(ThemeContext)
  return (
    <Wrapper
      padding="0 50px"
      smallBreakPadding="0 80px"
      align="flex-start"
      justify="flex-start"
      background={context.theme.background}
      color={context.theme.text}
    >
      <Header2>Contact</Header2>
      <Paragraph>
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
