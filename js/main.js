
let listaAeronaves = document.getElementById("listaAeronaves");
listaAeronaves.onclick = () => {
  fetch ('./js/aviones.json')
  .then( (resp) => resp.json() )
    .then( (data) => {
      data.forEach((aviones) => {
        const diver = document.createElement('div')
        diver.innerHTML = `<div class="div_lista">
        <div class="card-body diver">
          <h5 class="card-title">${aviones.Marca}</h5>
          <p class="card-text">Velocidad: ${aviones.Velocidad} nudos</p>
          <p class="card-text">Alcance: ${aviones.Alcance} millas nauticas</p>
          <p class="card-text">Capacidad para: ${aviones.Capacidad}</p>
        </div>
      </div>
        `
        document.getElementById("main").append(diver);
    })

    })

}
/* Funciones calculadora*/

/* Calculo grados de inclinacion en viraje de procedimiento */

let virajeProcedimiento = document.getElementById("virajeProcedimiento");
virajeProcedimiento.onclick = () =>{
    let form1 = document.createElement("div");
    form1.innerHTML = `<div>
    <label for="tiempo">Ingrese tiempo de alejamiento desde la estacion en minutos.</label>
    <input type="text" id="valor1" name="Name" />
    <button type="button" class="btn btn-success" onclick="botonCalcular()">Calcular</button>
   </div>
   `
    document.getElementById("main").append(form1);
    form1.className = "form1";
}
const botonCalcular = () =>{
  let valorCalculo = document.getElementById("valor1").value;
  let resultado = 36 / valorCalculo ;
  let respuesta1 = document.createElement(`p`);
  respuesta1.className = "respuesta1";
  respuesta1.innerText = "La inclinacion alar será de:" + " " + resultado + "°";
  document.getElementById("main").append(respuesta1);
}

/* Calculo de viraje estandar */

let virajeEstandar = document.getElementById("virajeEstandar");
virajeEstandar.onclick = () =>{
   let form2 = document.createElement("div");
   form2.innerHTML = `<div>
   <label for="tiempo">Ingrese su TAS en nudos.</label>
   <input type="text" id="valor2" name="Name" />
   <button type="button" class="btn btn-success" onclick="botonCalcular2()">Calcular</button>
  </div>
  `
  document.getElementById("main").append(form2);
  form2.className="form1";
  } 
  const botonCalcular2 = () =>{
    let valorCalculo2 = document.getElementById("valor2").value;
    let resultado2 = (valorCalculo2 / 10) + 7 ;
    let respuesta2 = document.createElement(`p`);
    respuesta2.className = "respuesta1";
    respuesta2.innerText = "La inclinacion alar será de:" + " " + resultado2 + "°";
    document.getElementById("main").append(respuesta2);
  }

/* Calculo de anticipacion a arco DME o radial */

let anticipacionArco = document.getElementById ("anticipacionArco");
anticipacionArco.onclick = () =>{
  let form3 = document.createElement("div");
  form3.innerHTML = `<div>
  <label for="tiempo">Ingrese su ground speed en nudos.</label>
  <input type="text" id="valor3" name="Name" />
  <button type="button" class="btn btn-success" onclick="botonCalcular3()">Calcular</button>
 </div>
 `
  document.getElementById("main").append(form3);
  form3.className = "form1";
    }
const botonCalcular3 = () =>{
  let valorCalculo3 = document.getElementById("valor3").value;
  let resultado3 = (valorCalculo3/100);
  let respuesta3 = document.createElement(`p`);
  respuesta3.className = "respuesta1";
  respuesta3.innerText = "El anticipo será de:" + " " + resultado3 + " " + "millas nauticas";
  document.getElementById("main").append(respuesta3);
}

/* Calculo de error oblicuo DME */

let errorOblicuo = document.getElementById("errorOblicuo");
errorOblicuo.onclick = () =>{
  let form4 = document.createElement("div");
  form4.innerHTML = `<div>
  <label for="tiempo">Ingrese su altitud en pies.</label>
  <input type="text" id="valor4" name="Name" />
  <button type="button" class="btn btn-success" onclick="botonCalcular4()">Calcular</button>
 </div>
 `
  document.getElementById("main").append(form4);
  form4.className = "form1";
  }
  const botonCalcular4 = () =>{
    let valorCalculo4 = document.getElementById("valor4").value;
    let resultado4 = (valorCalculo4/6000);
  let respuesta4 = document.createElement(`p`);
  respuesta4.className = "respuesta1";
  respuesta4.innerText = "El error será de:" + " " + resultado4 + " " + "millas nauticas";
  document.getElementById("main").append(respuesta4);

  }

/* Navegador */

const avionesNavegador = [ 
  { id: 1 , avion: "Cessna 152" , velocidad: "90" ,  consumo: "21"},
  { id: 1 , avion: "Piper arrow" , velocidad: "140" ,  consumo: "38"},  
  { id: 1 , avion: "B200" , velocidad: "320" ,  consumo: "650"}
];

let navegador = document.getElementById("navegador");
navegador.onclick = () =>{
  let crearTabla = document.createElement("div");
  crearTabla.innerHTML = `<div class="input-group mb-3">
  <label class="input-group-text" for="inputGroupSelect01">SELECCIONE AERONAVE</label>
  <select class="form-select" id="inputGroupSelect01">
    <option selected>Choose...</option>
    <option value="1">Cessna 152</option>
    <option value="2">Piper Arrow</option>
    <option value="3">B200</option>
  </select>
</div>
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">ORIGEN</th>
      <th scope="col">DESTINO</th>
      <th scope="col">HEADING</th>
      <th scope="col">NIVEL</th>
      <th scope="col">DISTANCIA</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td><input type="email" class="form-control" id="origen1" placeholder=></td>
      <td><input type="email" class="form-control" id="destino1" placeholder=></td>
      <td><input type="email" class="form-control" id="heading1" placeholder=></td>
      <td><input type="email" class="form-control" id="nivel1" placeholder=></td>
      <td><input type="email" class="form-control" id="distancia1" placeholder=></td>
      
    </tr>
    <tr>
      <th scope="row">2</th>
      <td><input type="email" class="form-control" id="origen2" placeholder=></td>
      <td><input type="email" class="form-control" id="destino2" placeholder=></td>
      <td><input type="email" class="form-control" id="heading2" placeholder=></td>
      <td><input type="email" class="form-control" id="nivel2" placeholder=></td>
      <td><input type="email" class="form-control" id="distancia2" placeholder=></td>
      
    </tr>
    <tr>
      <th scope="row">3</th>
      <td><input type="email" class="form-control" id="origen3" placeholder=></td>
      <td><input type="email" class="form-control" id="destino3" placeholder=></td>
      <td><input type="email" class="form-control" id="heading3" placeholder=></td>
      <td><input type="email" class="form-control" id="nivel3" placeholder=></td>
      <td><input type="email" class="form-control" id="distancia3" placeholder=></td>
      
    </tr>
    <tr>
      <th scope="row">4</th>
      <td><input type="email" class="form-control" id="origen4" placeholder=></td>
      <td><input type="email" class="form-control" id="destino4" placeholder=></td>
      <td><input type="email" class="form-control" id="heading4" placeholder=></td>
      <td><input type="email" class="form-control" id="nivel4" placeholder=></td>
      <td><input type="email" class="form-control" id="distancia4" placeholder=></td>
      
    </tr>
  </tbody>
</table>

<button type="button" class="btn btn-primary" onclick="guardar_datos()">Guardar e imprimir </button> `
document.getElementById("main").append(crearTabla);
}

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
  let origen2 = document.getElementById("origen2").value;
  localStorage.setItem('origen2' , origen2);
  let destino2 = document.getElementById("destino2").value;
  localStorage.setItem('destino2' , destino2);
  let heading2 = document.getElementById("heading2").value;
  localStorage.setItem('heading2' , heading2);
  let nivel2 = document.getElementById("nivel2").value;
  localStorage.setItem('nivel2' , nivel2);
  let distancia2 = document.getElementById("distancia2").value;
  localStorage.setItem('distancia2' , distancia2);
  let origen3 = document.getElementById("origen3").value;
  localStorage.setItem('origen3' , origen3);
  let destino3 = document.getElementById("destino3").value;
  localStorage.setItem('destino3' , destino3);
  let heading3 = document.getElementById("heading3").value;
  localStorage.setItem('heading3' , heading3);
  let nivel3 = document.getElementById("nivel3").value;
  localStorage.setItem('nivel3' , nivel3);
  let distancia3 = document.getElementById("distancia3").value;
  localStorage.setItem('distancia3' , distancia3);
  let origen4 = document.getElementById("origen4").value;
  localStorage.setItem('origen4' , origen4);
  let destino4 = document.getElementById("destino4").value;
  localStorage.setItem('destino4' , destino4);
  let heading4 = document.getElementById("heading4").value;
  localStorage.setItem('heading4' , heading4);
  let nivel4 = document.getElementById("nivel4").value;
  localStorage.setItem('nivel4' , nivel4);
  let distancia4 = document.getElementById("distancia4").value;
  localStorage.setItem('distancia4' , distancia4);
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Los datos fueron guardados y enviados a la impresora!',
    showConfirmButton: false,
    timer: 1500
  })
}