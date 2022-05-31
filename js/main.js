
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
          <p class="card-text">Alcance: ${aviones.Velocidad} millas nauticas</p>
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
    const anticipo = (e , f) => { return e / f}
    alert( anticipo (prompt("Ingrese su ground Speed en nudos") , 100 ) + " millas nauticas");
    }

/* Calculo de error oblicuo DME */

let errorOblicuo = document.getElementById("errorOblicuo");
errorOblicuo.onclick = () =>{
    const errorOblicuo = (g , h) => {return g / h}
    alert(errorOblicuo(prompt("Ingrese altitud en pies") , 6000 ) + " millas nauticas");
    }

 /* array */ 
 const aeronaves = ["Cessna 152" , "Cessna 172" , "Piper Arrow" , "Beechcraft King Air 350"];

 let agregarAeronaves = document.getElementById("agregarAeronaves");
 


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
      <th scope="col">TIEMPO</th>
      <th scope="col">COMBUSTIBLE</th>
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
      <td><input type="email" class="form-control" id="" placeholder=></td>
      <td><input type="email" class="form-control" id="" placeholder=></td>
      <td><input type="email" class="form-control" id="" placeholder=></td>
      <td><input type="email" class="form-control" id="" placeholder=></td>
      <td><input type="email" class="form-control" id="" placeholder=></td>
      
    </tr>
    <tr>
      <th scope="row">4</th>
      <td><input type="email" class="form-control" id="" placeholder=></td>
      <td><input type="email" class="form-control" id="" placeholder=></td>
      <td><input type="email" class="form-control" id="" placeholder=></td>
      <td><input type="email" class="form-control" id="" placeholder=></td>
      <td><input type="email" class="form-control" id="" placeholder=></td>
      
    </tr>
    <tr>
      <th scope="row">5</th>
      <td colspan="2">TOTALES</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>

<button type="button" class="btn btn-primary" onclick="guardar_datos()">Guardar datos </button> `
document.getElementById("main").append(crearTabla);
}

