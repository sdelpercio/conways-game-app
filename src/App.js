import React, { useState, useRef } from 'react'
// components
import Header from './components/Header'
import Footer from './components/Footer'
import Controls from './components/Controls'
import Board from './components/Board'
// styles
import styled from 'styled-components'

const StyledContent = styled.div`
  flex: 1 0 auto;
  padding: 20px;
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
  const generations = useRef(0)

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
          startStop={startStop}
          size={size}
          speed={speed}
          generations={generations}
        />
      </StyledContent>
      <Footer />
    </>
  )
}

export default App
