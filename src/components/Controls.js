import React from 'react'
// styles
import styled from 'styled-components'

const StyledControls = styled.div`
  width: 800px;
  margin: 5% auto;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 400px;
  }
  @media (max-width: 425px) {
    width: 300px;
  }
`

function Controls({
  startStop,
  toggleStartStop,
  size,
  updateSize,
  speed,
  updateSpeed,
}) {
  return (
    <StyledControls>
      <button onClick={toggleStartStop}>{startStop ? 'Stop' : 'Start'}</button>
      <div>
        <label for='size'>Select a size</label>
        <select name='size' value={size} onChange={updateSize}>
          <option value={25}>25 x 25</option>
          <option value={50}>50 x 50</option>
          <option value={100}>100 x 100</option>
          <option value={500}>500 x 500</option>
        </select>
      </div>
      <div>
        <label for='speed'>Generations per second</label>
        <select name='speed' value={speed} onChange={updateSpeed}>
          <option value={1000}>1</option>
          <option value={500}>2</option>
          <option value={200}>5</option>
          <option value={100}>10</option>
        </select>
      </div>
    </StyledControls>
  )
}

export default Controls
