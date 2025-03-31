function promessaBooleana() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (boolean == true) {
                resolve("Promessa risolta con successo!");
              } else {
                reject("Promessa rifiutata a causa di un errore.");
              }
        }, 1000);
    })
}

const boolean = true;

promessaBooleana(true)
  .then((messaggio) => {
    console.log("Successo:", messaggio);
  })
  .catch((errore) => {
    console.error("Errore:", errore);
  });