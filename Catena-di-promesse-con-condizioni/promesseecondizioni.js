function generaNumero() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(numero);
        }, 1000);
    });
}

// assegna un valore alla variabile
const numero = 14;


 //lancio il risultato della promessa con condizioni
generaNumero().then((numero) => {
        console.log(`Numero generato: ${numero}`);
        if (numero % 2 === 0) {
            return numero * 2; // Raddoppia se è pari
        } else {
            return numero * 3; // Triplica se è dispari
        }
    })
    .then((numeroManipolato) => {
        console.log(`Numero manipolato: ${numeroManipolato}`);
    });
    
