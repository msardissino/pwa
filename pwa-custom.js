let buttonPwa = document.querySelector('#buttonpwa');
console.log(buttonPwa);

// Inicializa deferredPrompt para su uso más tarde.
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // Previene a la mini barra de información que aparezca en smartphones
  e.preventDefault();
  // Guarda el evento para que se dispare más tarde
  deferredPrompt = e;
  // Actualizar la IU para notificarle al usuario que se puede instalar tu PWA
  showInstallPromotion();
  // De manera opcional, envía el evento de analíticos para saber si se mostró la promoción a a instalación del PWA
  console.log(`'beforeinstallprompt' event was fired.`);
});

buttonPwa.addEventListener('click', async () => {
    // Esconde la información promotora de la instalación
    hideInstallPromotion();
    // Muestre el mensaje de instalación
    deferredPrompt.prompt();
    // Espera a que el usuario responda al mensaje
    const { outcome } = await deferredPrompt.userChoice;
    // De manera opcional, envía analíticos del resultado que eligió el usuario
    console.log(`User response to the install prompt: ${outcome}`);
    // Como ya usamos el mensaje, no lo podemos usar de nuevo, este es descartado
    deferredPrompt = null;
  });