export const gridDisplay = (gridSize) => {
  if (gridSize === 25) {
    return {
      display: 'grid',
      gridTemplateColumns: `repeat(${gridSize}, 24px)`,
      gridTemplateRows: `repeat(${gridSize}, 24px)`,
    }
  }
  if (gridSize === 50) {
    return {
      display: 'grid',
      gridTemplateColumns: `repeat(${gridSize}, 12px)`,
      gridTemplateRows: `repeat(${gridSize}, 12px)`,
    }
  }
  if (gridSize === 75) {
    return {
      display: 'grid',
      gridTemplateColumns: `repeat(${gridSize}, 8px)`,
      gridTemplateRows: `repeat(${gridSize}, 8px)`,
    }
  }
  if (gridSize === 100) {
    return {
      display: 'grid',
      gridTemplateColumns: `repeat(${gridSize}, 6px)`,
      gridTemplateRows: `repeat(${gridSize}, 6px)`,
    }
  }
}
