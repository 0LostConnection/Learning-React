import React from 'react'

interface Parameters {
    titulo: String,
    subtitulo: String
}

export default function ComParametro(params: Parameters) {
    console.log(params)
    return (
        <>
            <h2>{params.titulo}</h2>
            <p>{params.subtitulo}</p>
        </>
    )
}