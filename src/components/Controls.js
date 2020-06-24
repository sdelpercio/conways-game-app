import React from 'react'
// styles
import styled from 'styled-components'

const StyledControls = styled.div`
  width: 600px;
  margin: 5% auto 0 auto;
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
  clearGrid,
  size,
  updateSize,
  speed,
  updateSpeed,
}) {
  return (
    <StyledControls>
      <button onClick={toggleStartStop}>{startStop ? 'Stop' : 'Start'}</button>
      <button onClick={clearGrid}>Clear</button>
      <div>
        <label htmlFor='size'>Select a size</label>
        <select name='size' value={size} onChange={updateSize}>
          <option value={25}>25 x 25</option>
          <option value={50}>50 x 50</option>
          <option value={75}>75 x 75</option>
          <option value={100}>100 x 100</option>
        </select>
      </div>
      <div>
        <label htmlFor='speed'>Generations per second</label>
        <select name='speed' value={speed} onChange={updateSpeed}>
          <option value={1000}>1</option>
          <option value={500}>2</option>
          <option value={333}>3</option>
          <option value={250}>4</option>
          <option value={200}>5</option>
        </select>
      </div>
    </StyledControls>
  )
}

export default Controls
