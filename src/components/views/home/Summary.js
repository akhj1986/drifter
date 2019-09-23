import React from "react"
import { Wrapper, Header3, Header4, PageLink } from "../../../presentations"

export default props => {
  return (
    <PageLink to={props.slug}>
      <Wrapper
        align="flex-start"
        background={props.background}
        color={props.color}
        width="100vw"
        padding="30px 50px"
        margin="0 0 1px"
        smallBreakPadding="30px 80px"
      >
        <Header3 margin="0 0 5px">{props.title}</Header3>
        <Header3 margin="0 0 5px" fontSize="14px" italic>
          {props.author}
        </Header3>
        <Header4 fontSize="10px" margin="0 0 5px">
          {props.date}
        </Header4>
      </Wrapper>
    </PageLink>
  )
}
