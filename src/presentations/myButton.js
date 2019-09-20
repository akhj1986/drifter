import styled from "styled-components"

export default styled.button`
  width: ${props => (props.width ? props.width : "auto")};
  height: ${props => (props.height ? props.height : "auto")};
  border: ${props => (props.border ? props.border : "solid 1px #222")};
  border-radius: ${props => (props.borderRadius ? props.borderRadius : "0")};
  background: ${props => (props.background ? props.background : "white")};
  color: ${props => (props.color ? props.color : "#555")};
  padding: ${props => (props.padding ? props.padding : "0")};
  margin: ${props => (props.margin ? props.margin : "0")};
  position: ${props => (props.position ? props.position : "static")};
  left: ${props => (props.left ? props.left : "0")};
  top: ${props => (props.top ? props.top : "0")};
  transition: all 0.5s ease-in-out;
`
