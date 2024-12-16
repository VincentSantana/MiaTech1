// Selezionare tutti gli elementi con la classe "tab-box"
const $containers = document.querySelectorAll('.tab-box');

// Selezionare tutti gli elementi tab__header
const li = document.querySelectorAll('.tab__header');

// Selezionare tutti gli elementi con la classe "tab__body"
const bloque = document.querySelectorAll('.tab__body');

// Aggiungere un evento di click a ogni elemento tab__header
li.forEach((li, index) => {
  li.addEventListener('click', () => {
    // Nascondere tutti gli elementi con la classe "tab__body"
    bloque.forEach((bloque) => {
      bloque.classList.add('active');
    });
    
    // Mostrare solo l'elemento con la classe "tab__body" corrispondente
    bloque[index].classList.remove('active');

    // Rimuovere la classe "active" da tutti gli elementi tab__header
    li.forEach((li) => {
      li.classList.remove('active');
    });

    // Aggiungere la classe "active" all'elemento tab__header corrispondente
    li.classList.add('active');
  });
});