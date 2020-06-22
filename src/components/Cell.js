import React from 'react'
// styles
// import styled from 'styled-components'

// const StyledCell = styled.div`
//   width: ${size}
// `

function Cell({ status, size }) {
  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        border: '1px solid black',
        backgroundColor: status ? 'black' : 'white',
      }}
    ></div>
  )
}

export default Cell
