import styled from "styled-components"
import { SearchAlt2 } from "styled-icons/boxicons-regular/SearchAlt2"

export default styled(SearchAlt2)`
  color: black;
  width: ${props => (props.size ? props.size : "inherit")};
  height: ${props => (props.size ? props.size : "inherit")};
`
