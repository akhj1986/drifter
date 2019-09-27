import styled from "styled-components"
import { device } from "./breakpoints"

export default styled.h1`
  font-size: ${props => (props.fontSize ? props.fontSize : "35px")};
  font-style: ${props => (props.italic ? "italic" : "normal")};
  letter-spacing: ${props => (props.spacing ? props.spacing : "inherit")};
  margin: ${props => (props.margin ? props.margin : "0 0 30px")};
  padding: ${props => (props.padding ? props.padding : "0")};
  color: ${props => (props.color ? props.color : "inherit")};
  opacity: ${props => (props.opacity ? props.opacity : "0")};
  font-family: ${props => (props.fontFamily ? props.fontFamily : "inherit")};
  /* Media queries */
  @media ${device.smallBreak} {
    margin: ${props =>
      props.smallBreakMargin ? props.smallBreakMargin : null};
  }
`
