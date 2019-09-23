import styled from "styled-components"

export default styled.p`
  width: auto;
  overflow: none;
  margin: ${props => (props.margin ? props.margin : "0 0 20px")};
  padding: ${props => (props.padding ? props.padding : "0")};
  line-height: ${props => (props.lineHeight ? props.lineHeight : "1.5rem")};
  color: ${props => (props.color ? props.color : "inherit")};
  font-size: ${props => (props.fontSize ? props.fontSize : "inherit")};
  font-style: ${props => (props.italic ? "italic" : "normal")};
  border: ${props => (props.border ? props.border : "none")};
`
