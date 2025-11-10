const botones= document.querySelectorAll('.botones');
const botonStartAlarm=document.querySelector('.start');
const botonPausaAlarm=document.querySelector('.pause');



botones.forEach(function(boton) {
    boton.addEventListener('click', function(){
        botones.forEach(botonActual => botonActual.classList.remove('boton-seleccionado'));
        boton.classList.add('boton-seleccionado');
    });
});


botonStartAlarm.addEventListener('click', function(){
    botonStartAlarm.classList.add('activo' );
     botonStartAlarm.classList.remove('inactivo');
    botonPausaAlarm.classList.add('inactivo');
    botonPausaAlarm.classList.remove('activo');

});

botonPausaAlarm.addEventListener('click', function(){
    botonStartAlarm.classList.remove('activo');
    botonStartAlarm.classList.add('inactivo');
    botonPausaAlarm.classList.add('activo');
    botonPausaAlarm.classList.remove('inactivo');
});

