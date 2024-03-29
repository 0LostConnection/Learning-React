import "./Contador.css"
import React, { Component } from "react"

import Display from "./components/Display"
import Botoes from "./components/Botoes"
import PassoForm from "./components/PassoForm"

interface Props {
    numeroInicial: number
}
interface State {
    numero: number
    passo: number
}

export default class Contador extends Component<Props, State> {
    constructor(props) {
        super(props)

        this.state = {
            numero: props.numeroInicial,
            passo: props.passo || 1
        }
        //this.increment = this.increment.bind(this)
    }

    increment = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    decrement = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    setPasso = (novoPasso) => {
        this.setState({
            passo: Number(novoPasso)
        })
    }

    render() {
        return (
            <div className="Container">
                <Display numero={this.state.numero} />

                <PassoForm passo={this.state.passo} setPasso={this.setPasso} />

                <Botoes onInc={this.increment} onDec={this.decrement} />
            </div>
        )
    }
}