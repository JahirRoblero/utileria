async function validar(event) {
  event.preventDefault();

  let email = document.getElementById("email").value.trim();
  let contraseña = document.getElementById("contraseña").value;

  if (email === "") {
    Swal.fire({
      icon: "warning",
      title: "Correo vacío",
      text: "Por favor ingresa tu correo electrónico.",
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
      title: "Correo incorrecto",
      text: "Por favor ingresa un correo electrónico válido.",
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
      text: "Por favor ingresa tu contraseña.",
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
      title: "Contraseña insegura",
      text: "La contraseña debe tener mayúscula, minúscula, número, carácter especial y mínimo 8 caracteres.",
      confirmButtonText: "Ok",
      confirmButtonColor: "#fb2525ff",
      background: "#ffe6e6ff",
      color: "#000000ff",
      iconColor: "#ff0000ff",
    });
    return;
  }

  await Swal.fire({
    icon: "success",
    title: "Login validado",
    text: "El correo y la contraseña cumplen con las validaciones.",
    confirmButtonText: "Ok",
    confirmButtonColor: "#22c55e",
    background: "#e6ffed",
    color: "#000000ff",
    iconColor: "#22c55e",
  });

  limpiar();
}

function limpiar() {
  document.getElementById("email").value = "";
  document.getElementById("contraseña").value = "";

  document.getElementById("email").focus();
}
