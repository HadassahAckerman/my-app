import React, { useRef, useState } from 'react'

export default function SelectComp() {

    const [color, setColor] = useState("silver");

    const selectRef = useRef();

    return (
        <div className='container'>
            <h2 style={{ color: color }}>Enter your favorite color: {color}</h2>
            <select defaultValue="gold" ref={selectRef} onChange={() => {
                setColor(selectRef.current.value)
            }} className='form-select'>
                <option value="">Select your favorite color</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
            </select>
        </div>
    )
}