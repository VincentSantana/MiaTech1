function primaPromessa() {
    return new Promise((resolve, reject) => {
        setTimeout(() => 
            resolve('Prima promessa risolta'), 1000);
    })
}

function secondaPromessa() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Errore nella promessa rifiutata');
          }, 2000);
        });
}

function terzaPromessa() {
    return new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve('Terza promessa risolta');
      }, 3000);
    });
}

Promise.allSettled([primaPromessa(), secondaPromessa(), terzaPromessa()])
    .then(result => console.log(result))