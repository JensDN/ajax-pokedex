
async function handleClick(e) {
    e.preventDefault();
    const name = input.value;
    const obj = await getPokemonData(name);
    console.log(`This is the display of pokemonData ==> ${obj}`)
}
form.addEventListener('submit', handleClick);