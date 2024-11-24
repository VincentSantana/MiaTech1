// Definire la funzione che restituisce una stringa formattata
function formattaPersona(persona) {
  return `
    Nome: ${persona.nome}
    Cognome: ${persona.cognome}
    Età: ${persona.eta} anni
    Città: ${persona.citta}
    Indirizzo: ${persona.indirizzo}
    Telefono: ${persona.telefono}
  `;
}

// Dichiarare un oggetto di esempio
const persona = {
  nome: 'Vincent',
  cognome: 'Santana',
  eta: 27,
  citta: 'Lurate Caccivio',
  indirizzo: 'Via Roma, 12',
  telefono: '3911755691'
};

// Chiamare la funzione e stampare la stringa risultante nella console
const risultato = formattaPersona(persona);
console.log(risultato);
