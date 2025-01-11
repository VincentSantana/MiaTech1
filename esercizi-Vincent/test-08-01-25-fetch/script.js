const ul = document.querySelector("ul");

async function richiestaDati() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos');
        const dati = await res.json();

        /*for(let i = 0; i < dati.length ; i++) { //il for serve per fare la lista
           
            let li = document.createElement("li");
            
            li.innerHTML = `<p> ${dati[i].title}</p> <span>${dati[i].completed}</span>`;
            
            ul.appendChild(li);
        }*/

            //metodo degli array forEach:

            dati.forEach(Element => {
                ul.innerHTML += `<li> <p> ${Element.title}</p> <span>${Element.completed}</span> </li>`;
                
            });

    } catch(error){
        console.error(error);
    }
};

richiestaDati();