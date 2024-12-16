async function datiApi() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        data.forEach(user => { //per cercare la mail di ogni utente
            
            console.log(user.email);
        })
       
    } catch (error) {
        console.error('Si è verificato un errore:', error);
    }
}

datiApi();