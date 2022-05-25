let crearUsuario = document.getElementById("crear_usuario");
crearUsuario.onclick = () => {
  let nombre = document.getElementById("nombre").value;
  localStorage.setItem('nombre' , nombre);
  let apellido = document.getElementById("apellido").value;
  localStorage.setItem('apellido' , apellido);
  let email = document.getElementById("email").value;
  localStorage.setItem('email' , email);
  let contraseña = document.getElementById("contraseña").value;
  localStorage.setItem('contraseña' , contraseña);
}
