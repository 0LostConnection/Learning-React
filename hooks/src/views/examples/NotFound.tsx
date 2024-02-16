import React from "react"
import PageTitle from '../../components/layout/PageTitle'

interface Props { }

export default function NotFound(props: Props) {
    return (
        <div className="Home">
            <PageTitle error
                title="404"
                subtitle="Opss... Página Não Encontrada!" />
        </div>
    )
}