const poke_container = document.getElementById("poke-container");
const chosen_pokemons = document.getElementById("chosen-pokemons");

const customMenu = document.getElementById("custom-menu");
const menuItem1 = document.getElementById("menu-item-1");
const menuItem2 = document.getElementById("menu-item-2");

const myPokemons = document.getElementById("my-pokemons");
const enemyPokemons = document.getElementById("enemy-pokemons");

const pokemon_count = 14;
const selectedPokemons = [];

const colors = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
};

const displayedPokemons = [];

const main_types = Object.keys(colors);

const fetchPokemon = async () => {
  for (let i = 1; i <= pokemon_count; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  const res = await fetch(url);

  const data = await res.json();

  createPokemonCard(data);
  displayedPokemons.push(data);
};

const createPokemonCard = (pokemon) => {
  const pokemonEl = document.createElement("div");
  pokemonEl.classList.add("pokemon");

  const id = pokemon.id.toString().padStart(3, "0");
  const name = pokemon.name;

  const poke_type = pokemon.types.map((type) => type.type.name);

  const type = main_types.find((type) => poke_type.indexOf(type) > -1);

  const color = colors[type];

  pokemonEl.style.backgroundColor = color;

  const pokemonInnerHtml = `
    <span class="number">#${id}</span>
            <div class="img_container">
                <img src="${pokemon?.sprites?.other?.dream_world?.front_default}" >
            </div>
            <div class="info">
               
                <h3 class="name">${name}</h3>
                <small class="type">type : ${type}</small>
            </div>
        
    `;
  pokemonEl.innerHTML = pokemonInnerHtml;
  pokemonEl.id = pokemon.id;
  poke_container?.appendChild(pokemonEl);
  pokemonEl.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    displayContextMenu(e, pokemonEl);
  });
};

//Display context menu
const displayContextMenu = (e, pokemonEl) => {
  const pokemon = displayedPokemons.find((p) => p.id == pokemonEl.id);
  localStorage.setItem("pokemonData", JSON.stringify(pokemon));
  const x = e.clientX;
  const y = e.clientY;
  customMenu.style.left = `${x}px`;
  customMenu.style.top = `${y}px`;
  customMenu.style.display = "block";

  document.addEventListener("click", () => (customMenu.style.display = "none"));

  menuItem1.addEventListener(
    "click",
    (e) => (window.location.href = "./pokemon.html")
  );

  menuItem2.addEventListener("click", (e) => {
    addPokemonToChosenPokemons(pokemon);
  });
};

//Adding pokemons to chosen pokemons
const addPokemonToChosenPokemons = (pokemon) => {
  if (selectedPokemons.length < 5 && !selectedPokemons.includes(pokemon)) {
    selectedPokemons.push(pokemon);

    chosen_pokemons.innerHTML = "";
    selectedPokemons.forEach((selectedPokemon) => {
      let chosenPokemonDiv = document.createElement("div");
      chosenPokemonDiv.classList.add("chosen-pokemon-div");

      const poke_type = selectedPokemon.types.map((type) => type.type.name);

      const type = main_types.find((type) => poke_type.indexOf(type) > -1);

      const color = colors[type];

      chosenPokemonDiv.style.backgroundColor = color;
      console.log(color);
      const chosenPokemonInnerHtml = `
          <span class="number">#${selectedPokemon.id}</span>
          <div class="img_container">
              <img src="${selectedPokemon?.sprites?.other?.dream_world?.front_default}" >
          </div>
          <div class="info">
              <h3 class="name">${selectedPokemon.name}</h3>
              <small class="type">type : ${selectedPokemon.types[0].type.name}</small>
          </div>
        `;

      chosenPokemonDiv.innerHTML = chosenPokemonInnerHtml;
      chosen_pokemons.appendChild(chosenPokemonDiv);
    });
    gameOn();
  }
};

// this function creates button and when button is clicked it takes us to a new page
function gameOn() {
  if (selectedPokemons.length == 5) {
    const gameOnDiv = document.createElement("div");
    gameOnDiv.classList.add("game-on-div");
    gameOnDiv.innerHTML = `
       <button id="game-on-btn">Start!</button>
    `;

    chosen_pokemons.appendChild(gameOnDiv);
    const gameOnBtn = document.getElementById("game-on-btn");

    gameOnBtn.addEventListener("click", (e) => {
      window.location.href = "./game.html";
      localStorage.setItem(
        "selectedPokemons",
        JSON.stringify(selectedPokemons)
      );
    });
  }
}

// function displayMyPokemons() {
//   const data = localStorage.getItem("selectedPokemons");
//   const chosenData = JSON.parse(data);
//   console.log(chosenData);

//   chosenData.forEach((myPokemon) => {
//     let chosenPokemonDiv = document.createElement("div");
//     chosenPokemonDiv.classList.add("chosen-pokemon-div");

//     const poke_type = myPokemon.types.map((type) => type.type.name);

//     const type = main_types.find((type) => poke_type.indexOf(type) > -1);

//     const color = colors[type];

//     chosenPokemonDiv.style.backgroundColor = color;
//     console.log(color);
//     const chosenPokemonInnerHtml = `
//           <span class="number">#${myPokemon.id}</span>
//           <div class="img_container">
//               <img src="${myPokemon?.sprites?.other?.dream_world?.front_default}" >
//           </div>
//           <div class="info">
//               <h3 class="name">${myPokemon.name}</h3>
//               <small class="type">type : ${myPokemon.types[0].type.name}</small>
//           </div>
//         `;

//     chosenPokemonDiv.innerHTML = chosenPokemonInnerHtml;
//     myPokemons.appendChild(chosenPokemonDiv);
//   });
// }
// displayMyPokemons();

fetchPokemon();
