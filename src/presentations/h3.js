import styled from "styled-components"

export default styled.h3`
  font-size: ${props => (props.fontSize ? props.fontSize : "20px")};
  font-style: ${props => (props.italic ? "italic" : "normal")};
  margin: ${props => (props.margin ? props.margin : "0 0 30px")};
  padding: ${props => (props.padding ? props.padding : "0")};
  color: ${props => (props.color ? props.color : "inherit")};
  opacity: ${props => (props.opacity ? props.opacity : "inherit")};
`
