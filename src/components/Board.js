import React from 'react'
// helpers
import { gridDisplay } from '../helpers/gridDisplay'
import { cellDisplay } from '../helpers/cellDisplay'
// styles
import styled from 'styled-components'

const StyledBoard = styled.div`
  margin: 2% auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

function Board({ grid, startStop, size, generations, toggleLife }) {
  return (
    <StyledBoard>
      <h3>Generations: {generations}</h3>
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
  )
}

export default Board
