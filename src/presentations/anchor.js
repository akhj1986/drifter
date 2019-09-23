import styled from "styled-components"

export default styled.a`
color: ${props => (props.color ? props.color : "#000")}
text-decoration: ${props => (props.decoration ? props.decoration : "none")}
`
