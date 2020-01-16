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




async function handleClick(e) {
    e.preventDefault();

    const name = input.value;
    const pokeobject = await getPokemonData(name);
    console.log(pokeobject)
}
form.addEventListener('submit', handleClick);