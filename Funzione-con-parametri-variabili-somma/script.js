function somma(...numeri) {

    return numeri.reduce((accumulatore, numero) => accumulatore + numero, 0);
}


console.log(somma(1, 2, 3));          
console.log(somma(10, 20, 30, 40));   
console.log(somma(25, 35, 45, 55, 65));                 
console.log(somma(5, 15, 25, 35, 45));
