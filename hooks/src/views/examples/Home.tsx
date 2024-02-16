import React from "react"

import PageTitle from '../../components/layout/PageTitle'

interface Props { }

export default function Home(props: Props) {
    return (
        <div className="Home">
            <PageTitle
                title="Módulo Hooks"
                subtitle="Hooks são uma nova adição ao React 16.8." />
        </div>
    )
}