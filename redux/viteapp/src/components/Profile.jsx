import React from 'react'
import { useSelector } from 'react-redux'

function Profile() {
    const name = useSelector((store) => store.counter.name)
    const value = useSelector((store) => store.counter.value)
    return (
        <div>
            <h1>Profile {name}</h1>
            <h1>Count {value}</h1>
        </div>

    )
}

export default Profile