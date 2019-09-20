import styled from "styled-components"

export default styled.h4`
  font-size: ${props => (props.fontSize ? props.fontSize : "15px")};
  font-style: ${props => (props.italic ? "italic" : "normal")};
  margin: ${props => (props.margin ? props.margin : "0 0 30px")};
  padding: ${props => (props.padding ? props.padding : "0")};
  color: ${props => (props.color ? props.color : "inherit")};
`
