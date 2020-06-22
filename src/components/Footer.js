import React from 'react'
// styles
import styled from 'styled-components'

const StyledFooter = styled.div`
  width: 800px;
  flex-shrink: 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    width: 400px;
  }
  @media (max-width: 425px) {
    width: 300px;
  }
`

function Footer() {
  return (
    <StyledFooter>
      <h3 style={{ textAlign: 'center' }}>
        A little about Conway's Game of Life...
      </h3>
      <p>
        A computer science classic from 1970, a program that simulates a
        cellular automaton (plural automata). It has connections to all kinds of
        different aspects of computer science and nature.
      </p>
    </StyledFooter>
  )
}

export default Footer
