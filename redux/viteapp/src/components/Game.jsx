import React from 'react'
import { useSelector } from 'react-redux'

function Game() {
    const name = useSelector((store) => store.counter.name)

  return (
    <h1>Game {name}</h1>

  )
}

export default Game