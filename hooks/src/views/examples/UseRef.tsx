import React from "react"
import PageTitle from '../../components/layout/PageTitle'

interface Props { }

export default function UseRef(props: Props) {
    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />
        </div>
    )
}