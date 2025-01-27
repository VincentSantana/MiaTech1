const container = document.getElementById("container");
const carrelloList = document.getElementById("carrello");

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
        aggiungiAlCarrello(element.id);
    });

    container.appendChild(div);
});

function aggiungiAlCarrello(id) {//aqui se agregan los datos al state
    const accessoio = accessori.find((element) => element.id === id);
    state.carrello.push(accessoio);
    render();
}

function rimuoviAlCarrello(item) {
    if (item.quantity -1 === 0) {//el +1 hace que me devuelva 0 y se cumpla la funcion
        state.carrello = state.carrello.filter((element) => element.id !== item.id);
    } else {
        item.quantity--;
    }
    render();
}

function incrementa(id) {
    state.carrello = state.carrello.map((element) => {
        if (element.id === id) {
            element.quantity++;
        }
        return element;
    });
    render();
}

const render = () => {// gestina los datos(me crea el modelo de los datos)
    carrelloList.innerHTML = "";
    state.carrello.forEach((element) => {
        const div = document.createElement("div");
        div.innerHTML = `
        <h2>${element.name} <span>${element.id}</span></h2>
        <h3>price:  ${element.price*element.quantity}</h3>
        <button class="remove">-</button>
        <span class="quantity">${element.quantity}</span>
        <button class="add">+</button>
        `;
         div.classList.add("container-carrello");
        const btnRemove = div.querySelector(".remove");
        btnRemove.addEventListener("click", () => {
            rimuoviAlCarrello(element);
        });

        const btnAdd = div.querySelector(".add");
        btnAdd.addEventListener("click", () => {
            incrementa(element.id);
        });
        carrelloList.appendChild(div);
    });


};