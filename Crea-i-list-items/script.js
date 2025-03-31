//selezionato il div
const list = document.getElementsByTagName("ol")[0];
console.log(list);
//creazione della lista ol 
const li = document.createElement("li");
const li1 = document.createElement("li");
const li2 = document.createElement("li");
const li3 = document.createElement("li");
const li4 = document.createElement("li");
const li5 = document.createElement("li");
//aggiunta del testo dei li
li.innerText = "Elemento 1";
li1.innerText = "Elemento 2";
li2.innerText = "Elemento 3";
li3.innerText = "Elemento 4";
li4.innerText = "Elemento 5";
li5.innerText = "Elemento 6";

//conessione dei li al div
list.appendChild(li);
list.appendChild(li1);
list.appendChild(li2);
list.appendChild(li3);
list.appendChild(li4);
list.appendChild(li5);