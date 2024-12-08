async function primaPromessa(risolta) {//risolta sta per il parametro che determina se la promessa viene risolta o rifiutata
  try {
    const promessa = new Promise((resolve, reject) => {
      if (risolta) { //La funzione crea una promessa che può essere risolta o rifiutata in base al valore di risolta
        setTimeout(() => {
          resolve('Promessa risolta!');
        }, 1000);
      } else {
        setTimeout(() => {
          reject('Promessa rifiutata!');
        }, 1000);
      }
    });

    const risultato = await promessa;
    console.log(risultato);
  } catch (errore) {
    console.error('Errore:', errore);
  }
}
 
primaPromessa(false); 