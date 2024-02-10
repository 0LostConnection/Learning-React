import React, { useState } from "react"
import IndiretaFilho from "./IndiretaFilho"

export default function IndiretaPai(props) {
    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState(0)
    let [nerd, setNerd] = useState(false)
    // nome idade nerd

    function fornecerInfo(nome, idade, nerd) {
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)
    }

    return (
        <div>
            <div>
                <span>{nome} </span>
                <span>{idade} </span>
                <span>{nerd ? 'Sim' : 'Não'}</span>
            </div>
            <IndiretaFilho onClick={fornecerInfo} />
        </div>
    )
}