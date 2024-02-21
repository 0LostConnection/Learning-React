/*
 action1: n * 7
 action2: n / 25 
 action3: parse int
 action4: add newN
 */
import React, { useReducer } from "react"

interface Action {
    payload?: number
    type: 'updateNumberOne' | 'updateNumberTwo' | 'mutiplyBy7' | 'divideBy25' | 'floor'
}

const initialState = {
    displayValue: 0,
    numberOne: 0,
    numberTwo: 0,
}

function reducer(state: typeof initialState, action: Action) {
    switch (action.type) {
        case 'updateNumberOne':
            return { ...state, numberOne: action.payload || 0 }
        case 'updateNumberTwo':
            return { ...state, numberTwo: action.payload || 0 }
        case 'mutiplyBy7':
            return { ...state, displayValue: state.numberOne * 7 }
        case 'divideBy25':
            return { ...state, displayValue: state.numberOne / 25 }
        case 'floor':
            return { ...state, displayValue: Math.floor(state.displayValue) }
        default:
            return state
    }
}

interface Props { }

export default function UseReducerDesafio(props: Props) {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div className="center">
            <div>
                <span className="text">Resultado: </span>
                <span className="text red">{state.displayValue + state.numberTwo}</span>
            </div>
            <div>
                <span className="text">Número 1: </span>
                <input type="number" className="input"
                    value={state.numberOne}
                    onChange={e => dispatch({ type: 'updateNumberOne', payload: parseInt(e.target.value) })} />
            </div>
            <div>
                <span className="text">Número 2: </span>
                <input type="number" className="input"
                    value={state.numberTwo}
                    onChange={e => dispatch({ type: 'updateNumberTwo', payload: parseInt(e.target.value) })} />

            </div>
            <div>
                <button className="btn" onClick={() => dispatch({ type: 'mutiplyBy7' })}>N¹ x 7</button>
                <button className="btn" onClick={() => dispatch({ type: 'divideBy25' })}>N¹ / 25</button>
                <button className="btn" onClick={() => dispatch({ type: 'floor' })}>Floor</button>
            </div>
        </div>
    )
}