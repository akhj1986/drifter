import React, { useContext } from "react"
import { Wrapper, PageLink, Header2, Header3 } from "../../../presentations"
import { ThemeContext } from "../../../presentations/theme-context"
import articles from "../../../data/articles.json"

export default () => {
  const context = useContext(ThemeContext)
  return (
    <Wrapper
      align="flex-start"
      padding="0 50px"
      smallBreakPadding="0 80px"
      background={context.theme.background}
      color={context.theme.text}
    >
      {articles.pages.map(page => (
        <PageLink
          key={page.title + page.author}
          to={`/browse/${page.slug}`}
          font="14px"
          margin="0 0 10px"
        >
          <Header2 margin="5" fontSize="18px">
            {page.title}
          </Header2>
          <Header3 fontSize="15px">{page.author}</Header3>
        </PageLink>
      ))}
    </Wrapper>
  )
}
