/*
Gerar um número único aleatório em uma array entre 01 e 60
Input especificando quantos números gerar 
*/
const getNumber = (quantity, maxNumber = 60, minNumber = 1) => {
    let numberArray = []

    if (maxNumber < quantity) return

    while (numberArray.length < quantity) {
        const newNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber

        if (!numberArray.includes(newNumber)) numberArray.push(newNumber)
    }

    console.log(numberArray);
}

getNumber(5)