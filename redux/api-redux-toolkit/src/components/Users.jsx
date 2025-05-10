import React from 'react'

const Users = ({ item, index }) => {
    console.log(item, "item");

    return (
        <div key={index}>
            <h1>{item.name}</h1>
            <h3>{item.email}</h3>
            <h3>{item.username}</h3>
        </div>
    )
}

export default Users