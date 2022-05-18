let iniciarSesion = document.getElementById("iniciar_sesion");
iniciarSesion.onclick = () =>{

let usuarioNuevo = localStorage.getItem('email');
let claveNueva = localStorage.getItem('contraseña');
let usuario = document.getElementById('usuario').value;
let clave = document.getElementById('clave').value;

if ((usuarioNuevo == usuario) && (claveNueva==clave)){
    alert("La sesion fue iniciada");
}
else{
    alert("El usuario o la contraseña son incorrectos!");
}
}