

const botonClock=document.querySelector('#botonclock');
const botonAlarm=document.querySelector('#botonalarm');
const botonStopWatch=document.querySelector('#botonstopwatch');
const botonTimer=document.querySelector('#botontimer');
botonSeleccionado()

function botonSeleccionado(){
    botonClock.addEventListener('click', function(){
    botonClock.classList.add('boton-seleccionado'); 
    botonAlarm.classList.remove('boton-seleccionado');    
    botonStopWatch.classList.remove('boton-seleccionado');      
    botonTimer.classList.remove('boton-seleccionado');
   });

    botonAlarm.addEventListener('click', function(){
    botonAlarm.classList.add('boton-seleccionado'); 

    botonClock.classList.remove('boton-seleccionado');

     botonStopWatch.classList.remove('boton-seleccionado');
      

      botonTimer.classList.remove('boton-seleccionado');


   });

  
   botonStopWatch.addEventListener('click', function(){
    botonStopWatch.classList.add('boton-seleccionado');
    

    botonAlarm.classList.remove('boton-seleccionado');

     botonClock.classList.remove('boton-seleccionado');

      botonTimer.classList.remove('boton-seleccionado');


   });


      botonTimer.addEventListener('click', function(){
    botonTimer.classList.add('boton-seleccionado');
    

    botonAlarm.classList.remove('boton-seleccionado');

     botonStopWatch.classList.remove('boton-seleccionado');
      

      botonClock.classList.remove('boton-seleccionado');
    


   });
   

};


