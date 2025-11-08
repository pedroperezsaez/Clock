const botones= document.querySelectorAll('.botones');
botones.forEach(boton => {
    boton.addEventListener('click', ()=>{
        botones.forEach(botonActual => botonActual.classList.remove('boton-seleccionado'));
        boton.classList.add('boton-seleccionado');
    });
});
