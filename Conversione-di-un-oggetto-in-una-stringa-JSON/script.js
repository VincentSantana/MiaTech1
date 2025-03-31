const oggetto = {
  nome: 'Vincent',
  cognome: 'Santana',
  eta: 27,
  indirizzo: {
    via: 'Via Roma',
    numero: 12,
    citta: 'lurate caccivio'
  }
};

const stringaJson = JSON.stringify(oggetto);

console.log(stringaJson);