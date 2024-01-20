import React from 'react'

import './index.css'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'

export default function App() {
    return (
        <>
            <h1 className='Title'>Fundamentos React</h1>

            <Card titulo="Desafio: Aleatório">
                <Aleatorio min={1} max={100} />
            </Card>

            <Card titulo="React Fragment">
                <Fragmento />
            </Card>

            <Card titulo="Componente com Parâmetros">
                <ComParametro titulo="Segundo Componente!" subtitulo="Muito Legal!" />
            </Card>

            <Card titulo="Primeiro Componenete">
                <Primeiro />
            </Card>

        </>
    )
}