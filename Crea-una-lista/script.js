//selezionato il ol
const list = document.getElementsByTagName("ol")[0];

//creazione della lista li
const li = document.createElement("li");

//aggiunta del testo
li.innerText = "Elemento 1";

//conessione del li all'ol
list.appendChild(li);