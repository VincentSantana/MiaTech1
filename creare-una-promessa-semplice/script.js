//creazione della funzione che restituisce una promessa
let promessaConMessaggio = new Promise(function(resolve, reject) {
      setTimeout(() => {
        resolve("La promessa è stata risolta dopo 2 secondi!");
      }, 2000);
    });
  
  //lancio il risultato della promessa
  promessaConMessaggio.then(
    function(messaggio) {
      console.log(messaggio);
    });
  