const cellSize = (gridSize) => {
  if (gridSize === 25) {
    return '24px'
  }
  if (gridSize === 50) {
    return '12px'
  }
  if (gridSize === 75) {
    return '8px'
  }
  if (gridSize === 100) {
    return '6px'
  }
}

export const cellDisplay = (alive, gridSize) => {
  if (alive) {
    return {
      width: `${cellSize(gridSize)}`,
      height: `${cellSize(gridSize)}`,
      background: 'black',
    }
  } else {
    return {
      width: `${cellSize(gridSize)}`,
      height: `${cellSize(gridSize)}`,
      background: 'white',
      border: '0.1px solid black',
    }
  }
}
