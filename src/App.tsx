import React from 'react'

import './App.css'
import Primeiro from './components/basics/Primeiro'
import ComParametro from './components/basics/ComParametro'
import Fragmento from './components/basics/Fragmento'
import Aleatorio from './components/basics/Aleatorio'
import Card from './components/layout/Card'
import Familia from './components/basics/Familia'
import FamiliaMembro from './components/basics/FamiliaMembro'

export default function App() {
    return (
        <div className='App'>
            <h1 className='Title'>Fundamentos React</h1>

            <div className='Cards' >
                <Card titulo='Família' color='#fb8500'>
                    <Familia surname="Saraiva">
                        <FamiliaMembro name='Geovane' />
                        <FamiliaMembro name='Pedro' />
                        <FamiliaMembro name='Amanda' />
                        <FamiliaMembro name='Gustavo' />
                    </Familia>
                </Card>

                <Card titulo="Desafio: Aleatório" color='#5865f2'>
                    <Aleatorio min={1} max={100} />
                </Card>

                <Card titulo="React Fragment" color='#c1121f'>
                    <Fragmento />
                </Card>

                <Card titulo="Componente com Parâmetros" color='#a8dadc' fontColor='black'>
                    <ComParametro titulo="Segundo Componente!" subtitulo="Muito Legal!" />
                </Card>

                <Card titulo="Primeiro Componenete" color='#ffb703' fontColor='black'>
                    <Primeiro />
                </Card>
            </div>
        </div>
    )
}