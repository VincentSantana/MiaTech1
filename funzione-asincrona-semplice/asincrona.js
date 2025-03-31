//creata una funzione asincrona
async function promessaPrima() {
    //creazione della promessa
    const promessa = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Prima funzione async Semplice risolta dopo 2 secondi");
        }, 2000);//risolve la promessa dopo 2 secondi
    });

    //gestione della promessa con await e try catch
    try {
        const risoltato = await promessa;
        console.log(risoltato);
    } catch (error) {
        console.error(error);
    }
}

 // Chiamata alla funzione per risolverka
 promessaPrima();