// Dichiarare variabili per il nome, cognome, età e città
const nome = 'Vincent';
const cognome = 'Santana';
const eta = 27;
const citta = 'Lurate Caccivio';

// Creare una stringa multilinea che le combini utilizzando i template literals
const persona = `
  Nome: ${nome}
  Cognome: ${cognome}
  Età: ${eta} anni
  Città: ${citta}
`;

console.log(persona);