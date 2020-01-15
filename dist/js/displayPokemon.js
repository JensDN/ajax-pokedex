const displayPokemon = pokemon => {
    const pokemonHTMLString = pokemon
        .map(
            pokeman =>
                `
    <li class="card">
        <img class="card-image" src="${pokeman.image}"/>
        <h2 class="card-title">${pokeman.id}. ${pokeman.name}</h2>
        </a>
    </li>
        `
        )
        .join("");
    pokedex.innerHTML = pokemonHTMLString;
};