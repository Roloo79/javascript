

alert ( "Bienvenido a la calculadora de performance para aviones!")
do{
let preguntaInicial = prompt (" Por favor ingrese el numero de calculo que quiere realizar: \n 1-Grados de inclinacion en viraje de procedimiento \n 2-Viraje estandar \n 3-Anticipacion a arco DME o radial \n 4-Calculo de error oblicuo DME") 


/* Calculo grados de inclinacion en viraje de procedimiento */

if (preguntaInicial == "1"){
const grados = (a , b) => { return a / b}
alert( grados(36 , prompt("Ingrese el tiempo de alejamiento desde la estacion en minutos")) + "°");
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
else {
    alert ("Los datos ingresados son incorrectos!")
}
otros = prompt("¿Desea realizar otro calculo? \n -si \n -no");
}while (otros=="si");

if (otros== "no"){
    alert("Hasta la proxima!")
}
