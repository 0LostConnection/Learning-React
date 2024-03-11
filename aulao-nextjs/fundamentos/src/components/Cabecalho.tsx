import React from "react"

interface Props { 
    title: string
}

export default function Cabecalho(props: Props) {
    return (
        <header>
            <h1>{props.title}</h1>
        </header>
    )
}