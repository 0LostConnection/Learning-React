import React from "react"
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from "../../components/layout/SectionTitle"
import { useCounter } from "../../hooks/useCounter"
import { useFetch } from "../../hooks/useFetch"

interface Props { }

export default function UseCustom(props: Props) {
    const [count, inc, dec] = useCounter()

    const url = 'http://files.cod3r.com.br/curso-react/estados.json'
    const response = useFetch(url)

    function showStates(states: any) {
        return states.map((state: any) => <li key={state.nome}>{state.nome} - {state.sigla}</li>)
    }

    return (
        <div className="UseCustom">
            <PageTitle
                title="Seu Hook"
                subtitle="Vamos aprender como criar o nosso próprio Hook!"
            />

            <SectionTitle title="Ecercício #01" />
            <div className="center">
                <span className="text">{count}</span>

                <div>
                    <button className="btn" onClick={() => inc()}>+1</button>
                    <button className="btn" onClick={() => dec()}>-1</button>
                </div>
            </div>

            <SectionTitle title="Ecercício #01" />
            <div className="center">
                <ul>
                    {response.data ? showStates(response.data) : false}
                </ul>
            </div>
        </div>
    )
}