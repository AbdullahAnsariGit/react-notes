import React from 'react'
import CButton from './CButton'

function CCard(props) {
    const { title = "No Title" } = props
    return (
        <div style={{ height: 200, width: 100, backgroundColor: 'red' }}>
            <h1>{title}</h1>
            <CButton  onClick={()=> console.log(title)}  />
        </div>
    )
}

export default CCard