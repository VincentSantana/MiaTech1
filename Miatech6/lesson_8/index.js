const searchInput = document.getElementById("task_text");
const list = document.getElementById("task_container");
const pagination = document.getElementById("pagination-container");
const sortDropdown = document.getElementById("sort-dropdown");
const btnNext = document.getElementById("next");
const btnPrevious = document.getElementById("previous");

// Configuracion de la paginacion
const itemsPerPage = 5; // Elementos por página

// Estado global
const state = {
    users: [],         // Datos originales(arrivano dall'API)
    filteredUsers: [], // Datos filtrados(copia de users)
    currentPage: 1,    // Pagina actual
    sortBy: "",        // Criterio de ordenacion
};

// Funcion para obtener datos de la API
async function fetchUsers() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const dati = await res.json();

        state.users = dati; // Guardar datos en el estado
        state.filteredUsers = dati; // Inicialmente, no hay filtros
        render(); // Renderizar la lista inicial
    } catch (error) {
        console.error("Error al obtener los datos:", error);
    }
}

// Función para eliminar un elemento del estado
function deleteUser(id) {
    // Actualizar el estado eliminando el elemento
    state.users = state.users.filter((user) => user.id !== id);
    state.filteredUsers = state.filteredUsers.filter((user) => user.id !== id);

    // Si la página actual queda vacía después de eliminar, retrocede una página si no estás en la primera
    const totalPages = Math.ceil(state.filteredUsers.length / 5);
    if (state.currentPage > totalPages) {
        state.currentPage = totalPages || 1;
    }

    // Renderizar nuevamente
    render();
}

// Funcion de renderizado:
//uso state porque es quien contiene mis datos
function render() {
    //con esta funcion se da la forma que queremos que tenga la interfaz
    const startIndex = (state.currentPage - 1) * itemsPerPage; // startIndex seria el indice inicial para los elementos de la página actual.
    const endIndex = startIndex + itemsPerPage;
    const visibleUsers = state.filteredUsers.slice(startIndex, endIndex);//slice me devolvera una copia del array original(dati), starIndex es el indice de donde comienza la estraccion y endIndex es el indice donde se detiene la extraccion(no incluye este) hasta extraer todos los datos del array.

    // Renderizar lista de tareas
    list.innerHTML = ""; //sirve para vaciar el container
    //aqui creo lo que se vera en la pantalla
    visibleUsers.forEach((item) => {
        const li = document.createElement("li");
        li.innerHTML = `<p>${item.name}</p> <p>${item.username}</p> <span>${item.email}</span> <button class="delete-button" data-id="${item.id}">Delete</button>`;
        list.appendChild(li);
    });

    // Agregar event listeners a los botones de eliminacion
    const deleteButtons = document.querySelectorAll(".delete-button");
    deleteButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
            const userId = parseInt(e.target.dataset.id, 10);
            deleteUser(userId);
        });
    });

    // Renderizar paginacion
    renderPagination();

    // Actualizar botones Next y Previous
    updateNavigationButtons();//para garantizar que los botones reflejen siempre el estado actual
}

// Funcion para renderizar(crear los bottones) los botones de paginacion
function renderPagination() {
    const totalPages = Math.ceil(state.filteredUsers.length / itemsPerPage);
    pagination.innerHTML = "";

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement("button");
        button.classList.add("page-button");
        button.innerText = i;//porque la i cuenta, por eso se vera todo del 1 al 40

        if (i === state.currentPage) {//si se esta en una pagina corriente entonces se activara la clase active
            button.classList.add("active");
        }

        button.addEventListener("click", () => {
            state.currentPage = i;// creo este evento para cuando haga click se cree la condicion de arriba
            render(); //practicamente me crea el contenido de la pagina
        });

        pagination.appendChild(button);
    }
}

// Funcion para manejar el filtro por texto
function handleSearch(inputText) {
    const searchText = inputText.toLowerCase().trim();
    state.filteredUsers = state.users.filter((item) =>
        item.title.toLowerCase().includes(searchText)
    );

    if (state.sortBy) {
        sortUsers(state.sortBy);
    }

    state.currentPage = 1; // Reiniciar a la primera página
    render(); //practicamente me crea el contenido de la pagina
}



// Funcion para aplicar el ordenamiento
function sortUsers(criteria) {
    state.sortBy = criteria;

    if (criteria === "name") {
        state.filteredUsers.sort((a, b) => a.title.localeCompare(b.title)); // title en lugar de name
    } else if (criteria === "email") {
        state.filteredUsers.sort((a, b) => {
            if (a.email && b.email) {
                return a.email.localeCompare(b.email);
            }
            return 0;
        });
    }

    state.currentPage = 1;
    render();
}


// Event listeners
searchInput.addEventListener("input", (e) => {
    handleSearch(e.target.value);
});

sortDropdown.addEventListener("change", (e) => {
    sortUsers(e.target.value);
});

// Funcion para renderizar los botones de navegacion (Next/Previous)
function updateNavigationButtons() {
    const totalPages = Math.ceil(state.filteredUsers.length / 5);

    // Habilitar/Deshabilitar botones según la página actual
    btnPrevious.disabled = state.currentPage === 1; //deshabilita el boton "Previous" si estás en la primera pagina.
    btnNext.disabled = state.currentPage === totalPages; //deshabilita el boton "Next" si estás en la ultima pagina.
}

// Funcion para manejar el boton "Next"
btnNext.addEventListener("click", () => {
    const totalPages = Math.ceil(state.filteredUsers.length / 5);
    if (state.currentPage < totalPages) {
        state.currentPage++;
        render();
    }
});

// Funcion para manejar el boton "Previous"
btnPrevious.addEventListener("click", () => {
    if (state.currentPage > 1) {
        state.currentPage--;
        render();
    }
});

// Obtener los datos iniciales
fetchUsers();



/* 

# User Management App with Pagination

## Overview
This project is a user management application that fetches user dati from a mock API and implements pagination to handle larger datasets. The app allows users to view, filter, sort, and delete users through a user-friendly interface while effectively managing application state.

## Features

### Core Functionality
1. **Data Fetching**
   - Fetch user data from a mock API (`https://jsonplaceholder.typicode.com/users`).
   - Initialize the application state with the fetched data.

2. **Pagination** hacerlo seguro con lo state!!!!!
   - Display a limited number of users per page.
   - Include "Next" and "Previous" buttons for navigation.
   - Dynamically update the displayed users based on the current page.

3. **Filtering and Sorting** hacerlo seguro con lo state!!!
   - Filter the list by name using a search input.
   - Sort users by name or email via a dropdown.
   - Apply filtering and sorting dynamically without re-fetching data.

4. **User Deletion** hacerlo seguro con lo state!!
   - Enable users to delete an entry from the list.
   - Reflect the deletion in the UI and update the state.

### Optional Enhancements
1. Add a direct input field for navigating to a specific page.
2. Save application state (e.g., current page, filters, sort order) to local storage for persistence.
3. Allow users to customize the number of items displayed per page.

## State Management
The app manages the following state variables:
- `users`: The original list of fetched users.
- `filteredUsers`: The list of users after applying filters and sorting.
- `currentPage`: The currently displayed page.
- `itemsPerPage`: Number of users displayed per page.
- `sortKey`: Key used for sorting (e.g., `name` or `email`).
- `searchQuery`: Current search input value.

## Challenges
1. Synchronizing state changes across filtering, sorting, and pagination.
2. Ensuring responsiveness and efficient DOM updates.
3. Managing edge cases, such as:
   - Deleting the last user on the current page.
   - Resetting the page index when filtering reduces the number of available users.

## Next Steps
Consider implementing the following enhancements:
- Pagination input for direct page jumps.
- State persistence using local storage.
- Dynamic selection of items per page.

*/


___________________________________________________________________________________________________________________________________________
// guardato con chatgpt:

/*
const searchInput = document.getElementById("task_text");
const list = document.getElementById("task_container");
const pagination = document.getElementById("pagination-container");
const btnNext = document.getElementById("next");
const btnPrevious = document.getElementById("previous");

// Configuracion de la paginacion
const itemsPerPage = 5; // Elementos por página
let currentPage = 1; // Página actual
let totalPages = 1; // Total de páginas

async function richiestaDati() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos');
        const dati = await res.json();

        const updateList = (filteredData) => {
            const startIndex = (currentPage - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            list.innerHTML = "";
            filteredData.slice(startIndex, endIndex).forEach((item) => {
                const li = document.createElement("li");
                li.innerHTML = `<p>${item.title}</p> <span>${item.completed}</span>`;
                list.appendChild(li);
            });
        };

        const updatePagination = (filteredData) => {
            totalPages = Math.ceil(filteredData.length / itemsPerPage);
            btnPrevious.disabled = currentPage === 1;
            btnNext.disabled = currentPage === totalPages;
        };

        searchInput.addEventListener("input", () => {
            const textValue = searchInput.value.trim();
            const filteredData = dati.filter((item) =>
                item.title.toLowerCase().includes(textValue.toLowerCase())
            );

            currentPage = 1; // Reiniciar a la primera página al filtrar
            if (textValue === "") {
                list.innerHTML = "";
                pagination.innerHTML = "";
            } else {
                updateList(filteredData);
                updatePagination(filteredData);
            }

            btnNext.onclick = () => {
                if (currentPage < totalPages) {
                    currentPage++;
                    updateList(filteredData);
                    updatePagination(filteredData);
                }
            };

            btnPrevious.onclick = () => {
                if (currentPage > 1) {
                    currentPage--;
                    updateList(filteredData);
                    updatePagination(filteredData);
                }
            };
        });
    } catch (error) {
        console.error(error);
    }
}

richiestaDati();

*/ 