import React from "react"

interface Props {
    title: string
}

export default function SectionTitle(props: Props) {
    return (
        <div className="SectionTitle">
            <h3>{props.title}</h3>
        </div>
    )
}