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