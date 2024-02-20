import React from "react"

export const data = {
    number: 123,
    text: 'Context API...'
}

type DataContextType = {
    state: typeof data
    setState: React.Dispatch<React.SetStateAction<typeof data>>
}

const DataContext = React.createContext<DataContextType>({
    state: data,
    setState: () => { }
})

export default DataContext