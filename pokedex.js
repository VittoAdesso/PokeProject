// llamo fetch para recger sus datos 
const basePokemon = 'https://pokeapi.co/api/v2/pokemon/';

const pokeBola = document.getElementById('pokedex');
pokeBola.classList.add('pokedex');


// puedo pasar el nombre o el id 
function askPokemon(id) {

    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`) // pido desde su url
        .then((pokemonGetApi) => {
            return pokemonGetApi.json();
        })
        .then((pokemonResults) => {
            // prompt('cuato quiere2')
            creaPokemon(pokemonResults);
        });
}

function recorrePokedex(number) {
    for (let i = 1; i <= number; i++) {
        // for (let i = 1; i < 151; i++) {
        askPokemon(i)
    }
}

// aquí voy creando las tarjetas donde contendremos a los pokemones 
function creaPokemon(pokemon) {

    const card = document.createElement('div');
    card.classList.add('card');

    // lo que va a contener la imagen 
    const spriteContainer = document.createElement('div');
    spriteContainer.classList.add('img-content');

    const sprite = document.createElement('img');
    sprite.classList.add('card-image')
    sprite.src = pokemon.sprites['front_default']; // puedo anotar con corchetes o con .fornt_defaul que es como la api le llama a esa imagen en espcifica

    spriteContainer.appendChild(sprite);

    const number = document.createElement('p');
    number.classList.add('card-subtitle')
    number.textContent = `#${pokemon.id}` // le pongo el # para que me de el número junto al # ex #1  y así


    /*    // intento ponerle una caracteristica 
       const numberw = document.createElement('p');
       numberw.textContent = `${pokemon} `;
       // numberw.classList.add('card-subtitle'); */


    const name = document.createElement('p');
    name.classList.add('card-title');
    name.textContent = pokemon.name;

    card.appendChild(spriteContainer);
    card.appendChild(number);
    // card.appendChild(numberw);
    card.appendChild(name);


    pokeBola.appendChild(card);
}

// "https://pokeapi.co/api/v2/ability/132/

// puedo meterle un prompt que pregunte cuantos pokemones quiere ver , así la hago dinámica ?????????
// recorrePokedex(i) // me toma como argumento el número 
recorrePokedex(151);





// creo botomn para que me muestre mas items !!! lo dejo de 10 en 10 .... 
// ponerle clases !!! al boton !!!! y centtrar tb ponerle mas largao y grande 
/* alert('Bienvenido')
alert('Cada vez que le des al botón "SHOW ME MORE POKEMONS => te mostrará 10 pokemones')

// NO FUNCIONA BIEN, YA QUE ME REPITE LOS POKEMONES !!!!! 
const button1 = document.createElement('button');
button1.textContent = 'Show me more Pokemons! ';
button1.addEventListener('click', function aparce() {

    recorrePokedex(10)
})
document.body.appendChild(button1); */



// ENLAZA OL ID POKEDEX

// const pokemon = results.map((result) => ({
//     name: result.name,
//     image: result.sprites['front_default'],
//     type: result.types.map((type) => type.type.name).join(', '),
//     id: result.id