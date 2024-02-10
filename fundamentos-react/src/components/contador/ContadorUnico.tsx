import "./Contador.css"
import React, { Component } from "react"

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

    setPasso = (e) => {
        this.setState({
            passo: Number(e.target.value)
        })
    }

    render() {
        return (
            <div className="Container">
                <div className="Contador">
                    <h2>Número:</h2>
                    <h2 className="Numero">{this.state.numero}</h2>
                </div>
                <div className="Passo">
                    <label htmlFor="passoInput">Passo: </label>
                    <input id="passoInput" type="number" value={this.state.passo} onChange={this.setPasso} />
                </div>
                <div className="Buttons">
                    <button onClick={this.increment}>+</button>
                    <button onClick={this.decrement}>-</button>
                </div>


            </div>
        )
    }
}