import React, { useReducer, useState } from "react"
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from "../../components/layout/SectionTitle"
import UseReducerEx1 from "./UseReducerEx1"
import UseReducerDesafio from "./UseReducerDesafio"

interface Props { }

export default function UseReducer(props: Props) {

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <SectionTitle title="Exercício #01" />
            <UseReducerEx1 />

            <SectionTitle title="Desafio #01" />
            <UseReducerDesafio />
        </div >
    )
}
