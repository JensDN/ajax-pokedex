
async function getPokemonData(name) {   // data get function
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    let response = await fetch(url);
    console.log(response);
    let pokemonData = await response.json();
    console.log(pokemonData);
    return pokemonData;
}
/*
const name = document.querySelector('nameInput');
const button = document.querySelector('button');
button.addEventListener('click', getPokemonData);
*/


