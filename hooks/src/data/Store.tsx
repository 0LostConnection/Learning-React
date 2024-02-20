import React, { PropsWithChildren, useState } from "react"

export const initialState = {
    number: 123,
    text: "Context API + Hooks"
}

type AppContextType = {
    number: number
    text: string
    setNumber: (n: number) => void,
    setText: (t: string) => void
}

export const AppContext = React.createContext<AppContextType>({
    ...initialState,
    setNumber: () => { },
    setText: () => { }
})

interface Props extends PropsWithChildren { }

export default function Store(props: Props) {
    const [state, setState] = useState(initialState)

    function updateState(key: string, newValue: any) {
        setState({
            ...state,
            [key]: newValue
        })
    }

    return (
        <AppContext.Provider value={{
            number: state.number,
            text: state.text,
            setNumber: (n: number) => updateState('number', n),
            setText: (t: string) => updateState('text', t)
        }}>
            {props.children}
        </AppContext.Provider>

    )
}