import React from 'react'
import Clock from './Clock';

function App() {
  return (
    <>
      <h1>My First React Project</h1>
      <h3>By Victor Moreno</h3>
      <Clock />
    </>
  )
}

setInterval(Clock, 1000)

export default App;