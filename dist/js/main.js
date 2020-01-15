const pokedex = document.querySelector('.pokedex');
const name = "pikachu";
const fetchPokemon = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    const response = await fetch(url);
    const data = await response.json();
    const pokemon = data.results.map((data, index) => ({
        name: data.name,
        id: index + 1,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index +
        1}.png`,
    }));
    displayPokemon(pokemon);
};

const displayPokemon = poke => {
    const pokemonHTMLString = poke
        .map(
            pokepoke =>
                `
    <li class="card">
        <img class="card-image" src="${pokepoke.image}"/>
        <h2 class="card-title">${pokepoke.id}. ${pokepoke.name}</h2>
        </a>
    </li>
        `
        )
        .join("");
    pokedex.innerHTML = pokemonHTMLString;
};
