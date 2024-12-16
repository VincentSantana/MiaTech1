// Selezionare tutti gli elementi con la classe "container"
const $containers = document.querySelectorAll('.container');

$containers.forEach(($container) => {// creo un ciclo per ogni container
  const btn = $container.querySelector('.btn');// Selezionare la classe btn che contiene il button
  let content = $container.querySelector('.hidden');// Selezionare il contenuto all'interno del container
  btn.addEventListener('click', function(event) {// Aggiungere un evento di click al button

    if(content.classList.contains('hidden')) {// controlla Se il contenuto è nascosto
      content.classList.remove('hidden');//se è veramente nascosto, rimuove la classe hidden
      content.classList.add('open');//e aggiunge la classe open
      content = $container.querySelector('.open');//e di conseguenza riassegna il contenuto alla variabile content
    }
    else {
      content.classList.add('hidden');// altrimenti se la condizione è falsa aggiunge la classe hidden nuovamente
      content.classList.remove('open');// e toglie la classe open
      content = $container.querySelector('.hidden');// e riassegna la variabile content
    }
  });
});