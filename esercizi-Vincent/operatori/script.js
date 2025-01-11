// operadores de asignacion

let  resultado = 5;

//es como si fuera una suma 5+5
resultado += 5
//es una resta 5 - 6
resultado -= 6;
//es una multiplicacion 5 * 5
resultado *= 5;
//una simple division 5 / 5
resultado /= 5;

console.log(resultado);

// operadores de comparacion

//iguales
console.log(5 == 5);
console.log(5 == 6);
// diferentes
console.log(5 != 6);
//verifica el tipo de dato y tambien el valor
console.log(5 === 5);
//verifica si son iguales en este caso son diferentes y por eso es true
console.log(5 !== 6);
console.log(5 > 6);

// operadores ternario y mas importante

// en este caso me estoy preguntando si 30 es igual a 30
                             //true                  false
let resultado1 = (30===30) ? "si son iguales" : "no son iguales"
console.log(resultado1); 