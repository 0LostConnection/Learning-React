import React from "react"

export default function Display(props) {
    return (
        <div className="Contador">
            <h2>Número:</h2>
            <h2 className="Numero">{props.numero}</h2>
        </div>
    )
}