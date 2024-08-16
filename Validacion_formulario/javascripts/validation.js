// FUNCION PARA VALIDAR EL FORMULARIO DE CORREO
function emailValidation() {
  const form = document.getElementById('form');  // Obtiene el formulario por su ID
  form.addEventListener('submit', e => {  // Agrega un evento de envío al formulario
      e.preventDefault();  // Previene el comportamiento por defecto de envío del formulario

      // COMPARA SI EL VALOR DEL CAMPO DE EMAIL NO ES IGUAL AL DEL CAMPO DE EMAIL DE CONFIRMACIÓN
      if (form.email.value !== form.email_confirm.value) {
          const element = document.createElement('p');  // Crea un elemento de párrafo para el mensaje de error
          const message = document.createTextNode("Error al Confirmar correo.");  // Crea un nodo de texto con el mensaje de error
          form.appendChild(element);  // Agrega el elemento de párrafo al formulario
          element.appendChild(message);  // Agrega el mensaje de error al elemento de párrafo
          element.classList.add("alert");  // Agrega la clase 'alert' al elemento para estilo de alerta
          setTimeout(() => {
              form.removeChild(element);  // Elimina el mensaje de error después de 3 segundos
          }, 3000);
      } else {
          form.submit();  // Envía el formulario si los correos coinciden
      }
  });
};

// OBTIENE EL CONTENIDO DE LA CUARTA FILA DE LA TABLA Y EL ELEMENTO DE CONFIRMACIÓN DE EMAIL
const contenido = document.getElementsByTagName("tr")[3];
const email_conf = document.getElementById("email_confirm");

// CREA UN PÁRRAFO PARA MOSTRAR EL ERROR DE CORREO NO COINCIDENTE
const error_correo = document.createElement("p");
error_correo.innerText = "El correo electrónico no coincide.";  // Establece el texto del error
error_correo.style.color = "#d14539";  // Establece el color del texto del error

// INSERTA EL PÁRRAFO DE ERROR ANTES DEL CONTENIDO DE LA TABLA
document.getElementsByTagName("tbody")[0].insertBefore(error_correo, contenido);
error_correo.style.display = "none";  // Oculta inicialmente el mensaje de error

// AGREGA UN EVENTO DE TECLA LEVANTADA AL CAMPO DE EMAIL DE CONFIRMACIÓN PARA VALIDACIÓN EN TIEMPO REAL
email_conf.addEventListener("keyup", () => {
  if (form.email.value !== form.email_confirm.value) {  // Comprueba si los correos no coinciden
      email_conf.style.backgroundColor = "rgba(230,169,171,.5)";  // Cambia el fondo del campo de confirmación a un color de advertencia
      error_correo.style.display = "block";  // Muestra el mensaje de error de correo no coincidente
  } else {
      email_conf.style.backgroundColor = "rgb(232, 240, 254)";  // Restablece el fondo del campo de confirmación
      error_correo.style.display = "none";  // Oculta el mensaje de error de correo no coincidente
  }
});

window.onload = emailValidation;  // Ejecuta la función emailValidation cuando la página se haya cargado completamente
