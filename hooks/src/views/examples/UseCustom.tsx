import React from "react"
import PageTitle from '../../components/layout/PageTitle'

interface Props { }

export default function UseCustom(props: Props) {
    return (
        <div className="UseCustom">
            <PageTitle
                title="Seu Hook"
                subtitle="Vamos aprender como criar o nosso próprio Hook!"
            />
        </div>
    )
}