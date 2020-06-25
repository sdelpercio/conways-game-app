import React from 'react'
// styles
import { GiSprout } from 'react-icons/gi'
import styled from 'styled-components'

const StyledHeader = styled.div`
  width: 1100px;
  margin: 0 auto;
  padding-top: 2%;
  border-bottom: 1px solid grey;
  display: flex;
  justify-content: center;
`
const StyledH1 = styled.h1`
  font-size: 3rem;
  font-family: 'Roboto', sans-serif;
`

function Header() {
  return (
    <StyledHeader>
      <StyledH1>
        <GiSprout style={{ color: 'green' }} /> Conway's Game of Life{' '}
        <GiSprout style={{ color: 'green' }} />
      </StyledH1>
    </StyledHeader>
  )
}

export default Header
