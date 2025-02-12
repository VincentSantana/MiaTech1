const container = document.getElementById("container");
const carrelloList = document.getElementById("carrello");
const indietro = document.getElementById("indietro");

const state = {
    carrello: [],

};



const accessori = [
    {
        id: 1,
        name: "Jordan",
        price: 100,
        quantity: 1,
    },
    {
        id: 2,
        name: "Nike",
        price: 50,
        quantity: 1,
    },
    {
        id: 3,
        name: "Sneakers",
        price: 150,
        quantity: 1,
    },
    {
        id: 4,
        name: "Timberland",
        price: 300,
        quantity: 1,
    },
    {
        id: 5,
        name: "Puma",
        price: 70,
        quantity: 1,
    },
    {
        id: 6,
        name: "Vans",
        price: 30,
        quantity: 1,
    }
];

//
accessori.forEach((element) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <h2>${element.name} <span>${element.id}</span></h2>
    <h3>price:  ${element.price}</h3>
    <button>Aggiungi al carrello</button>
    `;

    div.classList.add("container-accessori");

    const btn = div.querySelector("button");
    btn.addEventListener("click", () => {
        aggiungiAlCarrello(element.id)
        nascondiShop()

    });

    container.appendChild(div);
});

indietro.addEventListener("click", () => {
    indietroBtn()
})

document.addEventListener("DOMContentLoaded", () => {//deve prima caricare l'html
    caricaCarrello();
});



//actualizar el carrello e agrega informacion addCart
function aggiungiAlCarrello(id) {//aqui se agregan los datos al state
    const accessoio = accessori.find((element) => element.id === id);
    state.carrello.push(accessoio);

    salvaCarrello() // Salva i dati nel localStorage
    render();
}

//removeCart
function rimuoviAlCarrello(item) {
    if (item.quantity - 1 === 0) {//el +1 hace que me devuelva 0 y se cumpla la funcion
        state.carrello = state.carrello.filter((element) => element.id !== item.id);
    } else {
        item.quantity--;
    }

    salvaCarrello()// Salva i dati nel localStorage
    render();
}

//increment
function incrementa(id) {
    state.carrello = state.carrello.map((element) => {
        if (element.id === id) {
            element.quantity++;
        }
        return element;
    });

    salvaCarrello() // Salva i dati nel localStorage
    render();
}

//saveCart
function salvaCarrello() {
    localStorage.setItem("carrello", JSON.stringify(state.carrello));
}

//dowloadCart
function caricaCarrello() {
    const carrelloSalvato = localStorage.getItem("carrello");
    if (carrelloSalvato) {
        state.carrello = JSON.parse(carrelloSalvato);
        render();
    }
}

//hidddenCart
function nascondiShop() {
    container.style.display = "none";//style inline
    carrelloList.style.display = "flex";
}

//funcion para el boton de regreso back
function indietroBtn() {
    container.style.display = "grid";//style inline
    carrelloList.style.display = "none";
}

function buyBtn() {
    container.style.display = "grid";//style inline

}

const render = () => {// gestina los datos(me crea el modelo de los datos)
    carrelloList.innerHTML = "";
    state.carrello.forEach((element) => {
        const div = document.createElement("div");
        div.innerHTML = `
        <h2>${element.name} <span>${element.id}</span></h2>
        <h3>price:  ${element.price * element.quantity}</h3>
        <button onclick="() => console.log('pulsanteremove')"class="remove">-</button>
        <span class="quantity">${element.quantity}</span>
        <button class="add">+</button>
        <button class="buy">buy</button>
        `;
        div.classList.add("container-carrello");
        const btnRemove = div.querySelector(".remove");
        btnRemove.addEventListener("click", () => {
            console.log("btnRemove")
            rimuoviAlCarrello(element);
        });

        const btnAdd = div.querySelector(".add");
        btnAdd.addEventListener("click", () => {
            incrementa(element.id);
        });
        carrelloList.appendChild(div);
    });


};


//crea funzione che quando faccio click su buy mi faccia vedere spedizione

//when we are in the cart, create btn buy with the goods to buy en address to shipping the goods

