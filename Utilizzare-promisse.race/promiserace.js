function primaPromessa() {
    return new Promise((resolve, reject) => {
        setTimeout(() => 
            resolve('Prima promessa risolta'), 2000);
    })
}

function secondaPromessa() {
    return new Promise((resolve, reject) => {
        setTimeout(() => 
            resolve('Seconda promessa risolta'), 1000);
    })
}

Promise.race([primaPromessa(), secondaPromessa()]).then((risultato) => {
    console.log(risultato);
});