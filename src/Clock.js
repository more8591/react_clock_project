import React from 'react'

function Clock() {
  return (
    <div>{new Date().toLocaleTimeString()}</div>
  )
}


export default Clock;