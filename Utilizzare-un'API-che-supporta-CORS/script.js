const apiUrl = 'https://api.github.com/users/octocat';

async function fetchDati() {
  try {
    const response = await fetch(apiUrl);
    const dati = await response.json();
    console.log(dati);
  } catch (error) {
    console.error('Errore:', error);
  }
}

fetchDati();