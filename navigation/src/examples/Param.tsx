import React from "react"
import { useParams } from "react-router-dom"

interface Props { }

export default function Param(props: Props) {
    const { id } = useParams()

    return (
        <div className="Param">
            <h1>Param</h1>
            <p><strong>Valor:</strong> {id}</p>
        </div>
    )
}