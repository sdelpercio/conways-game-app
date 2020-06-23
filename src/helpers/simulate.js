// function to check if current cell should live or die
// take in the current cell's column and row

// initialize a counter for number of alive neighbors

// find neighbors. if current cell is at edge, wrap around
// create array of alive statuses for each neighbor

// for each of the neighbors add one to counter if alive

// if current cell is alive and counter is 2 or 3
//      current cell remains alive (return true)
// else
//      current cell dies (return false)

// if current cell is dead and counter is 3
//      current cell lives (return true)
// else
//      current cell remains dead (return false)

//
//
//

// function to loop through entire board to check for updates
// take in the nextGrid ref to do changes

// loop through nextGrid
//      for each cell, use check cell function
//      if return is true, cell.alive = true
//      else, cell.alive = false

// return nextGrid
