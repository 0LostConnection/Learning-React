import './InputForm.css'
import React, { useState } from "react"

export default function InputForm(props) {
    const [valor, setValor] = useState('Inicial')

    return (
        <div className="Input">
            <h2>{valor}</h2>
            <div className='InputContainer'>
                <input value={valor} onChange={(e) => { setValor(e.target.value) }} />
                <input value={valor} readOnly />
                <input value={undefined} />
            </div>

        </div>
    )
}