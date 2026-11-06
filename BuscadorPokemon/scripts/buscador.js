(function(){
    const inputNombre = document.getElementById('nombre-pokemon');
    const botonEnviar = document.getElementById('boton-enviar');

    botonEnviar.addEventListener('click', () => {

        const nombreMinus = inputNombre.value.trim().toLocaleLowerCase();

        if(nombreMinus === ''){
            alert('Introduce el nombre o ID del Pokemon');
            return;
        }
        
        else{
            localStorage.setItem('pokemonABuscar', nombreMinus);
             window.location.href = 'resultado.html';
        }
    });
})();