//search

document.querySelector(".home__form").addEventListener("submit",()=>{
    event.preventDefault()
})

document.documentElement.addEventListener("keyup", (evt)=>{
    if(evt.which == 13){
        let voiceText = document.querySelector(".google-search", "_blank").value;
        if (voiceText.length > 0){
            window.location.href = "https://google.com/search?q=" + voiceText;
        }

    }
})
/* //al cargar la pagina
window.addEventListener('load', () =>{
    const section__index = document.querySelector('.section-index')
    section__index.style.marginTop = 0
  })

//evento click para devolver el margin a estado inicial
const cerrar = document.getElementById('cerrar')
const fuera =document.getElementById('S1')

cerrar.addEventListener('click', ()=>{
    fuera.style.marginTop = '-954%'
})
 */

// boton copiar:
document.addEventListener('DOMContentLoaded', function () {
    // Obtén una lista de todos los botones de copia
    const copyButtons = document.querySelectorAll('.copy-button');

    // Agrega un controlador de eventos de clic a cada botón
    copyButtons.forEach(function (copyButton, index) {
      // Encuentra el bloque de código correspondiente
      const codeBlock = document.querySelectorAll('pre.dark code')[index];

      // Agrega el controlador de eventos de clic al botón actual
      copyButton.addEventListener('click', function () {
        // Crea un elemento de área de texto oculto
        const textArea = document.createElement('textarea');
        textArea.value = codeBlock.textContent;

        // Agrega el área de texto oculto al documento
        document.body.appendChild(textArea);

        // Selecciona y copia el contenido del área de texto
        textArea.select();
        document.execCommand('copy');

        // Elimina el área de texto oculto
        document.body.removeChild(textArea);

        // Cambia el texto del botón para indicar que se ha copiado
        copyButton.textContent = '✔ Copiado!';
      });
    });
  });
