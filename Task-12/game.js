const data = localStorage.getItem("selectedPokemons");
const chosenData = JSON.parse(data);
console.log(chosenData);

displayMyPokemons();
displayEnemyPokemons();

// this function displays my pokemons team
function displayMyPokemons() {
  chosenData.forEach((mypokemon) => {
    const myPokemons = document.getElementById("my-pokemons");
    const myPokemonsDiv = document.createElement("div");
    myPokemonsDiv.classList.add("my-pokemon-div");
    myPokemons.appendChild(myPokemonsDiv);
    myPokemonsDiv.innerHTML = `
    <span class="number">#${mypokemon.id}</span>
    <div class="img_container">
        <img src="${mypokemon?.sprites?.other?.dream_world?.front_default}" >
    </div>
    <div class="info">
    
        <h3 class="name">${mypokemon.name}</h3>
        <small class="type">type : ${mypokemon.types[0].type.name}</small>
    </div>
`;
  });
}

// Function to fetch random Pokemon data
async function fetchRandomPokemon() {
  const randomPokemonId = Math.floor(Math.random() * 50) + 1;
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`
  );
  const data = await response.json();
  return data;
}

// Function to display enemy Pokemon team
async function displayEnemyPokemons() {
  const numberOfEnemies = 5; // You can adjust this as needed
  const enemyPokemons = document.getElementById("enemy-pokemons");

  for (let i = 0; i < numberOfEnemies; i++) {
    const enemyPokemonData = await fetchRandomPokemon();

    const enemyPokemonDiv = document.createElement("div");
    enemyPokemonDiv.classList.add("enemy-pokemon-div");

    const enemyPokemonInnerHtml = `
        <span class="number">#${enemyPokemonData.id}</span>
        <div class="img_container">
          <img src="${enemyPokemonData?.sprites?.other?.dream_world?.front_default}" >
        </div>
        <div class="info">
          <h3 class="name">${enemyPokemonData.name}</h3>
          <small class="type">type : ${enemyPokemonData.types[0].type.name}</small>
        </div>
      `;

    enemyPokemonDiv.innerHTML = enemyPokemonInnerHtml;
    enemyPokemons.appendChild(enemyPokemonDiv);
  }
}
