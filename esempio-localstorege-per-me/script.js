// i dati rimangono sempre
const elementButton = document.getElementById('set-button'); //prende solo l'id
const elementPizza = document.getElementById('Pizza');// prende solo l'id

/*codice che prende dal local storage il gusto della pizza preferita
e eseguito direttamente quando la pagina viene caricata*/
const pizzaName = localStorage.getItem('favoritePizza') || '';
elementPizza.innerText = pizzaName;


elementButton.addEventListener("click", function() {
    //codice che conserva nel locale storage il mio nuovo gusto di pizza favorito
    // e eseguito quando l'utente clicca sul bottone
    const favoritePizza = prompt("Qual'e la pizza preferita?", "Piazza")
    localStorage.setItem('favoritePizza', favoritePizza);
    elementPizza.innerText = favoritePizza;
})

/* QUESTO CODICE sessionStorage è UGUALE AL localStorage MA SI CANCELLA IN AUTOMATICO

const elementButton = document.getElementById('set-button'); //prende solo l'id
const elementPizza = document.getElementById('Pizza');// prende solo l'id

codice che prende dal local storage il gusto della pizza preferita
e eseguito direttamente quando la pagina viene caricata
const pizzaName = sessionStorage.getItem('favoritePizza') || '';
elementPizza.innerText = pizzaName;


elementButton.addEventListener("click", function() {
    //codice che conserva nel locale storage il mio nuovo gusto di pizza favorito
    // e eseguito quando l'utente clicca sul bottone
    const favoritePizza = prompt("Qual'e la pizza preferita?", "Piazza")
    sessionStorage.setItem('favoritePizza', favoritePizza);
    elementPizza.innerText = favoritePizza;
})*/