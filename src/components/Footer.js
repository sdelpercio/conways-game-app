import React from 'react'
// styles
import styled from 'styled-components'

const StyledFooter = styled.div`
  width: 600px;
  flex-shrink: 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const StyledH3 = styled.h3`
  font-size: 2rem;
  font-family: 'Roboto', sans-serif;
  text-align: center;
`
const StyledP = styled.p`
  font-size: 1.6rem;
  font-family: 'Roboto', sans-serif;
  text-align: left;
  line-height: 2.2rem;
  text-indent: 5rem;
`

function Footer() {
  return (
    <StyledFooter>
      <StyledH3>A little about Conway's Game of Life...</StyledH3>
      <StyledP>
        Motivated by questions in mathematical logic and in part by work on
        simulation games by Ulam, among others, John Conway began doing
        experiments in 1968 with a variety of different two-dimensional cellular
        automaton rules. Conway's initial goal was to define an interesting and
        unpredictable cell automaton. At each step in time, the following
        transitions occur:
        <ol style={{ textIndent: '1rem' }}>
          <li>Any live cell with two or three live neighbours survives.</li>
          <li>Any dead cell with three live neighbours becomes a live cell.</li>
          <li>
            All other live cells die in the next generation. Similarly, all
            other dead cells stay dead.
          </li>
        </ol>
      </StyledP>
    </StyledFooter>
  )
}

export default Footer
