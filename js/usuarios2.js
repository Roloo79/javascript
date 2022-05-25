let iniciarSesion = document.getElementById("iniciar_sesion");
iniciarSesion.onclick = () =>{

let usuarioNuevo = localStorage.getItem('email');
let claveNueva = localStorage.getItem('contraseña');
let usuario = document.getElementById('usuario').value;
let clave = document.getElementById('clave').value;
let nombre = localStorage.getItem('nombre');

if ((usuarioNuevo == usuario) && (claveNueva==clave)){
    Swal.fire({
        title: '¡Bienvenido' + ' ' + nombre + '!',
        width: 600,
        padding: '3em',
        color: '#716add',
        backdrop: `
          rgba(21, 88, 189)`,
        confirmButtonText: 'OK',
        showConfirmButton: false
      })
}
else{
    Swal.fire({
        title: 'Los datos ingresados son incorrectos!',
        width: 600,
        padding: '3em',
        icon: 'error',
        color: '#716add',
        backdrop: `
          rgba(218, 0, 0)
        `
      })
}
}