import React from "react"

export default function Botoes(props) {
    return (
        <div className="Buttons">
            <button onClick={props.onInc}>+</button>
            <button onClick={props.onDec}>-</button>
        </div>
    )
}