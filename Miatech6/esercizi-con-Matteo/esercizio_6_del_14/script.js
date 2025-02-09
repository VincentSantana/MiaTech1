const containerCard = document.getElementById("containerCard");
const next = document.getElementById("next");
const prev = document.getElementById("previous");
const paginationContainer = document.getElementById("pagination");

const state = {
    pokemonList: [],
    currentPage: 1,
    totalPages: 0,
    nextPageUrl: null, //se sono nell'ultima pagina disponibile o in cui sono attualmente, qui sara null
    prevPageUrl: null, //se sono nella prima pagina, allora di default sara null(perche non c'e una pagina prima)
};

async function retrievePokemons(url = "https://pokeapi.co/api/v2/pokemon") {
    try {
        const result = await fetch(url);
        const resultJSON = await result.json();

        console.log("API Response:", resultJSON); //fa vedere come next e previous gestiscono le pagine

        state.pokemonList = resultJSON.results; //contiene la prima pagina
        state.nextPageUrl = resultJSON.next;//contiene le seguenti pagine
        state.prevPageUrl = resultJSON.previous;// parte null

         // Calcular el total de páginas (la API tiene 1281 Pokémon en total)
    state.totalPages = Math.ceil(1281 / 20); // 20 es el límite de Pokémon por página

        //mi cerca le imagini e poi renderizza la card
        state.pokemonList.forEach(async (pokemon) => {
            const url = pokemon.url;
            const result = await fetch(url);
            const pokemonObj = await result.json();
            const pokemonImg = pokemonObj.sprites.front_default;
            pokemon.imgUrl = pokemonImg;
            render()
            /*for (let pokemon of state.pokemonList) {
      const pokemonData = await fetch(pokemon.url);
      const pokemonObj = await pokemonData.json();
      pokemon.imgUrl = pokemonObj.sprites.front_default;
    }*/
        });
        render();
        renderPagination();

    } catch (error) {
        console.error(error);
    }
}

// Renderizar la lista de Pokémon
function render() {
    //pulisce l'html
    containerCard.innerHTML = "";
// create card for each pokemon
    state.pokemonList.forEach((pokemon) => {
        const pokemonCard = createCard(pokemon.name, pokemon.imgUrl);
        // insert the card in the container
        containerCard.appendChild(pokemonCard);
    });

    // Habilitar o deshabilitar los botones de paginación
    prev.disabled = !state.prevPageUrl;
    next.disabled = !state.nextPageUrl;
}

// Crear tarjeta de Pokémon
function createCard(pokemonName, pokemonImg) {
    const pokemonCard = document.createElement("div");
    pokemonCard.classList.add("card");

    const img = document.createElement("img");
    img.setAttribute("src", pokemonImg);

    const span = document.createElement("span");
    span.textContent = pokemonName;

    pokemonCard.appendChild(img);
    pokemonCard.appendChild(span);

    return pokemonCard;
}

// Generar botones de paginación
function renderPagination() {
    paginationContainer.innerHTML = "";
  
    for (let i = 1; i <= state.totalPages; i++) {
      const button = document.createElement("button");
      button.textContent = i;
      button.classList.add("page-button");
  
      if (i === state.currentPage) {
        button.classList.add("active");
      }
  
      button.addEventListener("click", () => goToPage(i));
  
      paginationContainer.appendChild(button);
    }
  }
  
  // Ir a una página específica
function goToPage(pageNumber) {
    state.currentPage = pageNumber;
    const offset = (pageNumber - 1) * 20; // 20 Pokémon por página
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`;
  
    retrievePokemons(url);
  }

// Manejo de los botones de paginación
next.addEventListener("click", () => {
    if (state.nextPageUrl) {
        state.currentPage++;
        retrievePokemons(state.nextPageUrl);
    }
});

prev.addEventListener("click", () => {
    if (state.prevPageUrl) {
        state.currentPage--;
        retrievePokemons(state.prevPageUrl);
    }
});

// Cargar los primeros Pokémon al iniciar
retrievePokemons();
