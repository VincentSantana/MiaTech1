const numeri = [10, 20, 30, 40];

const [...copia] = numeri;

numeri[0] = 100;

console.log(numeri);
console.log(copia);
