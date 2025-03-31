function promessaConNumero() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(5); // risolve la promessa con un numero  dopo 1 secondo
    }, 1000);
  });
}

promessaConNumero()
  .then((numero) => {
    return numero * 2; // moltiplica il numero per 2
  })
  .then((risultato) => {
    return risultato + 3; // aggiunge 3 al risultato
  })
  .then((risultatoFinale) => {
    console.log(risultatoFinale); // stampa il risultato finale
  });