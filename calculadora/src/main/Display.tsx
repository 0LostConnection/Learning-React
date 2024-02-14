import './Display.css'
import React from "react"

interface Props {
    value: any
}

export default function Display(props: Props) {
    return (
        <div className="Display">
            {props.value}
        </div>
    )
}