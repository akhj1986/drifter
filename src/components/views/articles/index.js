import React, { useEffect, useState } from "react"
import Display from "./Display"
import Error from "../../Error"
import data from "../../../data/articles.json"

export default props => {
  const [article, setArticle] = useState({
    title: "",
    author: "",
    genre: "",
    publishDate: "",
    paragraphs: []
  })

  useEffect(() => {
    const current = data.pages.find(page => page.slug === props.match.params.id)
    setArticle(current)
  }, [props])

  return (
    <>
      {article && article.title ? (
        <Display
          title={article.title}
          author={article.author}
          paragraphs={article.paragraphs}
        ></Display>
      ) : (
        <Error></Error>
      )}
    </>
  )
}
