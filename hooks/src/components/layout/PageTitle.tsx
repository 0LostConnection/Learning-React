import "./PageTitle.css"
import React from "react"

interface Props { 
    title: string
    subtitle: string
    error?: boolean
}

export default function PageTitle(props: Props) {
    return (
        <div className={`PageTitle ${props.error ? "error" : ""}`}>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    )
}