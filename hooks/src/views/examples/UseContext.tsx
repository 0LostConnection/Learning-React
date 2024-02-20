import React, { useContext } from "react"
import PageTitle from '../../components/layout/PageTitle'

import DataContext from "../../data/DataContext"

interface Props { }

export default function UseContext(props: Props) {
    const { state, setState } = useContext(DataContext)

    function addNumber(delta: number) {
        setState({ ...state, number: state.number + delta })
    }

    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />

            <div className="center">
                <span className="text">{state.text}</span>
                <span className="text">{state.number}</span>
            </div>

            <div className="center">
                <div>
                    <button className="btn"
                        onClick={() => addNumber(1)}>+1</button>
                    <button className="btn"
                        onClick={() => addNumber(-1)}>-1</button>
                </div>
            </div>

        </div>
    )
}