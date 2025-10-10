const dataContainer = document.getElementById("data-container");
const paginationContainer = document.getElementById("pagination-container");
const pageButtonsContainer = document.getElementById("page-buttons");
const prevPageButton = document.getElementById("prev-page");
const nextPageButton = document.getElementById("next-page");

// Configuración de la paginación
const itemsPerPage = 10; // Elementos por página
let currentPage = 1; // Página inicial
let totalPages = 1; // Total de páginas (se calculará)

// Función para obtener datos de la API con paginación
async function fetchData(page, limit) {
  const response = await fetch( `https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=${limit}`);
  const totalItems = response.headers.get("x-total-count"); // Total de elementos
  totalPages = Math.ceil(totalItems / limit); // Calculamos el total de páginas
  return response.json(); // Retorna los datos
}

// Función para renderizar los datos de la página actual
async function renderData(page) {
  dataContainer.innerHTML = "<p>Cargando datos...</p>"; // Indicador de carga

  try {
    const data = await fetchData(page, itemsPerPage);
    dataContainer.innerHTML = ""; // Limpia el contenedor

    data.forEach((item) => {
      const div = document.createElement("div");
      div.textContent = `ID: ${item.id} - ${item.title}`;
      dataContainer.appendChild(div);
    });
  } catch (error) {
    dataContainer.innerHTML = "<p>Error al cargar los datos.</p>";
    console.error(error);
  }
}

// Función para crear los botones de paginación
function renderPagination() {
  pageButtonsContainer.innerHTML = ""; // Limpia los botones anteriores

  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement("button");
    button.textContent = i;
    //agrega una class al boton creado
    button.classList.add("page-button");
    if (i === currentPage) button.classList.add("active");

    // Evento al hacer clic en un botón de página
    button.addEventListener("click", () => {
      currentPage = i;
      updatePagination();
    });

    pageButtonsContainer.appendChild(button);
  }
}

// Función para actualizar los datos y los botones
function updatePagination() {
  renderData(currentPage);
  renderPagination();

  // Habilita o deshabilita los botones "Anterior" y "Siguiente"
  prevPageButton.disabled = currentPage === 1;
  nextPageButton.disabled = currentPage === totalPages;
}

// Eventos para los botones "Anterior" y "Siguiente"
prevPageButton.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    updatePagination();
  }
});

nextPageButton.addEventListener("click", () => {
  if (currentPage < totalPages) {
    currentPage++;
    updatePagination();
  }
});

// Inicialización
updatePagination();
