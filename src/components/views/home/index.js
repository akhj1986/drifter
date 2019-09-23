import React, { useContext } from "react"
import { Wrapper, Header2, Paragraph } from "../../../presentations"
import { ThemeContext } from "../../../presentations/theme-context"
import Summary from "./Summary"
import articles from "../../../data/articles.json"
import info from "../../../data/information.json"

export default () => {
  const context = useContext(ThemeContext)
  return (
    <>
      <Wrapper
        padding="0 50px"
        align="flex-start"
        margin="30px 0 0"
        spacing="1px"
        smallBreakPadding="0 80px"
        background={context.theme.background}
        color={context.theme.text}
      >
        <Paragraph fontSize="14px" italic lineHeight="1.3rem" margin="0 0 30px">
          {info.about}
        </Paragraph>
      </Wrapper>
      <Wrapper
        align="flex-start"
        background={context.theme.homeArticlesHeading}
      >
        <Wrapper
          padding="30px 50px"
          align="flex-start"
          smallBreakPadding="30px 80px"
          color={context.theme.text}
        >
          <Header2 fontSize="24px" margin="0" fontFamily="'Cinzel', serif">
            Recent Works
          </Header2>
        </Wrapper>
        {articles.pages.map((a, i) => {
          return (
            <Summary
              title={a.title}
              author={a.author}
              slug={a.slug}
              date={a.publish}
              background={context.theme.background}
              color={context.theme.text}
              key={a.author + a.title + a.publish}
            ></Summary>
          )
        })}
      </Wrapper>
    </>
  )
}
