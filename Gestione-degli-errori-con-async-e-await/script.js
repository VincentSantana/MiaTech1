

async function richiestaDati() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Si è verificato un errore:', error);
    }
    
}

richiestaDati();