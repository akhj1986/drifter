import styled from "styled-components"

export default styled.form`
  display: ${props => (props.display ? props.display : "flex")};
  background: ${props => (props.background ? props.background : "none")};
  flex-direction: ${props => (props.row ? "row" : "column")};
  align-items: ${props => (props.align ? props.align : "flex-start")};
  justify-content: ${props => (props.justify ? props.justify : "flex-start")};
  height: ${props => (props.height ? props.height : "auto")};
  width: ${props => (props.width ? props.width : "auto")};
  position: ${props => (props.position ? props.position : "static")};
  top: ${props => (props.top ? props.top : "auto")};
  left: ${props => (props.left ? props.left : "auto")};
  bottom: ${props => (props.bottom ? props.bottom : "auto")};
  right: ${props => (props.right ? props.right : "auto")};
`
