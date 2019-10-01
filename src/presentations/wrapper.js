import styled from "styled-components"

export default styled.div`
/* Layout related --- margins, display etc */
width: ${props => (props.width ? props.width : "100%")};
  max-width: ${props => (props.maxWidth ? props.maxWidth : "100vw")};
  margin: ${props => (props.margin ? props.margin : "0")};
  padding: ${props => (props.padding ? props.padding : "0")};
  height: ${props => (props.height ? props.height : "auto")};
  min-height: ${props => (props.minHeight ? props.minHeight : null)};
  position: ${props => (props.position ? props.position : "static")};
  left: ${props => (props.left ? props.left : null)};
  right: ${props => (props.right ? props.right : null)};
  top: ${props => (props.top ? props.top : null)};
  bottom: ${props => (props.bottom ? props.bottom : null)};
  display: ${props => (props.display ? props.display : "flex")};
  flex-direction: ${props => (props.row ? "row" : "column")};
  align-items: ${props => (props.align ? props.align : "flex-start")};
  justify-content: ${props => (props.justify ? props.justify : "flex-start")};
  overflow: hidden;
/* Theme-related --- font, color etc */
  background-color: ${props =>
    props.background ? props.background : "inherit"};
  color: ${props => (props.color ? props.color : "inherit")};
  font-family: ${props =>
    props.fontFamily ? props.fontFamily : "Arial, Helvetica, sans-serif"};
  font-size: ${props => (props.fontSize ? props.fontSize : "inherit")};
  letter-spacing: ${props => (props.spacing ? props.spacing : "inherit")};
  border: ${props => (props.border ? props.border : "none")};
  border-radius: ${props => (props.radius ? props.radius : "0")};
  transition: color 0.5s ease-in-out;
  transition: background-color 0.5s ease-in-out;
`
