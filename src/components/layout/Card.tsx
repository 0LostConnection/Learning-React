import React from 'react'

import './Card.css'

interface Parameters {
    titulo: string
    color?: any
    fontColor?: any
    children: any
}

export default function Card(params: Parameters) {
    const style = {
        backgroundColor: params.color || '#6c6c6c',
        borderColor: params.color || '#6c6c6c',
        color: params.fontColor || 'white'
    }

    return (
        <div className="Card" style={style}>
            <div className="Title">{params.titulo}</div>
            <div className="Content">{params.children}</div>
        </div>
    )
}