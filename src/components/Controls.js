import React from 'react'
// styles
import styled from 'styled-components'

const StyledControls = styled.div`
  width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    width: 400px;
  }
  @media (max-width: 425px) {
    width: 300px;
  }
`
const ControlGroup = styled.div`
  width: 100%;
  padding-top: 30px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`
const StyledButton = styled.button`
  width: 120px;
  height: 40px;
  border: none;
  outline: none;
  border-bottom: 2px solid green;
  border-top: 2px solid green;
  border-radius: 10px;
  background: white;
  color: black;
  font-family: 'Roboto', sans-serif;
  font-size: 1.6rem;
  font-weight: bold;

  &:hover {
    cursor: pointer;
  }
  &:active {
    animation-name: flash;
    animation-duration: 0.1s;
    animation-timing-function: linear;
  }
  @keyframes flash {
    0% {
      background: rgb(62, 214, 44);
      background: linear-gradient(
        345deg,
        rgba(62, 214, 44, 1) 0%,
        rgba(255, 255, 255, 1) 35%
      );
    }
    50% {
      background: rgb(62, 214, 44);
      background: linear-gradient(
        345deg,
        rgba(62, 214, 44, 1) 35%,
        rgba(255, 255, 255, 1) 65%
      );
    }
    75% {
      background: rgb(62, 214, 44);
      background: linear-gradient(
        165deg,
        rgba(62, 214, 44, 1) 0%,
        rgba(255, 255, 255, 1) 65%
      );
    }
    100% {
      background: rgb(62, 214, 44);
      background: linear-gradient(
        165deg,
        rgba(62, 214, 44, 1) 0%,
        rgba(255, 255, 255, 1) 35%
      );
    }
  }
`
const StyledSelect = styled.select`
  width: 120px;
  height: 40px;
  border: 2px solid green;
  border-radius: 10px;
  background: white;
  color: black;
  font-family: 'Roboto', sans-serif;
  font-size: 1.6rem;
  font-weight: bold;
  text-align: center;

  &:hover {
    cursor: pointer;
  }
  option {
    width: 120px;
    border: 2px solid green;
    background: white;
    color: black;
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    font-weight: bold;
  }
`
const StyledLabel = styled.label`
  font-family: 'Roboto', sans-serif;
  font-size: 1.6rem;
  color: black;
`

function Controls({
  startStop,
  toggleStartStop,
  clearGrid,
  randomizeGrid,
  size,
  updateSize,
  speed,
  updateSpeed,
}) {
  return (
    <StyledControls>
      <ControlGroup>
        <StyledButton onClick={toggleStartStop}>
          {startStop ? 'Stop' : 'Start'}
        </StyledButton>
        <StyledButton onClick={clearGrid}>Clear</StyledButton>
        <StyledButton onClick={randomizeGrid}>Randomize</StyledButton>
      </ControlGroup>
      <ControlGroup>
        <StyledLabel htmlFor='size'>Select a size</StyledLabel>
        <StyledSelect id='size' value={size} onChange={updateSize}>
          <option value={25}>25 x 25</option>
          <option value={50}>50 x 50</option>
          <option value={75}>75 x 75</option>
          <option value={100}>100 x 100</option>
        </StyledSelect>

        <StyledLabel htmlFor='speed'>Generations per second</StyledLabel>
        <StyledSelect id='speed' value={speed} onChange={updateSpeed}>
          <option value={1000}>1</option>
          <option value={500}>2</option>
          <option value={333}>3</option>
          <option value={250}>4</option>
          <option value={200}>5</option>
        </StyledSelect>
      </ControlGroup>
    </StyledControls>
  )
}

export default Controls
