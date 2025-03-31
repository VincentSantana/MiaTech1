//in questo caso si utilizza fetch per effetturare una richiesta GET a un'API pubblica(ricevo dei dati)
async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        console.log(data);// stampa i dati restituiti dall'API
    } catch (error) {
        console.error('Si è verificato un errore:', error); //gestisce l'errore
    }
}

fetchData();



//un altro modo per farlo visto su Codeium, mi serve come seconda opzione

/*function fetchDati() {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Errore:', error));
}

fetchDati();*/