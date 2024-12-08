//Funzione che salva i cookies
function salvaCookie(nome, valore) {
    const data = new Date();
    data.setTime(data.getTime() + (30 * 24 * 60 * 60 * 1000));
    document.cookie = `${nome}=${valore}; expires=${data.toUTCString()}; path=/`;
    console.log(`Cookie salvato: ${nome} = ${valore}`);
}

// Funzione per recuperare un cookie
function recuperaCookie(nome) {
    const cookie = document.cookie;
    const cookieArray = cookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
      const cookieNome = cookieArray[i].trim().split('=')[0];
      const cookieValore = cookieArray[i].trim().split('=')[1];
      if (cookieNome === nome) {
        console.log(`Cookie recuperato: ${nome} = ${cookieValore}`);
        return cookieValore;
      }
    }
    console.log(`Cookie non trovato: ${nome}`);
    return null;
  }

// Funzione per rimuovere un cookie
function rimuoviCookie(nome) {
    document.cookie = `${nome}`;
    console.log(`Cookie rimosso: ${nome}`);
  }

// Salvare un cookie
salvaCookie("Buongiorno", "qui si parla italiano");

// Recuperare il cookie
const valoreCookie = recuperaCookie('nomeUtente');

// Rimuovere il cookie
rimuoviCookie('Vincent');

console.log("cookies:", document.cookie);