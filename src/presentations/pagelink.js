import styled from "styled-components"
import React from "react"
import { Link } from "react-router-dom"

export default styled(props => <Link {...props} />)`
  font-size: ${props => (props.font ? props.font : "11px")};
  text-decoration: none;
  margin: ${props => (props.margin ? props.margin : "0")};
  color: ${props => (props.color ? props.color : "inherit")};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : "inherit")};
`
