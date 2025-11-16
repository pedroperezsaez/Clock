export default class Alarm extends HTMLElement {
  #intervalCallback;
  #intervalId = 0;

  constructor() {
    
    super();
    this.addEventListener("click", this);
    this.duration = 60 * 1000;
    this.#intervalCallback = () => {
      this.alarms.forEach((alarm) => {
        const { value } = alarm.querySelector("input");
        const date =
          new Date(value).getTime() ||
          new Date(`${new Date().toLocaleDateString()} ${value}`).getTime();
          if(isNaN(date)){
            console.log("mal");
          }
        if (date) {
          const delta = Date.now() - date;
          if (delta > 0 && delta < new Date(this.duration)) {
           
            alarm.setAttribute("ringing", "");
            this.dispatchEvent(
              new CustomEvent("ring", { bubbles: true, detail: alarm }
              )
              
            );
             
 
 
  

            return;
          }
        }

        alarm.removeAttribute("ringing");
      });
    };
  }
  

  get alarms() {
    return [...this.querySelector(".items").children];
  }

  get duration() {
    return Number(this.getAttribute("duration"));
  }

  set duration(value) {
    this.setAttribute("duration", value);
  }

  add() {
    const alarm = this.querySelector("template").content.cloneNode(true);
    this.querySelector(".items").appendChild(alarm);
  }

  connectedCallback() {
    if (!this.#intervalId) {
      this.#intervalId = setInterval(this.#intervalCallback, 1000);
    }
  }

  delete(alarm) {
    this.querySelector(".items").removeChild(alarm);
  }

  disconnectedCallback() {
    clearInterval(this.#intervalId);
  }

  handleEvent(event) {
    const { target } = event;
    const { classList } = target;
    if (classList.contains("add")) {
      this.add();
    } else if (classList.contains("delete")) {
      this.delete(this.alarms.find((alarm) => alarm.contains(target)));
    } else if (classList.contains("pause")) {
      this.pause(this.alarms.find((alarm) => alarm.contains(target)));
    } else if (classList.contains("start")) {
      this.start(this.alarms.find((alarm) => alarm.contains(target)));
    }
  }

pause(alarm) {
  if (this.alarms.includes(alarm)) {
    const botonstart = alarm.querySelector('.start');
    const botonpause = alarm.querySelector('.pause');

    botonstart.classList.remove('activo');
    botonstart.classList.add('inactivo');

    botonpause.classList.remove('inactivo');
    botonpause.classList.add('activo-pause');

    alarm.setAttribute("paused", "");
  }
}

start(alarm) {
  if (this.alarms.includes(alarm)) {
    const botonstart = alarm.querySelector('.start');
    const botonpause = alarm.querySelector('.pause');

    botonstart.classList.remove('inactivo');
    botonstart.classList.add('activo');

    botonpause.classList.remove('activo-pause');
    botonpause.classList.add('inactivo');

    alarm.removeAttribute("paused");
  }
}
}
const sonido = document.getElementById('alarma-audio');
setInterval(() => { 
  const alarmas = document.querySelectorAll('#alarm x-alarm .items .alarms input[type=time]');
  alarmas.forEach((alarma) => {
  const alarmTime = alarma.value; 
  const tiempoActual = new Date();
  const tiempo = tiempoActual.toTimeString().split(' ')[0];
 const botonPause = alarma.parentElement.querySelector('.audio-alarm-inactivo');
  const botonStart = alarma.parentElement.querySelector('.audio-alarm-activo');
   const botonDelete = alarma.parentElement.querySelector('.audio-delete');
  if (alarmTime === tiempo && botonStart.classList.contains('activo')) {

    botonPause.addEventListener('click',()=>{
      sonido.pause();
      sonido.currentTime=0;
    });
     botonDelete.addEventListener('click',()=>{
      sonido.pause();
      sonido.currentTime=0;
    })
    sonido.play();
    setTimeout(() => {
      sonido.pause();
      sonido.currentTime = 0;
    }, 10000);
  }
});

}, 1000);