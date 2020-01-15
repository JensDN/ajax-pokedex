const name = "pikachu";
const fetchPokemon = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    const res = await fetch(url);
    const data = await res.json();
    const pokemon = data.results.map((data, index) => ({
        name: data.name,
        id: index + 1,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index +
        1}.png`,
    }));
    displayPokemon(pokemon);
};
    console.log(pokemon);