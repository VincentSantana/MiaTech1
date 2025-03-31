const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const apiUrl = 'https://api.example.com/data';

async function fetchDati() {
  try {
    const response = await fetch(proxyUrl + apiUrl);
    const dati = await response.json();
    console.log(dati);
  } catch (error) {
    console.error('Errore:', error);
  }
}

fetchDati();


//altro modo da fare su Codeium:

/*const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const apiUrl = 'https://api.example.com/data';

fetch(proxyUrl + apiUrl)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Errore:', error));*/