// Funzione per salvare un valore nel localStorage
function salvaValore(chiave, valore) {
    sessionStorage.setItem(chiave, valore);
    console.log(`Valore salvato nel localStorage: ${chiave} = ${valore}`);
  }
  
  // Funzione per recuperare un valore dal sessionStorage
  function recuperaValore(chiave) {
    const valore = sessionStorage.getItem(chiave);
    console.log(`Valore recuperato dal localStorage: ${chiave} = ${valore}`);
    return valore;
  }
  
  // Funzione per rimuovere un valore dal sessionStorage
  function rimuoviValore(chiave) {
    sessionStorage.removeItem(chiave);
    console.log(`Valore rimosso dal localStorage: ${chiave}`);
  }
  
  // Salvare un valore nel localStorage
  salvaValore('Utente', 'vincent Santana');
  
  // Recuperare il valore dal localStorage
  const valoreRecuperato = recuperaValore('Utente');
  
  // Rimuovere il valore dal localStorage
  rimuoviValore('');