import React, { Component } from "react"

interface Props {
    numeroInicial: number
}
interface State {
    numero: number
}

export default class Contador extends Component<Props, State> {
    constructor(props) {
        super(props)

        this.state = {
            numero: props.numeroInicial
        }
        //this.increment = this.increment.bind(this)
    }

    increment = () => {
        this.setState({
            numero: this.state.numero + 1
        })
    }

    decrement = () => {
        this.setState({
            numero: this.state.numero - 1
        })
    }

    render() {
        return (
            <div>
                <h2>Contador</h2>
                <h3>{this.state.numero}</h3>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </div>
        )
    }
}