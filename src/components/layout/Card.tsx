import React from 'react'

import './Card.css'

interface Parameters {
    titulo: string
    children: any
}

export default function Card(params: Parameters) {
    return (
        <div className="Card">
            <div className="Title">{params.titulo}</div>
            <div className="Content">{params.children}</div>
        </div>
    )
}