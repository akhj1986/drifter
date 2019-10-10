import React, { useContext } from "react"
import { Wrapper, Header1, Header2 } from "presentations"
import { ThemeContext } from "context/theme-context"

//NOTES: I need to design a banner logo which behaves as a call to action button. Perhaps a book with pages turning or words being written within it

export default ({ handleClick, opacity }) => {
  const context = useContext(ThemeContext)
  return (
    <Wrapper
      onClick={handleClick}
      position="fixed"
      justify="center"
      align="center"
      zIndex="1"
      top="0"
      left="0"
      width="100vw"
      height="100vh"
      background={`rgba(255,255,255,${opacity})`}
      backTransition="background-color 1s linear"
    >
      <Header1
        opacity=".8"
        fontFamily="'Cinzel', serif"
        fontSize="60px"
        spacing="2px"
        color={`rgba(34, 34, 34, ${opacity})`}
        margin="-100px 0 0"
        transition="color 1s linear"
      >
        The Drifter
      </Header1>
      <Header2
        opacity=".8"
        margin="0 0 60px"
        fontFamily="'Cinzel', serif"
        fontSize="20px"
        spacing="2px"
        color={`rgba(34, 34, 34, ${opacity})`}
        transition="color 1s linear"
      >
        A space for writing
      </Header2>
    </Wrapper>
  )
}
