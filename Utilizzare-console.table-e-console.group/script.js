// Dichiarare un array di oggetti
const dati = [
  { nome: 'Vincent', cognome: 'Santana', eta: 27 },
  { nome: 'Nicole', cognome: 'Cuevas', eta: 30 },
  { nome: 'Ivelisse', cognome: 'Batista', eta: 50 }
];

// Utilizzare console.table per stampare l'array di oggetti in formato tabella
console.table(dati);

// Utilizzare console.group per raggruppare messaggi della console
console.group('Informazioni sui dati');
console.log('Numero di elementi:', dati.length);
console.log('Tipo di dati:', typeof dati);
console.groupEnd();
