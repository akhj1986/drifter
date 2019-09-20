import styled from "styled-components"
import { device } from "../presentations/breakpoints"

export default styled.div`
  background-color: ${props =>
    props.background ? props.background : "rgba(0,0,0,0)"};
  color: ${props => (props.color ? props.color : "inherit")};
  width: ${props => (props.width ? props.width : "100%")};
  max-width: ${props => (props.maxWidth ? props.maxWidth : "100vw")};
  margin: ${props => (props.margin ? props.margin : "0")};
  padding: ${props => (props.padding ? props.padding : "0")};
  height: ${props => (props.height ? props.height : "auto")};
  min-height: ${props => (props.minHeight ? props.minHeight : null)};
  display: flex;
  flex-direction: ${props => (props.row ? "row" : "column")};
  align-items: ${props => (props.align ? props.align : "center")};
  justify-content: ${props => (props.justify ? props.justify : "center")};
  font-family: ${props =>
    props.fontFamily ? props.fontFamily : "Arial, Helvetica, sans-serif"};
  font-size: ${props => (props.fontSize ? props.fontSize : "16px")};
  letter-spacing: ${props => (props.spacing ? props.spacing : "inherit")};
  overflow: hidden;
  border: ${props => (props.border ? props.border : "none")};
  border-radius: ${props => (props.radius ? props.radius : "0")};
  transition: all 0.3s ease-in-out;
  /* Media queries */
  @media ${device.smallBreak} {
    padding: ${props =>
      props.smallBreakPadding ? props.smallBreakPadding : null};
  }
`
