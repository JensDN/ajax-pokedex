function displayPokemon(Name, id, spritesrc, moves) {
    var templateName = document.cloneNode(document.querySelector("#template1"), true);
    templateName.querySelector('h1').innerHtml = Name;
    templateName.querySelector('h2').innerHtml = id;
    var templateImg = document.clone(document.querySelector('#template2'),true);
    templateImg.querySelector('img').src = spritesrc;
    var templateMoves = document.cloneNode(document.querySelector("#template3"), true);
    templateMoves.querySelector('table').innerHTML = ` 
    <ul> 
    <li>${moves[1]}</li>
    <li>${moves[2]}</li>
    <li>${moves[3]}</li>
    <li>${moves[4]}</li>
    </ul>`;
    document.querySelector("#results").appendchild(templateName);
    document.querySelector("#results").appendchild(templateImg);
    document.querySelector("#results").appendchild(templateMoves);

}


function displayForecast(day, min, max) {

    var template = document.cloneNode(document.querySelector("#test div"), true);
    template.querySelector("h1").innerHTML = 'bleh';

    document.querySelector("#resultaten").appendChild(template);


    return `
    <div class="flexEl">
      <p class="day">${day}</p>
      <ul class="temptable">
        <li>min: ${min}</li>
        <li>max: ${max}</li>
      </ul>
    </div>
  `
}