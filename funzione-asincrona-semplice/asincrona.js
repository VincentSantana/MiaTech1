async function promessaPrima() {
    setTimeout(() => {
        console.log('Prima funzione async Semplice risolta dopo 2 secondi');
    }, 2000);
}


async function risultatofunzione() {
    let risultato = await promessaPrima();//come se fosse un callback resolver della promessa
    console.log(risultato);
}

// Chiamata alla funzione
risultatofunzione();