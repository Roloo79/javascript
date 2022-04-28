
alert ( "Bienvenido a la calculadora de performance para aviones!")
do{
let preguntaInicial = prompt (" Por favor seleccione la opcion que quiere realizar: \n 1-Calcular grados de inclinacion en viraje de procedimiento \n 2-Calcular viraje estandar \n 3-Calcular anticipacion a arco DME o radial \n 4-Calculo de error oblicuo DME \n 5-Ver lista de aviones disponibles") 

/* Calculo grados de inclinacion en viraje de procedimiento */
if (preguntaInicial == "1"){
const grados = (a , b) => { return a / b };
alert( grados(36 ,prompt("Ingrese tiempo de alejamiento desde la estacion")) + "°");
}

/* Calculo de viraje estandar */

else if (preguntaInicial == "2"){
const virajeEstandar = (b , c) => {return (b/10) + c}
alert( virajeEstandar(prompt("ingrese su TAS") , 7) + "°"); 
}

/* Calculo de anticipacion a arco DME o radial */

else if (preguntaInicial == "3"){
const anticipo = (e , f) => { return e / f}
alert( anticipo (prompt("Ingrese su ground Speed en nudos") , 100 ) + " millas nauticas");
}

/* Calculo de error oblicuo DME */

else if (preguntaInicial == "4"){
const errorOblicuo = (g , h) => {return g / h}
alert(errorOblicuo(prompt("Ingrese altitud en pies") , 6000 ) + " millas nauticas");
}

/* Ver lista de aviones */

else if (preguntaInicial == "5"){

    /*array*/

    const aviones = ["Cessna 152" , "Cessna 172" , "Piper Seneca 3"]
    alert("La lista de aviones es:\n" + " " + aviones.toString());
    
    let agregarAvion = prompt ("¿Desea agregar otro? si/no");
    if (agregarAvion=="si"){
        let nombreAvion = prompt ("ingrese el nombre del avion");
        aviones.push(nombreAvion);
        alert("Su avion fue agregado con exito! La lista quedo asi:\n" + aviones.join(", ")+".");
    }
}
else {
    alert ("Los datos ingresados son incorrectos!")
}
otros = prompt("¿Desea realizar otra tarea? \n -si \n -no");
}while (otros=="si");

if (otros== "no"){
    alert(" Hasta la proxima!")
}

