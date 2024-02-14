import './Button.css'
import React from "react"

interface Props {
    onClick?: Function
    label: string
    operation?: boolean
    double?: boolean
    triple?: boolean
}

export default function Button(props: Props) {
    let ButtonClasses = `Button ${props.operation ? 'operation' : ''} ${props.double ? 'double' : ''} ${props.triple ? 'triple' : ''}
    `
    return (
        <button
            onClick={e => props.onClick && props.onClick(props.label)}
            className={ButtonClasses}>
            {props.label}
        </button>
    )
}