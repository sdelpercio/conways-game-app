import React from 'react'
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
  return (
    <>
      <StyledContent>
        <Header />
        <Controls />
        <Board />
      </StyledContent>
      <Footer />
    </>
  )
}

export default App
