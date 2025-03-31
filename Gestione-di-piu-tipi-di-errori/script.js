try {
  const stringa = null;
  const lunghezza = stringa.length;
  console.log(lunghezza);
} catch (err) {
  if (err instanceof TypeError) {
    console.error('Errore di tipo: la variabile non è una stringa');
  } else {
    console.error('Errore generico:', err.message);
  }
}