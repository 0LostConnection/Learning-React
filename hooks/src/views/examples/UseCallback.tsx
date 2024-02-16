import React from "react"
import PageTitle from '../../components/layout/PageTitle'

interface Props { }

export default function UseCallback(props: Props) {
    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!"
            />
        </div>
    )
}