import React from 'react'
import If from './If'

export default function UsuarioInfo(props) {
    const usuario = props.usuario || {}
    return (
        <div>
            <If test={usuario && usuario.name}>
                Seja bem-vindo(a) <strong>{usuario.name}</strong>!
            </If>
            <If test={!usuario || !usuario.name}>
                Seja bem-vindo(a) <strong>Anônimo</strong>!
            </If>
        </div>
    )
}  