import styled from "styled-components"

export default styled.input`
  border: black solid 1px;
  height: ${props => (props.height ? props.height : "auto")};
  width: ${props => (props.width ? props.width : "auto")};
  font-size: ${props => (props.fontSize ? props.fontSize : "inherit")};
`
