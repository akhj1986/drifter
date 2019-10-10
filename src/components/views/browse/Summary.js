import React, { useContext } from "react"
import { Wrapper, Header3, Header4, PageLink } from "presentations"
import { ThemeContext } from "context/theme-context"

export default props => {
  const context = useContext(ThemeContext)
  return (
    <PageLink to={`/browse/${props.slug}`}>
      <Wrapper
        background={props.background}
        color={props.color}
        width={props.width}
        padding={props.padding}
        margin={props.margin}
      >
        <Header3 margin="0 0 5px" fontSize={context.scale.header3}>
          {props.title}
        </Header3>
        <Header3 margin="0 0 5px" fontSize={context.scale.infoText} italic>
          {props.author}
        </Header3>
        <Header4 fontSize={context.scale.smallInfo} margin="0 0 5px">
          {props.date}
        </Header4>
      </Wrapper>
    </PageLink>
  )
}
