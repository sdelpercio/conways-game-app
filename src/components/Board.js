import React, { useEffect, useState, useRef } from 'react'
import useWindowSize from '../hooks/useWindowSize'
// styles
import styled from 'styled-components'
import Cell from './Cell'

const StyledBoard = styled.div`
  margin: 2% auto;
  text-align: center;
  width: 800px;

  @media (max-width: 768px) {
    width: 400px;
  }
  @media (max-width: 425px) {
    width: 300px;
  }
`
const BoardBackground = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const BoardRow = styled.div`
  display: flex;
`

function Board({ startStop, size, speed, generations }) {
  // Initialize game board
  const intSize = parseInt(size)
  let board = useRef(
    new Array(intSize).fill(false).map(() => new Array(intSize).fill(false))
  )
  const [nextBoard, setNextBoard] = useState(board.current)
  // change size of board
  useEffect(() => {
    board.current = new Array(intSize)
      .fill(false)
      .map(() => new Array(intSize).fill(false))

    setNextBoard(board.current)
    console.log('board', board)
  }, [intSize])

  // cell size helper
  const [width] = useWindowSize()
  const [maxWidth, setMaxWidth] = useState(300)
  useEffect(() => {
    if (width >= 768) {
      setMaxWidth(800)
    } else if (width >= 425) {
      setMaxWidth(400)
    } else {
      setMaxWidth(300)
    }
  }, [width])

  // TODO: onclick event to toggle array value
  const toggleStatus = (e, row, cell) => {
    e.preventDefault()
    console.log('row', row)
    console.log('cell', cell)
    board.current[row][cell] = !board.current[row][cell]
  }

  return (
    <StyledBoard>
      <h3>Generations: {generations.current}</h3>
      <BoardBackground>
        {nextBoard.map((row, rowIndex) => (
          <BoardRow key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <Cell
                key={cellIndex}
                cellKey={cellIndex}
                rowKey={rowIndex}
                status={cell}
                size={maxWidth / intSize}
                toggleStatus={toggleStatus}
              />
            ))}
          </BoardRow>
        ))}
      </BoardBackground>
    </StyledBoard>
  )
}

export default Board
