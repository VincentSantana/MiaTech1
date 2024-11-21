const expenses = [1,2,3,4,5,6,7,8,9]

let spesa = expenses.reduce((accumulatore, valorecorrente) => {
    return accumulatore + valorecorrente
}, 0)

console.log(spesa)

const words = [
    "banana", "apple", "cherry","date"
]

words.sort();

console.log(words)