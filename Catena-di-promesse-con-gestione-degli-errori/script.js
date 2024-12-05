function generaPromessaCasuale() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (esito > 10) {
                resolve(`Numero: ${esito}`);
            } else {
                reject("Errore: il valore casuale è troppo basso.");
            }
        }, 1000);
    });
}

const esito = 15;

generaPromessaCasuale()
    .then((risultato) => { //resolve
        console.log(risultato);
        return `Risultato manipolato: ${risultato} + 100`;
    })
    .then((risultatoManipolato) => {
        console.log(risultatoManipolato);
    })
    .catch((errore) => {//reject
        console.error(`Promessa rifiutata: ${errore}`);
    });
