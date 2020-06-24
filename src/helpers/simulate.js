// function to check if current cell should live or die
// take in the current cell, index, grid, and size
export const checkAlive = (cell, index, grid, size) => {
  // initialize a counter for number of alive neighbors
  // get cell info
  let aliveNeighbors = 0
  const { column, row, alive } = cell

  // find neighbors. if current cell is at edge consider outside as dead
  // top left
  if (column === 1 && row === 1) {
    // south
    if (grid[index + size].alive) {
      aliveNeighbors++
    }
    // east
    if (grid[index + 1].alive) {
      aliveNeighbors++
    }
    // southeast
    if (grid[index + size + 1].alive) {
      aliveNeighbors++
    }

    // check conditions
    if (alive === true && (aliveNeighbors === 2 || aliveNeighbors === 3)) {
      return true
    } else if (alive === false && aliveNeighbors === 3) {
      return true
    } else {
      return false
    }
  }

  // bottom left
  else if (column === 1 && row === size) {
    // north
    if (grid[index - size].alive) {
      aliveNeighbors++
    }
    // east
    if (grid[index + 1].alive) {
      aliveNeighbors++
    }
    // northeast
    if (grid[index - size + 1].alive) {
      aliveNeighbors++
    }
    // check conditions
    if (alive === true && (aliveNeighbors === 2 || aliveNeighbors === 3)) {
      return true
    } else if (alive === false && aliveNeighbors === 3) {
      return true
    } else {
      return false
    }
  }

  // top right
  else if (column === size && row === 1) {
    // south
    if (grid[index + size].alive) {
      aliveNeighbors++
    }
    // southwest
    if (grid[index + size - 1].alive) {
      aliveNeighbors++
    }
    // west
    if (grid[index - 1].alive) {
      aliveNeighbors++
    }
    // check conditions
    if (alive === true && (aliveNeighbors === 2 || aliveNeighbors === 3)) {
      return true
    } else if (alive === false && aliveNeighbors === 3) {
      return true
    } else {
      return false
    }
  }

  // bottom right
  else if (column === size && row === size) {
    // north
    if (grid[index - size].alive) {
      aliveNeighbors++
    }
    // west
    if (grid[index - 1].alive) {
      aliveNeighbors++
    }
    // northwest
    if (grid[index - size - 1].alive) {
      aliveNeighbors++
    }
    // check conditions
    if (alive === true && (aliveNeighbors === 2 || aliveNeighbors === 3)) {
      return true
    } else if (alive === false && aliveNeighbors === 3) {
      return true
    } else {
      return false
    }
  }

  // top row
  else if (row === 1) {
    // west
    if (grid[index - 1].alive) {
      aliveNeighbors++
    }
    // southwest
    if (grid[index + size - 1].alive) {
      aliveNeighbors++
    }
    // south
    if (grid[index + size].alive) {
      aliveNeighbors++
    }
    // southeast
    if (grid[index + size + 1].alive) {
      aliveNeighbors++
    }
    // east
    if (grid[index + 1].alive) {
      aliveNeighbors++
    }
    // check conditions
    if (alive === true && (aliveNeighbors === 2 || aliveNeighbors === 3)) {
      return true
    } else if (alive === false && aliveNeighbors === 3) {
      return true
    } else {
      return false
    }
  }

  // left column
  else if (column === 1) {
    // north
    if (grid[index - size].alive) {
      aliveNeighbors++
    }
    // northeast
    if (grid[index - size + 1].alive) {
      aliveNeighbors++
    }
    // east
    if (grid[index + 1].alive) {
      aliveNeighbors++
    }
    // southeast
    if (grid[index + size + 1].alive) {
      aliveNeighbors++
    }
    // south
    if (grid[index + size].alive) {
      aliveNeighbors++
    }
    // check conditions
    if (alive === true && (aliveNeighbors === 2 || aliveNeighbors === 3)) {
      return true
    } else if (alive === false && aliveNeighbors === 3) {
      return true
    } else {
      return false
    }
  }

  // bottom row
  else if (row === size) {
    // west
    if (grid[index - 1].alive) {
      aliveNeighbors++
    }
    // northwest
    if (grid[index - size - 1].alive) {
      aliveNeighbors++
    }
    // north
    if (grid[index - size].alive) {
      aliveNeighbors++
    }
    // northeast
    if (grid[index - size + 1].alive) {
      aliveNeighbors++
    }
    // east
    if (grid[index + 1].alive) {
      aliveNeighbors++
    }
    // check conditions
    if (alive === true && (aliveNeighbors === 2 || aliveNeighbors === 3)) {
      return true
    } else if (alive === false && aliveNeighbors === 3) {
      return true
    } else {
      return false
    }
  }

  // right column
  else if (column === size) {
    // north
    if (grid[index - size].alive) {
      aliveNeighbors++
    }
    // northwest
    if (grid[index - size - 1].alive) {
      aliveNeighbors++
    }
    // west
    if (grid[index - 1].alive) {
      aliveNeighbors++
    }
    // southwest
    if (grid[index + size - 1].alive) {
      aliveNeighbors++
    }
    // south
    if (grid[index + size].alive) {
      aliveNeighbors++
    }
    // check conditions
    if (alive === true && (aliveNeighbors === 2 || aliveNeighbors === 3)) {
      return true
    } else if (alive === false && aliveNeighbors === 3) {
      return true
    } else {
      return false
    }
  }

  // middle
  else {
    // north
    if (grid[index - size].alive) {
      aliveNeighbors++
    }
    // northeast
    if (grid[index - size + 1].alive) {
      aliveNeighbors++
    }
    // east
    if (grid[index + 1].alive) {
      aliveNeighbors++
    }
    // southeast
    if (grid[index + size + 1].alive) {
      aliveNeighbors++
    }
    // south
    if (grid[index + size].alive) {
      aliveNeighbors++
    }
    // southwest
    if (grid[index + size - 1].alive) {
      aliveNeighbors++
    }
    // west
    if (grid[index - 1].alive) {
      aliveNeighbors++
    }
    // northwest
    if (grid[index - size - 1].alive) {
      aliveNeighbors++
    }
    // check conditions
    if (alive === true && (aliveNeighbors === 2 || aliveNeighbors === 3)) {
      return true
    } else if (alive === false && aliveNeighbors === 3) {
      return true
    } else {
      return false
    }
  }
}

// function to loop through entire board to check for updates
// take in the nextGrid ref to do changes
export const simulateAutomata = (grid, size) => {
  // loop through nextGrid
  const newStatuses = []
  grid.forEach((cell, index) => {
    if (checkAlive(cell, index, grid, size)) {
      newStatuses.push(true)
    } else {
      newStatuses.push(false)
    }
  })
  newStatuses.forEach((bool, index) => {
    grid[index].alive = bool
  })

  return grid
}
