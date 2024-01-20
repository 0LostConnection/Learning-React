import React from 'react'

interface Parameters {
    min: number,
    max: number
}

export default function Aleatorio(params: Parameters) {
    const randomNumber = Math.floor(Math.random() * (params.max - params.min + 1) + params.min)
    return (
        <>
            <h2>Seu número aleatório é:</h2>
            <p>{randomNumber}</p>
        </>
    )
}