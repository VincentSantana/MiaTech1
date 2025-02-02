//creare funzione che accetti un numero n
function numeriPrimi(n) {
    let primo = []; //array vuoto per memorizzare i numeri

    for (let i = 1; i <= n; i++) {
        //aggiungo i numeri al array con ciclo for
        primo.push(i);
    }

    return primo; //ritorno l'array con i numeri
}

console.log(numeriPrimi(15));
