// fetch this api: "https://pokeapi.co/api/v2/pokemon" and retrive the list of pokemon. Then create for each pokemon a card with an image and the pokemon's name


async function retrivePokemons() {
    try {
        const result = await fetch('https://pokeapi.co/api/v2/pokemon')
        const resultJSON = await result.json()
        console.log(resultJSON)
    }
     catch(error) {
        console.error(error)
     }
}
retrivePokemons();