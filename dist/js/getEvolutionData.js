async function getPokemonEvolutionData(evolutionData) {   // data get function
    const evolutionID =1;
    const urlEvolution = `https://pokeapi.co/api/v2/evolution-chain/${evolutionData}`;
    let response = await fetch(urlEvolution);
    let pokemonEvolutionData = await response.json();
    console.log(pokemonEvolutionData);



}

getPokemonEvolutionData(10);