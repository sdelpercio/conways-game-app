import React, { useEffect, useRef, useState } from 'react'
import useWindowSize from '../hooks/useWindowSize'
// styles
import styled from 'styled-components'
import Cell from './Cell'

const StyledBoard = styled.div`
  margin: 5% auto;
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
  let board = useRef(
    new Array(size).fill(false).map(() => new Array(size).fill(false))
  )
  useEffect(() => {
    board.current = new Array(size)
      .fill(false)
      .map(() => new Array(size).fill(false))
  }, [size])

  // size helper
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

  return (
    <StyledBoard>
      <h3>Generations: {generations.current}</h3>
      <BoardBackground>
        {board.current
          ? board.current.map((row) => (
              <BoardRow>
                {row.map((cell) => (
                  <Cell status={cell} size={maxWidth / size} />
                ))}
              </BoardRow>
            ))
          : null}
      </BoardBackground>
    </StyledBoard>
  )
}

export default Board
