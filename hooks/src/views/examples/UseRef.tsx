import React, { useEffect, useRef, useState } from "react"
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from "../../components/layout/SectionTitle"

interface Props { }

export default function UseRef(props: Props) {
    const merge = function (s1: any, s2: any) {
        return [...s1].map((e: any, i: any) => `${e}${s2[i] || ''}`).join("")
    }


    const [value1, setValue1] = useState("")

    const count = useRef(0)

    const myInput1 = useRef<HTMLInputElement>(null)
    const myInput2 = useRef<HTMLInputElement>(null)

    const [value2, setValue2] = useState("")

    useEffect(function () {
        count.current++
        myInput2.current?.focus()
    }, [value1])

    useEffect(function () {
        count.current++
        myInput1.current?.focus()
    }, [value2])


    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />

            <SectionTitle title="Exercício #01" />
            <div className="center">
                <div>
                    <span className="text">Valor: </span>
                    <span className="text">{merge(value1, value2)} [</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span>
                </div>

                <input type="text" className="input"
                    ref={myInput1}
                    value={value1}
                    onChange={e => setValue1(e.target.value)} />
            </div>

            <SectionTitle title="Exercício #02" />
            <div className="center">
                <input type="text" className="input"
                    ref={myInput2}
                    value={value2}
                    onChange={e => setValue2(e.target.value)} />
            </div>
        </div>
    )
}