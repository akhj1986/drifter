import React, { useContext, useState } from "react"
import { Wrapper, Header2 } from "../../../presentations"
import { ThemeContext } from "../../../context/theme-context"
import { useHandleChange } from "../../../hooks/useHandleChange"
import Summary from "./Summary"
import SearchForm from "./SearchForm"
import articles from "../../../data/articles.json"

export default () => {
  const context = useContext(ThemeContext)
  const [result, setResult] = useState(undefined)
  const [hasSearched, setHasSearched] = useState(false)
  const [searchTerm, searchHandleChange] = useHandleChange("")

  //Function to handle search: Uses a regex test using the searchTerm and checks it against articles author names and titles, and then uses setResult to save the resulting filtered array
  const handleSubmit = e => {
    e.preventDefault()
    const match = new RegExp(searchTerm, "i")
    const results = articles.pages.filter(
      p => p.author.search(match) > -1 || p.title.search(match) > -1
    )
    if (results.length > 0) {
      setResult(results)
    } else {
      setResult("No results found")
    }
    console.log(result)
    setHasSearched(true)
  }

  return (
    <Wrapper
      padding={context.scale.outerPadding}
      background={context.theme.background}
      color={context.theme.text}
    >
      <SearchForm
        name="search"
        onChange={searchHandleChange}
        onSubmit={handleSubmit}
        placeholder={`${" "}Search by author or title`}
        value={searchTerm}
        height={context.scale.searchHeight}
        width={context.scale.searchWidth}
        margin={context.scale.headerMargin}
        searchButtonColor={context.theme.searchButtonColor.back}
        searchIconColor={context.theme.searchButtonColor.icon}
      ></SearchForm>
      {/* If there are results from the search this maps results onto Summary components which act as links to the articles. */}
      {Array.isArray(result)
        ? result.map((a, i) => {
            return (
              <Summary
                title={a.title}
                margin="0 0 30px"
                author={a.author}
                slug={a.slug}
                date={a.publish}
                background={context.theme.background}
                color={context.theme.text}
                key={a.author + a.title + a.publish}
              ></Summary>
            )
          })
        : result}
      {hasSearched ? null : (
        <Wrapper background={context.theme.background}>
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
      )}
    </Wrapper>
  )
}
