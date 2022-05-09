

let botonLista = document.getElementById("listaAeronaves");
botonLista.onclick = () => {
    let listaAviones = document.createElement ("div");
    listaAviones.innerHTML = `<ul class="list-group">
    <li class="list-group-item">
      <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
      Cessna 152
    </li>
    <li class="list-group-item">
      <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
      Cessna 172
    </li>
    <li class="list-group-item">
      <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
      Piper Arrow
    </li>
    <li class="list-group-item">
      <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
      Beechcraft King Air 350
    </li>
  </ul>`
    document.getElementById("main").appendChild(listaAviones);

}
/* Funciones calculadora*/

/* Calculo grados de inclinacion en viraje de procedimiento */
let virajeProcedimiento = document.getElementById("virajeProcedimiento");
virajeProcedimiento.onclick = () =>{
    const grados = (a , b) => { return a / b };
    alert( grados(36 ,prompt("Ingrese tiempo de alejamiento desde la estacion en minutos.")) + "°");
    }

/* Calculo de viraje estandar */

let virajeEstandar = document.getElementById("virajeEstandar");
virajeEstandar.onclick = () =>{
    const virajeEstandar = (b , c) => {return (b/10) + c}
    alert( virajeEstandar(prompt("Ingrese su TAS en nudos.") , 7) + "°"); 
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
 