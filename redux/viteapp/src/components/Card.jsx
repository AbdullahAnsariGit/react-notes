import React from 'react'
import { useSelector } from 'react-redux'

function Card() {
    const name = useSelector((store) => store.counter.name)

    return (
        <h1>Card {name}</h1>

    )
}

export default Card