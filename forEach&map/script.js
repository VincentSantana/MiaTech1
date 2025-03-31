let numbers = [1, 2, 3, 4, 5]

numbers.forEach(function (i) {
    console.log(i * 2)
})

let squaredNumbers = numbers.map(function (item) {
    return item ** 2
})

console.log(squaredNumbers)