import { useState } from "react"

export const useCounter = (initialValue: number = 10): [number, () => void, () => void] => {
    const [count, setCount] = useState(initialValue)

    function inc() {
        setCount(count + 1)
    }

    function dec() {
        setCount(count - 1)
    }

    return [count, inc, dec]
}
