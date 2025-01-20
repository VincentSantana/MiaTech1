const searchInput = document.getElementById("task_text");
const list = document.getElementById("task_container");
const pagination = document.getElementById("pagination-container");
const btnNext = document.getElementById("next");
const btnPrevious = document.getElementById("previous");
// Configuración de la paginación
const itemsPerPage = 5; // Elementos por página


async function richiestaDati() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos');
        const dati = await res.json();

        searchInput.addEventListener("input", () => {
            //trim sirve para quitarle los espacios
            const textValue = searchInput.value.trim();
            //filter me esta ayudando a filtrar los datos
            const filteredData = dati.filter((item) => item.title.toLowerCase().includes(textValue.toLowerCase()));
           
            list.innerHTML = ""; // Limpia el contenedor lista

            if (textValue === "") {
                list.innerHTML = ""; // Limpia el buscador
            } else {
                //cuenta las paginas que tengo
                const totalPages = Math.ceil(filteredData.length / itemsPerPage);
                //creo las paginas
                filteredData.slice(0,itemsPerPage).forEach((item) => {
                    const li = document.createElement("li");
                    li.innerHTML = `<p> ${item.title}</p> <span>${item.completed}</span>`;
                    list.appendChild(li);
                });

                pagination.innerHTML = "";
                // Crear los botones de paginación
                for (let i = 1; i <= totalPages; i++) {
                    const button = document.createElement("button");
                    button.classList.add("page-button");
                    button.innerText = i;
                   
                    button.addEventListener("click", () => {
                        currentPage = i;
                        const startIndex = (currentPage - 1) * itemsPerPage;
                        const endIndex = startIndex + itemsPerPage;
                        list.innerHTML = "";
                        filteredData.slice(startIndex, endIndex).forEach((item) => {
                            const li = document.createElement("li");
                            li.innerHTML = `<p> ${item.title}</p> <span>${item.completed}</span>`;
                            list.appendChild(li);
                            
                        });
                    });
                    pagination.appendChild(button);

                }
            } 
            
        });


    } catch(error){
        console.error(error);
    }
};

richiestaDati();






/* 

# User Management App with Pagination

## Overview
This project is a user management application that fetches user data from a mock API and implements pagination to handle larger datasets. The app allows users to view, filter, sort, and delete users through a user-friendly interface while effectively managing application state.

## Features

### Core Functionality
1. **Data Fetching**
   - Fetch user data from a mock API (`https://jsonplaceholder.typicode.com/users`).
   - Initialize the application state with the fetched data.

2. **Pagination**
   - Display a limited number of users per page.
   - Include "Next" and "Previous" buttons for navigation.
   - Dynamically update the displayed users based on the current page.

3. **Filtering and Sorting**
   - Filter the list by name using a search input.
   - Sort users by name or email via a dropdown.
   - Apply filtering and sorting dynamically without re-fetching data.

4. **User Deletion**
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

// Configuración de la paginación
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