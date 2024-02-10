import "./Mega.css"
import React, { useState } from "react"

export default function Mega(props) {
    const [displayTitle, setDisplayTitle] = useState('Clique para gerar os números!')
    const [luckyNumbers, setLuckyNumbers] = useState([0, 0, 0, 0, 0, 0])
    const [quantityInput, setQuantity] = useState(6)

    const getNumbers = (quantity, maxNumber = 60, minNumber = 1) => {
        let numberArray = []

        if (maxNumber < quantity) return

        while (numberArray.length < quantity) {
            const newNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber

            if (!numberArray.includes(newNumber)) numberArray.push(newNumber)
        }
        return numberArray
    }

    return (
        <div className="MegaContainer">
            <div className="MegaDisplay">
                <h2 id="title">{displayTitle}</h2>
                <h3 className="Number">{luckyNumbers ? luckyNumbers.join(' ') : ' '}</h3>
            </div>

            <div className="MegaQuantityInput">
                <label htmlFor="quantityInput">Quantidade:</label>
                <input
                    id="quantityInput"
                    value={quantityInput}
                    type="number"
                    onChange={(e) => setQuantity(Number(e.target.value))}
                />
            </div>

            <div className="MegaButtons">
                <button onClick={_ => {
                    setDisplayTitle('Seus números da sorte são:')
                    setLuckyNumbers(getNumbers(quantityInput))
                }}>
                    Gerar
                </button>
            </div>
        </div>
    )
}