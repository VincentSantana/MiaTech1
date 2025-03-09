import { useEffect, useState } from "react";


export default function Pokemon() {
    const [pokemonList, setPokemonList] = useState([])

    useEffect(() => {
        async function pokemons() {
            try {
                const res = await fetch("https://pokeapi.co/api/v2/pokemon")
                const pok = await res.json();
                console.log(pok)
                setPokemonList(pok.results)

            } catch (error) {
                console.log(error)
            }
        }

        pokemons();
    },[]);

    

    return (


        <>
            {pokemonList.map((pok, index) => {
                return <div key={index}>{pok.name}</div>
            }) }
        </>

    )
}