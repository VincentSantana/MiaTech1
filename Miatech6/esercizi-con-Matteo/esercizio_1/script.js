const container = document.getElementById("container");
const carrelloList = document.getElementById("carrello");
const indietro = document.getElementById("indietro");


const state = {
    carrello: [],
    mostrarSpedizione: false //  Nueva variable para controlar la visibilidad de la sección de envío
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

// Renderizar productos en la tienda
accessori.forEach((element) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <h2>${element.name} <span>${element.id}</span></h2>
    <h3>price:  ${element.price}</h3>
     <button class="add-to-cart">Aggiungi al carrello</button>
    `;

    div.classList.add("container-accessori");
    const btn = div.querySelector(".add-to-cart");


    btn.addEventListener("click", () => {
        aggiungiAlCarrello(element.id)
        nascondiShop()

    });

    container.appendChild(div);
});


// Evento para volver atrás
if (indietro) {
    indietro.addEventListener("click", indietroBtn);
}

// Cargar carrito desde localStorage al cargar la página
document.addEventListener("DOMContentLoaded", () => {//deve prima caricare l'html
    if (container && carrelloList) {
        caricaCarrello();
    } else {
        console.error("No se encontraron los elementos en el DOM");
    }
});



//actualizar el carrello e agrega informacion addCart
function aggiungiAlCarrello(id) {//aqui se agregan los datos al state
    const accessoio = accessori.find((element) => element.id === id);
    const itemInCarrello = state.carrello.find((item) => item.id === id);


    if (itemInCarrello) { //verifico si el producto ya esta en el carrello
        itemInCarrello.quantity++;  // Si ya está, incrementa la cantidad
    } else {
        state.carrello.push({ ...accessoio, quantity: 1 });// se agrega solo si no existe
    }

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
        state.carrello = JSON.parse(carrelloSalvato).map(item => ({
            ...item, quantity: item.quantity || 1  // Asegurar que la cantidad exista
        }));
        render();
    }
}

//hidddenCart
function nascondiShop() {
    if (container && carrelloList) {
        container.style.display = "none";//style inline
        carrelloList.style.display = "flex";
    }
}

//funcion para el boton de regreso back
function indietroBtn() {
    if (container && carrelloList) {
        container.style.display = "grid";//style inline
        carrelloList.style.display = "none";
    }
}




function render() {
    carrelloList.innerHTML = "";

    // Renderizar productos en el carrito
    state.carrello.forEach((element) => {
        const div = document.createElement("div");
        div.innerHTML = `
            <h2>${element.name} <span>${element.id}</span></h2>
            <h3>Price: $${element.price * element.quantity}</h3>
            <button class="remove">-</button>
            <span class="quantity">${element.quantity}</span>
            <button class="add">+</button>
            <button class="buy">Buy</button>
        `;

        div.classList.add("container-carrello");
        carrelloList.appendChild(div);

        // Eventos para quitar del carrito
        div.querySelector(".remove").addEventListener("click", () => {
            rimuoviAlCarrello(element);
        });

        // Eventos para agregar al carrito
        div.querySelector(".add").addEventListener("click", () => {
            incrementa(element.id);
        });

        div.querySelector(".buy").addEventListener("click", () => {
            console.log("buy")
            mostrarSeccionEnvio();
        });

    });

    //  Mostrar la sección de envío solo si "Buy" fue presionado
    if (state.mostrarSpedizione) {
        mostrarFormularioEnvio();
    }
}

//  Función para mostrar el formulario de envío
function mostrarSeccionEnvio() {
    state.mostrarSpedizione = true; // Activar la sección de envío
    render();
}

function mostrarFormularioEnvio() {
    if (!document.getElementById("spedizione")) {
        const spedizioneDiv = document.createElement("div");
        spedizioneDiv.id = "spedizione";
        spedizioneDiv.innerHTML = `
            <h2>Datos de Envío</h2>
            <form id="form-spedizione">
                <label for="name">Nombre:</label>
                <input type="text" id="name" required>
                
                <label for="address">Dirección:</label>
                <input type="text" id="address" required>

                <label for="phone">Teléfono:</label>
                <input type="text" id="phone" required>

                <button type="button" id="finalizar-compra">Finalizar Compra</button>
            </form>
        `;

        carrelloList.appendChild(spedizioneDiv);

        document.getElementById("finalizar-compra").addEventListener("click", finalizarCompra);
    }
}

//  Función para finalizar la compra
function finalizarCompra() {
    const nombre = document.getElementById("name").value.trim();
    const direccion = document.getElementById("address").value.trim();
    const telefono = document.getElementById("phone").value.trim();

    if (!nombre || !direccion || !telefono) {
        alert(" Si prega di compilare tutti i campi di spedizione");
        return;
    }

    alert(`Grazie per il tuo acquisto, ${nombre}!\n I tuoi prodotti verranno spediti a: ${direccion}.\n Ti contatteremo al ${telefono}.`);

    // Vaciar el carrito después de la compra
    state.carrello = [];
    state.mostrarSpedizione = false; // Ocultar la sección de envío después de finalizar la compra
    salvaCarrello();
    render();
}

//crea funzione che quando faccio click su buy mi faccia vedere spedizione

//when we are in the cart, create btn buy with the goods to buy en address to shipping the goods

