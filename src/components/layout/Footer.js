import React from "react"
import { Wrapper, Relative, Header3 } from "../../presentations"

export default () => {
  return (
    // The Relative wrapper positions the component Relatively at bottom: 0
    //The inner Wrapper is a flex container
    <Relative bottom="0">
      <Wrapper
        row
        justify="center"
        align="center"
        height="35px"
        background="rgba(134, 147, 247, 0.7)"
        padding="0 50px"
      >
        <Header3
          fontSize="10px"
          margin="0 10px 0 0"
          opacity="0.7"
          color="#1744E8"
        >
          Alex Harris-Jedamski
        </Header3>
        <Header3 fontSize="10px" margin="0" opacity="0.7" color="#1744E8">
          &copy;2019
        </Header3>
      </Wrapper>
    </Relative>
  )
}
