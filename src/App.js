import React, { useState, useEffect, useRef } from 'react'
// components
import Header from './components/Header'
import Footer from './components/Footer'
import Controls from './components/Controls'
import Board from './components/Board'
// helpers
import { grid25, grid50, grid75, grid100 } from './helpers/initalGameBoards'
import { simulateAutomata } from './helpers/simulate'
import { useInterval } from './helpers/useInterval'
// styles
import styled from 'styled-components'

const StyledContent = styled.div`
  flex: 1 0 auto;
`

function App() {
  // Controls state and helpers
  const [startStop, setStartStop] = useState(false)
  const [size, setSize] = useState(25)
  const intSize = parseInt(size)
  const [speed, setSpeed] = useState(1000)
  const intSpeed = parseInt(speed)

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
  const clearGrid = (e) => {
    e.preventDefault()
    setGenerations(0)
    nextGrid.current.forEach((cell) => {
      cell.alive = false
    })
    setGrid([...nextGrid.current])
  }

  // Board state and helpers
  const [generations, setGenerations] = useState(0)
  const [grid, setGrid] = useState([...grid25])
  let nextGrid = useRef([...grid])

  // handle grid size change
  useEffect(() => {
    if (intSize === 25) {
      nextGrid.current = [...grid25]
    }
    if (intSize === 50) {
      nextGrid.current = [...grid50]
    }
    if (intSize === 75) {
      nextGrid.current = [...grid75]
    }
    if (intSize === 100) {
      nextGrid.current = [...grid100]
    }
    setGrid([...nextGrid.current])
  }, [intSize])

  // toggle alive helper
  const toggleLife = (e, index) => {
    if (e.target.className === 'alive') {
      e.target.className = 'dead'
      nextGrid.current[index].alive = false
      setGrid([...nextGrid.current])
    } else {
      e.target.className = 'alive'
      nextGrid.current[index].alive = true
      setGrid([...nextGrid.current])
    }
  }

  // handle lifecycle
  useInterval(
    () => {
      const changedGrid = simulateAutomata(nextGrid.current, intSize)
      setGrid([...changedGrid])
      setGenerations((generations) => generations++)
    },
    startStop ? intSpeed : null
  )

  return (
    <>
      <StyledContent>
        <Header />
        <Controls
          startStop={startStop}
          toggleStartStop={toggleStartStop}
          clearGrid={clearGrid}
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
