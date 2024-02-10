import React from 'react'

import './App.css'
import Primeiro from './components/basics/Primeiro'
import ComParametro from './components/basics/ComParametro'
import Fragmento from './components/basics/Fragmento'
import Aleatorio from './components/basics/Aleatorio'
import Card from './components/layout/Card'
import Familia from './components/basics/Familia'
import FamiliaMembro from './components/basics/FamiliaMembro'
import ListaAlunos from './components/repeticao/ListaAlunos'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ParOuImpar from './components/condicional/ParOuImpar'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import DiretaPai from './components/comunicacao/DiretaPai'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import InputForm from './components/formulario/InputForm'
import Contador from './components/contador/Contador'

export default function App() {
    return (
        <div className='App'>
            <h1 className='Title'>Fundamentos React</h1>
            <div className='Cards'>
                {/* Contador */}
                <Card titulo='Contador (Classe)' color='#c5383c'>
                    <Contador numeroInicial={10} />
                </Card>

                {/* Componente Controlado Input */}
                <Card titulo='Compinente Controlado (Input)' color='#dda7c4'>
                    <InputForm></InputForm>
                </Card>

                {/* Comunicação Indireta */}
                <Card titulo='Comunicação Indireta entre Componentes' color='#f25022'>
                    <IndiretaPai></IndiretaPai>
                </Card>


                {/* Comunicação Direta */}
                <Card titulo='Comunicação Direta entre Componentes' color='#7fba00'>
                    <DiretaPai></DiretaPai>
                </Card>

                {/* Renderização Condicional */}
                <Card titulo='Renderização Condicional' color='#512245'>
                    <UsuarioInfo usuario={{ name: 'Geovane' }} />
                    <ParOuImpar number={21} />
                </Card>

                {/* Desafio: Tabela de Produtos */}
                <Card titulo='Desafio: Tabela de Produtos' color='#8e5cff'>
                    <TabelaProdutos></TabelaProdutos>
                </Card>

                {/* Lista Alunos */}
                <Card titulo='Lista Alunos' color='#5db2aa'>
                    <ListaAlunos></ListaAlunos>
                </Card>

                {/* Família */}
                <Card titulo='Família' color='#fb8500'>
                    <Familia surname="Saraiva">
                        <FamiliaMembro name='Geovane' />
                        <FamiliaMembro name='Pedro' />
                        <FamiliaMembro name='Amanda' />
                        <FamiliaMembro name='Gustavo' />
                    </Familia>
                </Card>

                {/* Desafio Aleatório */}
                <Card titulo="Desafio: Aleatório" color='#5865f2'>
                    <Aleatorio min={1} max={100} />
                </Card>

                {/* React Fragment */}
                <Card titulo="React Fragment" color='#c1121f'>
                    <Fragmento />
                </Card>

                {/* Componente com Parâmetros */}
                <Card titulo="Componente com Parâmetros" color='#a8dadc' fontColor='black'>
                    <ComParametro titulo="Segundo Componente!" subtitulo="Muito Legal!" />
                </Card>

                {/* Primeiro Componente */}
                <Card titulo="Primeiro Componenete" color='#ffb703' fontColor='black'>
                    <Primeiro />
                </Card>
            </div>
        </div>
    )
}