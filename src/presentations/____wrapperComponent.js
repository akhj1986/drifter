import React, { useContext } from "react"
import styled from "styled-components"
import { device } from "./breakpoints"
import { ThemeContext } from "./theme-context"

export default props => {
  const value = useContext(ThemeContext)

  const Wrap = styled.div`
    background-color: ${props.background
      ? props.background
      : value.theme.background};
    color: ${props.color ? props.color : value.theme.text};
    width: ${props.width ? props.width : "100%"};
    max-width: ${props.maxWidth ? props.maxWidth : "100vw"};
    margin: ${props.margin ? props.margin : "0"};
    padding: ${props.padding ? props.padding : "0"};
    height: ${props.height ? props.height : "auto"};
    min-height: ${props.minHeight ? props.minHeight : null};
    display: flex;
    flex-direction: ${props.row ? "row" : "column"};
    align-items: ${props.align ? props.align : "center"};
    justify-content: ${props.justify ? props.justify : "center"};
    font-family: ${props.fontFamily
      ? props.fontFamily
      : "Arial, Helvetica, sans-serif"};
    font-size: ${props.fontSize ? props.fontSize : "16px"};
    letter-spacing: ${props.spacing ? props.spacing : "inherit"};
    overflow: hidden;
    border: ${props.border ? props.border : "none"};
    border-radius: ${props.radius ? props.radius : "0"};
    transition: all 1s ease-in-out;
    /* Media queries */
    @media ${device.smallBreak} {
      padding: ${props.smallBreakPadding ? props.smallBreakPadding : null};
    }
  `

  return <Wrap>{props.children}</Wrap>
}
