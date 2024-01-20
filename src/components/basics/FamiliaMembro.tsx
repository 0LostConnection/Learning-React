import React from 'react'

interface Parameters {
    name: string
    surname?: string
}

export default function FamiliaMembro(params: Parameters) {
    return (
        <div>
            {params.name} <strong>{params.surname}</strong>
        </div>
    )
}