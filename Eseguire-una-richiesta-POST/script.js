//serve per inviare dati all'API pubblica ed anche riceverli

async function inviaDati() {
  try {
    const dati = {//dati che sto inviando all'API pubblica
      title: 'Titolo del post',
      body: 'Corpo del post',
      userId: 1
    };

    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',// specifica il metodo della richiesta (in questo caso, POST)
      headers: {
        'Content-Type': 'application/json'// specifica il tipo di dati che sto inviando
      },
      body: JSON.stringify(dati) // converte l'oggetto dati in una stringa JSON
    });

    const data = await response.json(); //converte la risposta in formato JSON
    console.log(data); // stampa i dati restituiti dall'API
  } catch (error) {
    console.error('Errore:', error);
  }
}

inviaDati();