//creazione della funzione che restituisce una promessa
function promessaConMessaggio() { //true, false
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (number == 10) {
            resolve("La promessa è stata risolta dopo 2 secondi!");}
            else {
                reject("La promessa non é stata risolta");
            }
        }, 2000);
    });
}

let number = 10;

//lancio il risultato della promessa
promessaConMessaggio().then(
    function (messaggio) {
        console.log(messaggio);
    }).catch(function (error) { //se la promessa viene rifiutata questa funzione viene eseguita

        console.error(error)
    }).finally(function () {
        console.log("operazioni completate")
    })