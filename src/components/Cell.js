import React from 'react'
// styles
// import styled from 'styled-components'

// const StyledCell = styled.div`
//   width: ${size}
// `

function Cell({ key, cellKey, rowKey, status, size, toggleStatus }) {
  return (
    <div
      onClick={(e) => toggleStatus(e, rowKey, cellKey)}
      style={{
        width: `${size}px`,
        height: `${size - 5}px`,
        border: '1px solid black',
        backgroundColor: status ? 'black' : 'white',
      }}
    ></div>
  )
}

export default Cell
