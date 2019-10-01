import React, { useContext } from "react"
import { Wrapper, Header2, Paragraph } from "../../../presentations"
import { ThemeContext } from "../../../context/theme-context"
import Summary from "../browse/Summary"
import articles from "../../../data/articles.json"
import info from "../../../data/information.json"

export default () => {
  const context = useContext(ThemeContext)
  return (
    <>
      <Wrapper
        padding={context.scale.outerPadding}
        margin="0 0 50px"
        background={context.theme.background}
        color={context.theme.text}
      >
        <Paragraph
          fontSize={context.scale.infoText}
          // italic
          lineHeight={context.scale.lineHeight}
          margin="0"
        >
          {info.about}
        </Paragraph>
      </Wrapper>
      <Wrapper
        background={context.theme.background}
        padding={context.scale.outerPadding}
      >
        <Header2
          fontSize={context.scale.header2}
          margin="0 0 30px"
          fontFamily="'Cinzel', serif"
          fontWeight="600"
        >
          Featured...
        </Header2>
        {articles.pages
          .filter(p => p.slug === "paralysisanddiscontent")
          .map(a => {
            return (
              <Summary
                width="100vw"
                margin="0 0 30px"
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
