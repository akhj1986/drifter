import React from "react"
import { Header2, Paragraph, Wrapper } from "../../../presentations"

export default () => {
  return (
    <Wrapper
      padding="0 50px"
      smallBreakPadding="0 80px"
      align="flex-start"
      justify="flex-start"
    >
      <Header2>Contact</Header2>
      <Paragraph>
        If you would like to be published on Drifter, please email your work to{" "}
        <a href="mailto: example@drifter.com">example@drifter.com</a>. Work
        should either be sent as a simple email, or as a pdf attachment. Please
        include author name and title and ensure there are breaks between
        paragraphs.
      </Paragraph>
    </Wrapper>
  )
}
