import { initialState, User } from "../config"

interface Action {
    type: string
    payload?: string
}

export default function reducer(state: typeof initialState, action: Action) {
    switch (action.type) {
        case 'numberAdd2':
            return { ...state, number: state.number + 2 }
        case 'login':
            return { ...state, user: { id: 123, name: action.payload } as User }
        default:
            return state
    }
}