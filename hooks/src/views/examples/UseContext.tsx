import React from "react"
import PageTitle from '../../components/layout/PageTitle'

interface Props { }

export default function NotFound(props: Props) {
    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />
        </div>
    )
}