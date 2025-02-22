import React from 'react'

function CButton(props) {
    const { title = 'Default', message, onClick } = props
    return (
        <button onClick={onClick}>
            {title}
        </button>
    )
}

export default CButton