import React, { useState, useEffect } from 'react'
// components
import Header from './components/Header'
import Footer from './components/Footer'
import Controls from './components/Controls'
import Board from './components/Board'
// helpers
import { grid25, grid50, grid75, grid100 } from './helpers/initalGameBoards'
// styles
import styled from 'styled-components'

const StyledContent = styled.div`
  flex: 1 0 auto;
`

function App() {
  // Controls state and helpers
  const [startStop, setStartStop] = useState(false)
  const [size, setSize] = useState(25)
  const [speed, setSpeed] = useState(1000)

  const toggleStartStop = (e) => {
    e.preventDefault()
    setStartStop(!startStop)
  }
  const updateSize = (e) => {
    e.preventDefault()
    setSize(e.target.value)
  }
  const updateSpeed = (e) => {
    e.preventDefault()
    setSpeed(e.target.value)
  }

  // Board state and helpers
  const generations = useState(0)

  // Initialize current and next game boards
  const intSize = parseInt(size)
  let [grid, setGrid] = useState(grid25)
  let nextGrid = grid

  // handle grid size
  useEffect(() => {
    if (intSize === 25) {
      setGrid(grid25)
    }
    if (intSize === 50) {
      setGrid(grid50)
    }
    if (intSize === 75) {
      setGrid(grid75)
    }
    if (intSize === 100) {
      setGrid(grid100)
    }
  }, [intSize])

  // toggle alive helper
  const toggleLife = (e) => {
    if (e.target.className === 'alive') {
      e.target.className = 'dead'
    } else {
      e.target.className = 'alive'
    }
  }

  return (
    <>
      <StyledContent>
        <Header />
        <Controls
          startStop={startStop}
          toggleStartStop={toggleStartStop}
          size={size}
          updateSize={updateSize}
          speed={speed}
          updateSpeed={updateSpeed}
        />
        <Board
          grid={grid}
          startStop={startStop}
          size={intSize}
          generations={generations}
          toggleLife={toggleLife}
        />
      </StyledContent>
      <Footer />
    </>
  )
}

export default App
