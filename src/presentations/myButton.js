import styled from "styled-components"

export default styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => (props.width ? props.width : "auto")};
  height: ${props => (props.height ? props.height : "auto")};
  border: ${props => (props.border ? props.border : "solid 1px #222")};
  border-radius: ${props => (props.borderRadius ? props.borderRadius : "0")};
  background: ${props => (props.background ? props.background : "white")};
  color: ${props => (props.color ? props.color : "#555")};
  padding: ${props => (props.padding ? props.padding : "0")};
  margin: ${props => (props.margin ? props.margin : "0")};
  text-align: center;
  vertical-align: middle;

  transition: all 0.5s ease-in-out;
  &:hover {
    cursor: pointer;
  }
`
