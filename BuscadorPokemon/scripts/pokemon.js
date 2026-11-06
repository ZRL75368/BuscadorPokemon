const nombre = document.getElementById('nombrePokemon');
const id = document.getElementById('idPokemon');
const imagen = document.getElementById('imagenPokemon');

async function cargarPokemon(){
    const pokemonEncontrar = localStorage.getItem('pokemonABuscar');

    try{
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonEncontrar}`);
        
    if (!respuesta.ok) {
        throw new Error('Pokémon no encontrado');
    }
    const datos = await respuesta.json();

    nombre.textContent = datos.name;
    id.textContent = datos.id;
    imagen.src = datos.sprites.front_default;
  
    }
    catch{

        nombre.textContent = 'Error: no se ha encontrado el Nombre';
        nombre.style.color = 'red';
        id.textContent = 'Error:  no se ha encontrado el ID';
        id.style.color = 'red';
        alert('Error: no encontrado. Intentalo de nuevo')
    }
}
const volver = document.getElementById('boton-volver');
volver.onclick = function(){
    window.location.href = 'index.html';
}

cargarPokemon();