import React, { useReducer } from "react"
import { reducer, initialState } from "../../store/config"
import { numberAdd2 } from "../../store/actions/number"

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
                    onClick={() => numberAdd2(dispatch)}> +2</button>
            </div>
        </div>
    )
}