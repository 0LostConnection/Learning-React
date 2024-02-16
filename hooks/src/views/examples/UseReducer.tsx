import React from "react"
import PageTitle from '../../components/layout/PageTitle'

interface Props { }

export default function NotFound(props: Props) {
    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
        </div>
    )
}