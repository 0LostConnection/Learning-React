import './Calculator.css'
import React, { Component } from "react"

import Button from '../components/Button'
import Display from './Display'

interface Props { }

interface State {
    displayValue: any,
    clearDisplay: boolean,
    operation: any,
    values: number[],
    current: number
}

const initialState: State = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}

export default class Calculator extends Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = { ...initialState }

        this.clearMemory = this.clearMemory.bind(this)
        this._eval = this._eval.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }

    clearMemory() {
        this.setState({ ...initialState })
    }

    _eval(values: number[], currentOperation: any) {
        switch (currentOperation) {
            case '/':
                return values[0] / values[1]
            case '*':
                return values[0] * values[1]
            case '-':
                return values[0] - values[1]
            case '+':
                return values[0] + values[1]
            case '=':
                return values[0]
        }
    }

    setOperation(operation: any) {
        const currentOperation = this.state.operation
        const values = [...this.state.values]

        if (this.state.current === 0) {
            this.setState({ operation, current: 1, clearDisplay: true })
        } else {
            const equals = operation === '='

            values[0] = Number(this._eval(values, currentOperation))
            values[1] = 0

            this.setState({
                displayValue: values[0],
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: !equals,
                values
            })
        }
    }

    addDigit(n: any) {
        if (n === '.' && this.state.displayValue.includes('.')) return

        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay
        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + n

        this.setState({ displayValue, clearDisplay: false })

        if (n !== '.') {
            const currentIndex = this.state.current
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values]
            values[currentIndex] = newValue

            this.setState({ values })
        }
    }

    render() {
        return (
            <div className='Calculator'>
                <Display value={this.state.displayValue} />
                <Button label='AC' onClick={this.clearMemory} triple />
                <Button label='/' onClick={this.setOperation} operation />
                <Button label='7' onClick={this.addDigit} />
                <Button label='8' onClick={this.addDigit} />
                <Button label='9' onClick={this.addDigit} />
                <Button label='*' onClick={this.setOperation} operation />
                <Button label='4' onClick={this.addDigit} />
                <Button label='5' onClick={this.addDigit} />
                <Button label='6' onClick={this.addDigit} />
                <Button label='-' onClick={this.setOperation} operation />
                <Button label='1' onClick={this.addDigit} />
                <Button label='2' onClick={this.addDigit} />
                <Button label='3' onClick={this.addDigit} />
                <Button label='+' onClick={this.setOperation} operation />
                <Button label='0' onClick={this.addDigit} double />
                <Button label='.' onClick={this.addDigit} />
                <Button label='=' onClick={this.setOperation} operation />
            </div>
        )
    }
}