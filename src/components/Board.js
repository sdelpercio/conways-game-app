import React from 'react'
// components
import Info from './Info'
// helpers
import { gridDisplay } from '../helpers/gridDisplay'
import { cellDisplay } from '../helpers/cellDisplay'
// styles
import styled from 'styled-components'

const StyledContainer = styled.div`
  width: 1000px;
  margin: 2% auto;
  display: flex;
  justify-content: center;
  align-items: center;
`
const StyledBoard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const StyledH3 = styled.h3`
  font-size: 2rem;
  font-family: 'Roboto', sans-serif;
  text-align: center;
`

function Board({ grid, startStop, size, generations, toggleLife }) {
  return (
    <StyledContainer>
      <StyledBoard>
        <StyledH3>Generations: {generations}</StyledH3>
        <div style={gridDisplay(size)}>
          {grid.map((cell, index) => (
            <div
              key={index}
              className={cell.alive ? 'alive' : 'dead'}
              onClick={
                startStop
                  ? null
                  : (e) => {
                      toggleLife(e, index)
                    }
              }
              style={cellDisplay(cell.alive, size)}
            />
          ))}
        </div>
      </StyledBoard>
      <Info />
    </StyledContainer>
  )
}

export default Board
