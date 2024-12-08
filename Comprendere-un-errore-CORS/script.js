async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);// stampa i dati restituiti dall'API
    } catch (error) {
        console.error('Si è verificato un errore:', error); //gestisce l'errore
    }
}

fetchData();

/* lo script tenta di fare una richiesta GET all'API pubblica https://api.example.com/data. 
Tuttavia, l'API non supporta CORS, quindi il browser non permetterà di eseguire la richiesta.*/