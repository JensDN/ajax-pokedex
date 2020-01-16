const input = document.querySelector('#input'); // input
const form = document.querySelector('form'); // form

async function getPokemonData(name) {   // data get function
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    let response = await fetch(url);
    console.log(response);
    let pokemonData = await response.json();
    console.log(pokemonData);
    return pokemonData;
}

async function firstCallAPI (data){
    const info = await data;
    const resPokeSpecies = await fetch(data.species.url);
    const dataPokeSpecies =  await resPokeSpecies.json();
    const resPokeEvoChain = await fetch(dataPokeSpecies.evolution_chain);
    const dataPokeEvoChain = await resPokeEvoChain.json();

    objectPokemon = {
        name : info.name,
        id : info.id,
        imagesrc : info.sprites.front_default,
        evolutie : dataPokeEvoChain.chain.species
    };
    console.log(objectPokemon);
}


async function handleClick(e) {
    e.preventDefault();

    const name = input.value;
    const pokeobject = await firstCallAPI(getPokemonData(name));
    console.log(pokeobject)
}
form.addEventListener('submit', handleClick);