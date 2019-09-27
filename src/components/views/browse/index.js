import React, { useContext, useState } from "react"
import { Wrapper } from "../../../presentations"
import { ThemeContext } from "../../../context/theme-context"
import Summary from "./Summary"
import SearchForm from "./SearchForm"
import articles from "../../../data/articles.json"

export default () => {
  const context = useContext(ThemeContext)
  const [searchTerm, setSearchTerm] = useState("")
  const [result, setResult] = useState(undefined)

  const handleChange = e => {
    const { value } = e.target
    setSearchTerm(value)
  }

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
  }

  return (
    <Wrapper
      margin="50px 0 0"
      padding="0 50px"
      smallBreakPadding="0 80px"
      background={context.theme.background}
      color={context.theme.text}
    >
      <SearchForm
        name="search"
        onChange={handleChange}
        onSubmit={handleSubmit}
        placeholder="Search by author or title"
        value={searchTerm}
      ></SearchForm>
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
    </Wrapper>
  )
}
