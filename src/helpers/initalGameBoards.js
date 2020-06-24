let grid25 = []

let counter = 0
for (let i = 0; i < 25; i++) {
  for (let j = 0; j < 25; j++) {
    counter++
    grid25.push({
      column: j + 1,
      row: i + 1,
      alive: false,
      id: counter,
    })
  }
}
export { grid25 }

let grid50 = []

counter = 0
for (let i = 0; i < 50; i++) {
  for (let j = 0; j < 50; j++) {
    counter++
    grid50.push({
      column: j + 1,
      row: i + 1,
      alive: false,
      id: counter,
    })
  }
}
export { grid50 }

let grid75 = []

counter = 0
for (let i = 0; i < 75; i++) {
  for (let j = 0; j < 75; j++) {
    counter++
    grid75.push({
      column: j + 1,
      row: i + 1,
      alive: false,
      id: counter,
    })
  }
}
export { grid75 }

let grid100 = []

counter = 0
for (let i = 0; i < 100; i++) {
  for (let j = 0; j < 100; j++) {
    counter++
    grid100.push({
      column: j + 1,
      row: i + 1,
      alive: false,
      id: counter,
    })
  }
}
export { grid100 }
