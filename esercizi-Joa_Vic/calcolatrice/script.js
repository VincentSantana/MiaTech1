function calcolatrice(num1, num2, operazione) {
    let risultato;

    switch(operazione) {
        case "+":
            risultato = num1 + num2;
            break;
        case "-":
            risultato = num1 - num2;
            break;
        case "*":
            risultato = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                return "Errore: divisione per zero!";
            } else {
                risultato = num1 / num2;
            }
            break;
        default:
            return "Operazione non valida!";
    }

    return risultato;
}

console.log(calcolatrice(10, 5, "+")); 
console.log(calcolatrice(10, 5, "-")); 
console.log(calcolatrice(10, 5, "*")); 
console.log(calcolatrice(10, 4, "/")); 
console.log(calcolatrice(10, 0, "/")); 
console.log(calcolatrice(10, 5, "%")); 
