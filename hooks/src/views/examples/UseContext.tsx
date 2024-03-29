import React, { useContext, useEffect } from "react"
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from "../../components/layout/SectionTitle"

import DataContext from "../../data/DataContext"
import { AppContext, initialState } from "../../data/Store"

interface Props { }

export default function UseContext(props: Props) {
    // Exercício #01
    const { state, setState } = useContext(DataContext)

    function addNumber(delta: number) {
        setState({ ...state, number: state.number + delta })
    }

    // Exercício #02
    const { text, setText, number, setNumber } = useContext(AppContext)

    useEffect(function() {
        if(number >= 130) {
            setText("Eita!!")
        } else {
            setText(initialState.text)
        }
    }, [number])

    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />

            <SectionTitle title="Exercício #01" />
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

            <SectionTitle title="Exercício #02" />
            <div className="center">
                <span className="text">{text}</span>
                <span className="text">{number}</span>
                <div>
                    <button className="btn"
                        onClick={() => setNumber(number + 1)}>+1</button>
                    <button className="btn"
                        onClick={() => setNumber(number - 1)}>-1</button>
                </div>
            </div>
        </div>
    )
}