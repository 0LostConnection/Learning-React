import React from "react"

export default function ParOuImpar(props) {
    const isEven = props.number % 2 === 0
    return (
        <div>
            {props.number} é {isEven ? <span>Par</span> : <span>Ímpar</span>}
        </div>
    )
}