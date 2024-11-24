const oggetto = {
  proprietà1: 'valore1',
  proprietà2: 'valore2',
  proprietà3: 'valore3',
  proprietà4: 'valore4',
  proprietà5: 'valore5'
};

const { proprietà1, proprietà2, ...restoProprietà } = oggetto;

console.log(proprietà1);
console.log(proprietà2); 
console.log(restoProprietà); 