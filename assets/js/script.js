// Obtener los elementos del formulario
const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const lastNameInput = document.getElementById('last_name'); 
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

// Agregar listener al botón submit
form.addEventListener('submit', e => {

  // Prevenir envío del formulario
  e.preventDefault();
  
  // Definir mensajes
  let messages = [];

  // Validar email
  if(emailInput.value === '') {
    messages.push('El email es obligatorio');
  } else if(!isValidEmail(emailInput.value)) {
    messages.push('El email no es válido');
  }

  // Validar mensaje
  if(messageInput.value === '') {
    messages.push('El mensaje es obligatorio');
  }

  // Mostrar mensajes de error si hay
  if(messages.length > 0) {
    alert(messages.join('\n'));
  } else {
    alert('Formulario enviado correctamente!');
  }

});

// Función para validar email
function isValidEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
