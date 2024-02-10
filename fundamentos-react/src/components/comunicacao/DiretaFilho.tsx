import React from "react"

export default function DiretaFilho(props) {
    return (
        <div>
            <span><strong>Nome:</strong> {props.nome} </span>
            <span><strong>Idade:</strong> {props.idade} </span>
            <span><strong>Nerd:</strong> {props.nerd ? 'Sim' : 'Não'}!</span>
        </div>
    )
}