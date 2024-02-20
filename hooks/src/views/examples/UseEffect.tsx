import React, { useEffect, useState } from "react"
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from "../../components/layout/SectionTitle"

function calcFatorial(n: number): number {
    if (n < 0) return -1
    if (n === 0) return 1
    return n * calcFatorial(n - 1)
}

interface Props { }

export default function UseEffect(props: Props) {
    // Exercício #01
    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)

    useEffect(function () {
        setFatorial(calcFatorial(number))
    }, [number])

    // Exercício #02
    const [oddEven, setOddEven] = useState("")

    useEffect(function () {
        if (number < 0 ) return setOddEven('')
        setOddEven(number & 1 ? "Ímpar" : "Par")
    }, [number])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title="Exercício #01" />
            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{fatorial === -1 ? 'Não existe' : fatorial}</span>
                </div>
                <input
                    className="input"
                    type="number"
                    value={number}
                    onChange={e => setNumber(Number(e.target.value))}
                />
            </div>
            
            <SectionTitle title="Exercício #02" />
            <div className="center">
                <div>
                    <span className="text">Status: </span>
                    <span className="text red">{oddEven}</span>
                </div>
            </div>
        </div>
    )
}