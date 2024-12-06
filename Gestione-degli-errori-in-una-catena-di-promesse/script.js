//funzione che risolve o rifiuta una promessa con un valore casuale
function promessaCasuale() {
    return new Promise((resolve, reject) => {
        if (valorecasuale % 2 === 0) { //numeri pari
            resolve(valorecasuale);
        } else {
            reject(`Promessa rifiutata: ${valorecasuale}`);
        }
    });
}

//crea dei numeri casuali dal 0 al 100
const valorecasuale = Math.floor(Math.random() * 100);

promessaCasuale()
    .then((risultato) => { //prima promessa che viene risolta
        console.log(`Promessa risolta: ${risultato}`);
    })
    .then((risultato) => { //seconda promessa che puo essere risolta o rifiutata
        console.log(`Risultato manipolato: ${valorecasuale} + 100`);
        return risultato + 100;
    })
    .catch((errore) => {
        console.error(`Promessa rifiutata: ${errore}`);
    });