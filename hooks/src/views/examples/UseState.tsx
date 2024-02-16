import React from "react"
import PageTitle from '../../components/layout/PageTitle'

interface Props { }

export default function UseState(props: Props) {
    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />
        </div>
    )
}