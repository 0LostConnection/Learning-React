import React, { useReducer } from "react"

interface User {
    id?: number
    name?: string
}

interface Action {
    type: string
    payload?: string
}

const initialState = {
    cart: [],
    featuredProducts: [],
    user: null as User | null,
    number: 0
}

function reducer(state: typeof initialState, action: Action) {
    switch (action.type) {
        case 'number:add2':
            return { ...state, number: state.number + 2 }
        case 'login':
            return { ...state, user: { id: 123, name: action.payload } as User }
        default:
            return state
    }
}

interface Props { }

export default function UseReducerEx1(props: Props) {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="center">
            <span className="text">
                {state.user ?
                    <span className="text">{state.user.name}</span>
                    :
                    <span className="text">Sem Usuário!</span>
                }
            </span>
            <span className="text">{state.number}</span>

            <div>
                <button className="btn"
                    onClick={() => dispatch({ type: 'login', payload: 'Geovane Saraiva da Silva' })}>Logar</button>

                <button className="btn"
                    onClick={() => dispatch({ type: 'number:add2' })}> +2</button>
            </div>
        </div>
    )
}