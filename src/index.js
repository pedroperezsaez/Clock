const botonClock=document.querySelector('#botonclock');
const botonAlarm=document.querySelector('#botonalarm');
const botonStopWatch=document.querySelector('#botonstopwatch');
const botonTimer=document.querySelector('#botontimer');

window.addEventListener("hashchange", btonSeleccionado);
btonSeleccionado();
function btonSeleccionado(){
 botonClock.classList.remove('boton-seleccionado');
    botonAlarm.classList.remove('boton-seleccionado');
    botonStopWatch.classList.remove('boton-seleccionado');
    botonTimer.classList.remove('boton-seleccionado');
  const hash = location.hash;
  if (!location.hash) {
  location.hash = '#clock';
};

  if (hash === "#clock") {
   botonClock.classList.add('boton-seleccionado');
  } else if (hash === '#alarm') {
    botonAlarm.classList.add('boton-seleccionado');
  } else if (hash === '#stopwatch') {
    botonStopWatch.classList.add('boton-seleccionado');
  } else if (hash === '#timer') {
    botonTimer.classList.add('boton-seleccionado');
  }
}










/*if (!location.hash) {
  location.hash = "#clock";
 const botonClock=document.querySelector('#botonclock');
 botonClock.classList.add('boton-seleccionado');
}*/



