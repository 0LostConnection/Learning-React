import reducer from "./reducers"

export interface User {
    id?: number
    name?: string
}

export const initialState = {
    cart: [],
    featuredProducts: [],
    user: null as User | null,
    number: 0
}

export { reducer }