const data = localStorage.getItem('pokemonData')
const poke = JSON.parse(data)
console.log(poke)

const cardContainer = document.getElementById("container")
const card = document.createElement("div")
cardContainer.appendChild(card)

card.innerHTML = `
    <span class="number">#${poke.id}</span>
    <div class="img_container">
        <img src="${poke?.sprites?.other?.dream_world?.front_default}" >
    </div>
    <div class="info">
    
        <h3 class="name">${poke.name}</h3>
        <small class="type">type : ${poke.types[0].type.name}</small>
    </div>
    <div class="more-info">
        <h1> More Info</h1>
        <h4>height: ${poke.height} </h4>
        <h4>weight: ${poke.weight} </h4>

     </div>
`