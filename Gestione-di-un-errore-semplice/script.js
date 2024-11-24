//non rompe il flusso del programma
try {
  const divisore = 0;
  const risultato = 10 / divisore;
  console.log(risultato);
} catch (err) {
  console.error('Errore: il divisore non può essere zero');
}

console.log('Il programma continua...');