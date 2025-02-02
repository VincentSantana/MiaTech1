//creare funzione che accetti un numero n
function numeriPrimi(n) {
    let primo = []; //array vuoto per memorizzare i numeri

    function primoN(num) { //verifica dei numeri 
        if (num < 2) return false; //verifica se un numero è primo controllando se è divisibile solo per 1 e se stesso.
        for (let i = 2; i <= Math.sqrt(num); i++) {//sqrt è il quadrato dei numeri
            if (num % i === 0) return false;
        }
        return true;
    }

    for (let i = 2; i <= n; i++) {
        if (primoN(i)) { //aggiungo i numeri al array
            primo.push(i);
        }
    }

    return primo; //ritorno l'array con i numeri
}

console.log(numeriPrimi(15));