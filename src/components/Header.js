import React from 'react'
// styles
import { GiSprout } from 'react-icons/gi'
import styled from 'styled-components'

const StyledHeader = styled.div`
  width: 100%;
  border-bottom: 1px solid grey;
  display: flex;
  justify-content: center;
`

function Header() {
  return (
    <StyledHeader>
      <h1>
        <GiSprout /> Conway's Game of Life
      </h1>
    </StyledHeader>
  )
}

export default Header
