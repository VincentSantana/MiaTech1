// Dichiarare un array di oggetti rappresentante una lista di persone in formato JSON
const personeJson = '[{"nome":"Vincent","cognome":"Santana","eta":27},{"nome":"Victor","cognome":"Batista","eta":23},{"nome":"Joaquin","cognome":"Santana","eta":26}]';

// Convertire la stringa JSON in un array di oggetti JavaScript
const persone = JSON.parse(personeJson);

// Aggiungere una nuova persona all'array
persone.push({nome: "Ivelisse", cognome: "Batista", eta: 50});

// Riconvertire l'array aggiornato in una stringa JSON
const personeJsonAggiornato = JSON.stringify(persone);

// Stampare la stringa JSON aggiornata nella console
console.log(personeJsonAggiornato);