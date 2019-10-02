import styled from "styled-components"
import { SearchAlt2 } from "styled-icons/boxicons-regular/SearchAlt2"

export default styled(SearchAlt2)`
  color: ${props => (props.color ? props.color : "inherit")};
  width: ${props => (props.size ? props.size : "inherit")};
  height: ${props => (props.size ? props.size : "inherit")};
`
