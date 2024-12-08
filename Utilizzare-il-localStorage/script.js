// Funzione per salvare un valore nel localStorage
function salvaValore(chiave, valore) {
  localStorage.setItem(chiave, valore);
  console.log(`Valore salvato nel localStorage: ${chiave} = ${valore}`);
}

// Funzione per recuperare un valore dal localStorage
function recuperaValore(chiave) {
  const valore = localStorage.getItem(chiave);
  console.log(`Valore recuperato dal localStorage: ${chiave} = ${valore}`);
  return valore;
}

// Funzione per rimuovere un valore dal localStorage
function rimuoviValore(chiave) {
  localStorage.removeItem(chiave);
  console.log(`Valore rimosso dal localStorage: ${chiave}`);
}

// Salvare un valore nel localStorage
salvaValore('Utente', 'vincent Santana');

// Recuperare il valore dal localStorage
const valoreRecuperato = recuperaValore('Utente');

// Rimuovere il valore dal localStorage
rimuoviValore('');