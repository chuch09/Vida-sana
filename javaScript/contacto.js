// JavaScript Document
function validateForm() {
  // Obtiene los valores de los campos de entrada
  var name = document.forms["contactForm"]["name"].value;
  var email = document.forms["contactForm"]["email"].value;
  var phone = document.forms["contactForm"]["phone"].value;
  var message = document.forms["contactForm"]["message"].value;

  // Verifica si todos los campos requeridos están completos
  if (name == "" || email == "" || phone == "" || message == "") {
    alert("Por favor, completa todos los campos requeridos.");
    return false;
  }

  // Verifica si la dirección de correo electrónico es válida
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Por favor, ingresa una dirección de correo electrónico válida.");
    return false;
  }

  // Verifica si el número de teléfono es válido
  var phoneRegex = /^\d{10}$/;
  if (phone != "" && !phoneRegex.test(phone)) {
    alert("Por favor, ingresa un número de teléfono válido.");
    return false;
  }	

  // Si todos los campos se completan correctamente, devuelve verdadero
  return true;
}

function submitForm() {
  // Valida los datos del formulario
  if (!validateForm()) {
    return false;
  }

  // Muestra un mensaje que indica que el formulario se envió correctamente
  var statusMessage = document.getElementById("statusMessage");
  statusMessage.textContent = ""; // Blanquea el mensaje anterior
  statusMessage.textContent = "Tu mensaje se envió correctamente.";
  statusMessage.style.color = "green";	
	

  // Limpia los campos del formulario
  document.forms["contactForm"]["name"].value = "";
  document.forms["contactForm"]["email"].value = "";
  document.forms["contactForm"]["phone"].value = "";
  document.forms["contactForm"]["message"].value = "";

  return false;
}
