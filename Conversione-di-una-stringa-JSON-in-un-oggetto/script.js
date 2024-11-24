const stringaJson = '{"nome":"Vincent","cognome":"Santana","eta":27,"indirizzo":{"via":"Via Roma","numero":12,"citta":"Lurate Caccivio"}}';

const oggetto = JSON.parse(stringaJson);

console.log(oggetto);