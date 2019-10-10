import styled from "styled-components"

export default styled.h2`
  font-size: ${props => (props.fontSize ? props.fontSize : "25px")};
  font-style: ${props => (props.italic ? "italic" : "normal")};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : "normal")};
  margin: ${props => (props.margin ? props.margin : "0 0 30px")};
  padding: ${props => (props.padding ? props.padding : "0")};
  color: ${props => (props.color ? props.color : "inherit")};
  font-family: ${props => (props.fontFamily ? props.fontFamily : "inherit")};
  transition: ${props =>
    props.transition ? props.transition : "color 0.5s ease-in-out"};
`
