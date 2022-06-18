guardar_datos = () =>{
    let origen1 = document.getElementById("origen1").value;
    localStorage.setItem('origen1' , origen1);
    let destino1 = document.getElementById("destino1").value;
    localStorage.setItem('destino1' , destino1);
    let heading1 = document.getElementById("heading1").value;
    localStorage.setItem('heading1' , heading1);
    let nivel1 = document.getElementById("nivel1").value;
    localStorage.setItem('nivel1' , nivel1);
    let distancia1 = document.getElementById("distancia1").value;
    localStorage.setItem('distancia1' , distancia1);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Los datos fueron guardados y enviados a la impresora!',
      showConfirmButton: false,
      timer: 1500
    })
  }