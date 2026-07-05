// Valida que el correo tenga formato correcto usando expresiones regulares (Visto en la clase
// de lenguaje y automatas).
function validarCorreo(correo) {
  const correoTexto = String(correo).trim();

  const expresion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return expresion.test(correoTexto);
}

// Valida que el texto tenga solo letras, incluyendo acentos y ñ usando expresiones regulares (Visto en la clase
// de lenguaje y automatas).
function soloLetras(texto) {
  const textoLimpio = String(texto).trim();

  const expresion = /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü]+$/;

  return expresion.test(textoLimpio);
}

// Valida que sea un número y que no pase la longitud máxima usando expresiones regulares y condicionales (Visto en la clase
// de lenguaje y automatas).
function validarLongitud(numero, maxLongitud) {
  const numeroTexto = String(numero).trim();

  const expresion = /^[0-9]+$/;

  return expresion.test(numeroTexto) && numeroTexto.length <= maxLongitud;
}

// Calcula la edad usando la fecha de nacimiento.
function calcularEdad(fechaNacimiento) {
  const fechaTexto = String(fechaNacimiento).trim();

  const nacimiento = new Date(fechaTexto + "T00:00:00");
  const hoy = new Date();

  let edad = hoy.getFullYear() - nacimiento.getFullYear();

  const mesActual = hoy.getMonth();
  const diaActual = hoy.getDate();

  const mesNacimiento = nacimiento.getMonth();
  const diaNacimiento = nacimiento.getDate();

  if (
    mesActual < mesNacimiento ||
    (mesActual === mesNacimiento && diaActual < diaNacimiento)
  ) {
    edad--;
  }

  return edad;
}

// Valida si la edad es de 18 años o más con condicionales.
function esMayorDeEdad(fechaNacimiento) {
  const fechaTexto = String(fechaNacimiento).trim();

  return calcularEdad(fechaTexto) >= 18;
}

// Valida que la contraseña sea segura usando expresiones regulares (Visto en la clase
// de lenguaje y automatas).
function validarPassword(password) {
  const passwordTexto = String(password).trim();

  const expresion = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_])(?!.*\s).{8,}$/;

  return expresion.test(passwordTexto);
}

//Mis 2 funciones extras vistas en la clase de Lenguajes y Automatas 1.

// Valida que una página web tenga formato correcto usando expresiones regulares (Visto en la clase
// de lenguaje y automatas).
function validarPaginaWeb(pagina) {
  const paginaTexto = String(pagina).trim();

  const expresion =
    /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+([\/?#][^\s]*)?$/;

  return expresion.test(paginaTexto);
}

// Valida que una dirección IPv4 tenga formato correcto usando expresiones regulares (Visto en la clase
// de lenguaje y automatas).
function validarIPv4(ip) {
  const ipTexto = String(ip).trim();

  const expresion =
    /^(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}$/;

  return expresion.test(ipTexto);
}
