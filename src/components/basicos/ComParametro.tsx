import React from 'react'

interface Paramters {
    titulo: String,
    subtitulo: String
}

export default function ComParametro(params: Paramters) {
    console.log(params)
    return (
        <div>
            <h2>{params.titulo}</h2>
            <h3>{params.subtitulo}</h3>
        </div>
    )
}