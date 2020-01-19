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
    const resPokeSpecies = await fetch(info.species.url);
    const dataPokeSpecies =  await resPokeSpecies.json();
    const resPokeEvoChain = await fetch(dataPokeSpecies.evolution_chain.url);
    const dataPokeEvoChain = await resPokeEvoChain.json();
    const randomMoves = function () {
        var array = info.moves;
            shuffleResult = array.slice(0,4).map(function (){
                return this.splice(Math.floor(Math.random() * this.lenght), 1)[0];
        }, array.slice());
        return shuffleResult;
    };

    objectPokemon = {
        name : info.name,
        id : info.id,
        imagesrc : info.sprites.front_default,
        evolutie : dataPokeEvoChain.chain.species,
        moves : randomMoves()
    };
    console.log(objectPokemon);
    return objectPokemon;
}


async function handleClick(e) {
    e.preventDefault();

    const name = input.value;
    const pokeobject = await firstCallAPI(getPokemonData(name));
    console.log(pokeobject);
    displayPokemon (pokeobject.name, pokeobject.id, pokeobject.imagesrc, pokeobject.moves)

}
form.addEventListener('submit', handleClick);

function displayPokemon(Name, id, spritesrc, moves) {
    document.querySelector("#stats").innerHTML = '';
    document.querySelector("#picture").innerHTML ='';

    var template1 = document.querySelector("#template").content.cloneNode(true);
    template1.querySelector('#Name').innerHTML = `${Name} id : ${id}`;
    template1.querySelector('#Moves').innerHTML = `<p>${moves[0].move.name} ${moves[1].move.name} ${moves[2].move.name} ${moves[3].move.name}`;
    document.querySelector("#stats").appendChild(template1);
    var template2 = document.querySelector("template2").content.cloneNode(true);
    template2.querySelector('#spriteImg').src = spritesrc;
    template2.querySelector("#spriteImg").alt = Name;
    document.querySelector("#picture").appendChild(template2);

/*    var templateImg = document.clone(document.querySelector('#template2'),true);
    templateImg.querySelector('img').src = spritesrc;
    var templateMoves = document.cloneNode(document.querySelector("#template3"), true);
    templateMoves.querySelector('table').innerHTML = ` 
    <ul> 
    <li>${moves[0]}</li>
    <li>${moves[1]}</li>
    <li>${moves[2]}</li>
    <li>${moves[3]}</li>
    </ul>`*/
}