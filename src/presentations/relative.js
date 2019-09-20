import styled from "styled-components"

export default styled.div`
  display: block;
  position: relative;
  background-color: ${props => (props.background ? props.background : "white")};
  width: ${props => (props.width ? props.width : "100%")};
  max-width: ${props => (props.maxWidth ? props.maxWidth : "100vw")};
  height: ${props => (props.height ? props.height : "default")};
  margin: ${props => (props.margin ? props.margin : 0)};
  padding: ${props => (props.padding ? props.padding : 0)};
  top: ${props => props.top};
  bottom: ${props => props.bottom};
  left: ${props => props.left};
  right: ${props => props.right};
`
