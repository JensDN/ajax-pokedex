const input = document.querySelector('#input'); // input
const form = document.querySelector('form'); // form

async function getPokemonData(name) {   // data get function
    //aan url kennen we https+de specieke naam toe: geeft de effectieve url
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    //we wachten voor de response van de fetch
    let response = await fetch(url);
    //loggen van de response
    console.log(response);
    //response.json geeft de data in json formaat
    let pokemonData = await response.json();
    //loggen van data in jason formaat
    console.log(pokemonData);
    return pokemonData;
}


// async function firstCallAPI (data){
//     const info = await data;
//     const resPokeSpecies = await fetch(data.species.url);
//     const dataPokeSpecies =  await resPokeSpecies.json();
//     const resPokeEvoChain = await fetch(dataPokeSpecies.evolution_chain);
//     const dataPokeEvoChain = await resPokeEvoChain.json();
//
//     objectPokemon = {
//         name : info.name,
//         id : info.id,
//         imagesrc : info.sprites.front_default,
//         evolutie : dataPokeEvoChain.chain.species
//     };
//     console.log(objectPokemon);
// }


async function handleClick(e) {
    const name = input.value;
    e.preventDefault();
    let pokemonData= await getPokemonData(name)
        // const pokemon={};
        // pokemon['name'] = pokemonData.name;
        // pokemon['id'] = pokemonData.id;
        // pokemon['image'] = pokemonData.sprites.front_default;
        // console.log(pokemon);
         console.log(typeof(pokemonData.name));


        document.getElementsByClassName("Name").innerHTML = pokemonData.name;
        document.getElementsByClassName("ID").innerHTML= pokemonData.id;
        document.getElementsByTagName("img").src = pokemonData.sprites.front_default;

}

form.addEventListener('submit', handleClick);
