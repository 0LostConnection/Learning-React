import React from "react"
import PageTitle from '../../components/layout/PageTitle'

interface Props { }

export default function UseMemo(props: Props) {
    return (
        <div className="UseMemo">
            <PageTitle
                title="Hook UseMemo"
                subtitle="Retorna um valor memoizado!"
            />
        </div>
    )
}