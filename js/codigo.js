async function validar(event) {
  event.preventDefault();

  let primerNombre = document.getElementById("primerNombre").value.trim();
  let segundoNombre = document.getElementById("segundoNombre").value.trim();
  let email = document.getElementById("email").value.trim();
  let numero = document.getElementById("numero").value.trim();
  let fechaNacimiento = document.getElementById("fechaNacimiento").value;
  let contraseña = document.getElementById("contraseña").value;
  let ipv4 = document.getElementById("ipv4").value.trim();
  let paginaWeb = document.getElementById("paginaWeb").value.trim();

  if (primerNombre === "") {
    Swal.fire({
      icon: "warning",
      title: "Escribe tu primer nombre",
      text: "Por favor ingresa tu primer nombre.",
      confirmButtonText: "Ok",
      confirmButtonColor: "#fb2525ff",
      background: "#ffe6e6ff",
      color: "#000000ff",
      iconColor: "#ff0000ff",
    });

    return;
  }

  if (!soloLetras(primerNombre)) {
    Swal.fire({
      icon: "warning",
      title: "Primer nombre incorrecto",
      text: "El primer nombre solo debe contener letras.",
      confirmButtonText: "Ok",
      confirmButtonColor: "#fb2525ff",
      background: "#ffe6e6ff",
      color: "#000000ff",
      iconColor: "#ff0000ff",
    });
    return;
  }

  if (segundoNombre !== "" && !soloLetras(segundoNombre)) {
    Swal.fire({
      icon: "warning",
      title: "Segundo nombre incorrecto",
      text: "El segundo nombre solo debe contener letras. Si no tienes segundo nombre, déjalo vacío.",
      confirmButtonText: "Ok",
      confirmButtonColor: "#fb2525ff",
      background: "#ffe6e6ff",
      color: "#000000ff",
      iconColor: "#ff0000ff",
    });
    return;
  }

  if (email === "") {
    Swal.fire({
      icon: "warning",
      title: "Escribe un correo electrónico",
      text: "Por favor escribe un correo electrónico.",
      confirmButtonText: "Ok",
      confirmButtonColor: "#fb2525ff",
      background: "#ffe6e6ff",
      color: "#000000ff",
      iconColor: "#ff0000ff",
    });
    return;
  }

  if (!validarCorreo(email)) {
    Swal.fire({
      icon: "warning",
      title: "¡CORREO INCORRECTO!",
      text: "Por favor escribe un correo electrónico correcto.",
      confirmButtonText: "Ok",
      confirmButtonColor: "#fb2525ff",
      background: "#ffe6e6ff",
      color: "#000000ff",
      iconColor: "#ff0000ff",
    });
    return;
  }

  if (numero === "") {
    Swal.fire({
      icon: "warning",
      title: "Escribe tu número favorito",
      text: "En el apartado de número, escribe tu número favorito máximo a 10 dígitos.",
      confirmButtonText: "Ok",
      confirmButtonColor: "#fb2525ff",
      background: "#ffe6e6ff",
      color: "#000000ff",
      iconColor: "#ff0000ff",
    });
    return;
  }

  if (!validarLongitud(numero, 10)) {
    Swal.fire({
      icon: "warning",
      title: "Número incorrecto",
      text: "El número debe contener solo dígitos y máximo 10 caracteres.",
      confirmButtonText: "Ok",
      confirmButtonColor: "#fb2525ff",
      background: "#ffe6e6ff",
      color: "#000000ff",
      iconColor: "#ff0000ff",
    });
    return;
  }

  if (fechaNacimiento === "") {
    Swal.fire({
      icon: "warning",
      title: "Fecha vacía",
      text: "Por favor selecciona tu fecha de nacimiento.",
      confirmButtonText: "Ok",
      confirmButtonColor: "#fb2525ff",
      background: "#ffe6e6ff",
      color: "#000000ff",
      iconColor: "#ff0000ff",
    });
    return;
  }

  let edad = calcularEdad(fechaNacimiento);
  let esMayor = esMayorDeEdad(fechaNacimiento);

  if (edad < 0) {
    Swal.fire({
      icon: "warning",
      title: "Fecha invalida",
      text: "Por favor ingresa una fecha de nacimiento válida.",
      confirmButtonText: "Ok",
      confirmButtonColor: "#fb2525ff",
      background: "#ffe6e6ff",
      color: "#000000ff",
      iconColor: "#ff0000ff",
    });
    return;
  }

  if (contraseña === "") {
    Swal.fire({
      icon: "warning",
      title: "Contraseña vacía",
      text: "Por favor ingresa una contraseña.",
      confirmButtonText: "Ok",
      confirmButtonColor: "#fb2525ff",
      background: "#ffe6e6ff",
      color: "#000000ff",
      iconColor: "#ff0000ff",
    });
    return;
  }

  if (!validarPassword(contraseña)) {
    Swal.fire({
      icon: "warning",
      title: "CONTRASEÑA INSEGURA",
      text: "Ingresa una contraseña segura. Requiere mayúscula, minúscula, número, carácter especial y mínimo 8 caracteres.",
      confirmButtonText: "Ok",
      confirmButtonColor: "#fb2525ff",
      background: "#ffe6e6ff",
      color: "#000000ff",
      iconColor: "#ff0000ff",
    });
    return;
  }

  if (ipv4 === "") {
    Swal.fire({
      icon: "warning",
      title: "IPv4 vacía",
      text: "Por favor ingresa la dirección IPv4 de tu base de datos.",
      confirmButtonText: "Ok",
      confirmButtonColor: "#fb2525ff",
      background: "#ffe6e6ff",
      color: "#000000ff",
      iconColor: "#ff0000ff",
    });
    return;
  }

  if (!validarIPv4(ipv4)) {
    Swal.fire({
      icon: "warning",
      title: "IPv4 incorrecta",
      text: "Ingresa una dirección IPv4 válida. Ejemplo: 192.168.1.1",
      confirmButtonText: "Ok",
      confirmButtonColor: "#fb2525ff",
      background: "#ffe6e6ff",
      color: "#000000ff",
      iconColor: "#ff0000ff",
    });
    return;
  }

  if (paginaWeb === "") {
    Swal.fire({
      icon: "warning",
      title: "Página web vacía",
      text: "Por favor ingresa el link de tu página web.",
      confirmButtonText: "Ok",
      confirmButtonColor: "#fb2525ff",
      background: "#ffe6e6ff",
      color: "#000000ff",
      iconColor: "#ff0000ff",
    });
    return;
  }

  if (!validarPaginaWeb(paginaWeb)) {
    Swal.fire({
      icon: "warning",
      title: "Página web incorrecta",
      text: "Ingresa una página web válida. Ejemplo: https://google.com",
      confirmButtonText: "Ok",
      confirmButtonColor: "#fb2525ff",
      background: "#ffe6e6ff",
      color: "#000000ff",
      iconColor: "#ff0000ff",
    });
    return;
  }

  let estadoEdad = esMayor ? "Mayor de edad" : "Menor de edad";

  await Swal.fire({
    icon: "success",
    title: "Formulario válido",
    html: `
    <p>Todos los datos son correctos.</p>
    <p><b>Edad:</b> ${edad} años</p>
    <p><b>Estado:</b> ${estadoEdad}</p>
    <p><b>IPv4:</b> ${ipv4}</p>
    <p><b>Página web:</b> ${paginaWeb}</p>
  `,
    confirmButtonText: "Ok",
    confirmButtonColor: "#22c55e",
    background: "#e6ffed",
    color: "#000000ff",
    iconColor: "#22c55e",
  });

  limpiar();
}

function limpiar() {
  document.getElementById("primerNombre").value = "";
  document.getElementById("segundoNombre").value = "";
  document.getElementById("email").value = "";
  document.getElementById("numero").value = "";
  document.getElementById("fechaNacimiento").value = "";
  document.getElementById("contraseña").value = "";
  document.getElementById("ipv4").value = "";
  document.getElementById("paginaWeb").value = "";

  document.getElementById("primerNombre").focus();
}
