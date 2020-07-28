function playAudio(evt) {
  const audio = document.querySelector(`audio[data-key="${evt.keyCode}"]`);

  if(!audio) return

  const tecla = document.querySelector(`div[data-key="${evt.keyCode}"]`);
  tecla.classList.add('sonando');

  audio.currentTime = 0;
  audio.play();
}

function quitarClaseSonando(evento){
  if(evento.propertyName != 'transform') return;
  evento.target.classList.remove('sonando');
}

const teclas = document.querySelectorAll('.tecla');
teclas.forEach( tecla => tecla.addEventListener('transitionend',quitarClaseSonando))

document.addEventListener('keydown',playAudio);