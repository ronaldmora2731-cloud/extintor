const iconoFuego = document.querySelector('#iconoFuego');
const audioFuego = document.querySelector('#audioFuego');
const estadoSonido = document.querySelector('#estadoSonido');

audioFuego.volume = 0.5;

const activarFuego = async () => {
  estadoSonido.textContent = 'Sonido de fuego activo';
  estadoSonido.classList.add('activo');

  try {
    await audioFuego.play();
  } catch (error) {
    estadoSonido.textContent = 'Haga clic una vez para habilitar el audio';
  }
};

const desactivarFuego = () => {
  audioFuego.pause();
  audioFuego.currentTime = 0;
  estadoSonido.textContent = 'Pase el cursor sobre el fuego.';
  estadoSonido.classList.remove('activo');
};

// Eventos DOM
iconoFuego.addEventListener('mouseenter', activarFuego);
iconoFuego.addEventListener('mouseleave', desactivarFuego);
iconoFuego.addEventListener('focus', activarFuego);
iconoFuego.addEventListener('blur', desactivarFuego);

// Fallback para navegadores que bloquean reproducción automática
iconoFuego.addEventListener('click', async () => {
  if (audioFuego.paused) {
    await activarFuego();
  } else {
    desactivarFuego();
  }
});
