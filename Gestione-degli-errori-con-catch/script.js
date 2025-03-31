function promessaRifiutata() {
    return new Promise((resolve, reject) => {
        reject("Promessa rifiutata");
    });
}

promessaRifiutata()
    .then((risultato) => {
        console.log(risultato);
    })
    .catch((errore) => {
        console.error(`Promessa rifiutata: ${errore}`);
    });