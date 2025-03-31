try {
  const divisore = 0;
  const risultato = 10 / divisore;
  console.log(risultato);
} catch (err) {
  console.error('Errore:', err.message);
} finally {
  console.log('Operazione completata');
}