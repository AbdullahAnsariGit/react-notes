import React, { useState } from 'react'
import CutEye from '../assets/icons/cut-eye.png'
import Eye from '../assets/icons/eyes.png'


function CustomInput(props) {
    const { label, icon, isPassword, placeholder, type = "text" } = props;
    const [isHide, setIsHide] = useState(false)
    return (
        <div>
            {label && <p>{label}</p>}
            <div style={{ display: 'flex', flexDirection: 'row', backgroundColor: "wheat", height: 50, width: 300, alignItems: 'center', padding: "0 20px", borderWidth: 1, borderColor: 'black', borderStyle: 'solid', borderRadius: 10, gap: 10 }}>
                {icon && <img src={icon} style={{ height: 20, width: 20 }} />}
                <input placeholder={placeholder} type={!isHide ? "password" : 'text'} style={{ border: 'none', backgroundColor: 'transparent', width: '100%', outline: "none" }} />
                {isPassword && <div onClick={() => setIsHide((prev) => !prev)}>
                    <img src={isHide ? Eye : CutEye} style={{ height: 20, width: 20 }} />
                </div>}
            </div>
        </div>
    )
}

export default CustomInput