// Funzione per salvare un valore nel localStorage e nel sessionStorage
function salvaValore(chiave, valore) {
    localStorage.setItem(chiave, valore);
    sessionStorage.setItem(chiave, valore);
    console.log(`Valore salvato nel localStorage e sessionStorage: ${chiave} = ${valore}`);
  }
  
  // Funzione per recuperare un valore dal localStorage e sessionStorage
  function recuperaValore(chiave) {
    const valore = localStorage.getItem(chiave);
    const valore1 = sessionStorage.getItem(chiave);
    console.log(`Valore recuperato dal localStorage e sessionStorage: ${chiave} = ${valore}`);
    return valore, valore1;
  }
  
  // Funzione per rimuovere un valore dal localStorage e dal sessionStorage
  function rimuoviValore(chiave) {
    localStorage.removeItem(chiave);
    sessionStorage.removeItem(chiave);
    console.log(`Valore rimosso dal localStorage e sessionStorage: ${chiave}`);
  }
  
  // Salvare un valore nel localStorage e nel sessionStorage
  salvaValore('Utente', 'vincent Santana');
  
  // Recuperare il valore dal localStorage e sessionStorage
  const valoreRecuperato = recuperaValore('Utente');
  
  // Rimuovere il valore dal localStorage e dal sessionStorage
  rimuoviValore('');