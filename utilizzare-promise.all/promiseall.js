function primaPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            risultato1 = valore * valore2;
            resolve('Prima Promise: ' + risultato1);
        }, 1000);
    });
}

function secondaPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            risultato2 = valore + valore2;
            resolve('Seconda Promise: ' + risultato2);
        }, 2000);
    });
}

const valore = 10;
const valore2 = 5;

Promise.all([
    primaPromise(), 
    secondaPromise()])
    .then((risultati) => {
        console.log(risultati);
    })
    .catch((error) => {
        console.error(error);
    }); 