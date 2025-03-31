//non rompe il flusso del programma
try {
  const divisore = 0;
  const numb = 10;

  //controllo che il divisore non sia zero
  if (divisore === 0) {
    throw new Error('Divisore non valido');// throw serve per lanciare un'eccezione, se la condizione è verificata, l'eccezione viene gestita dal blocco catch
  }
  //operazione con il divisore
  console.log(numb / divisore);
  
} catch (err) {
  console.error('Errore: il divisore non può essere zero');
}

console.log('Il programma continua...');