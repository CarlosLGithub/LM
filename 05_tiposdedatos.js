'use strict'

//OPERADORES
var numero1 = 7;
var numero2 = 10;
var operacion = (numero1+numero2);
alert(operacion);
console.log(operacion);


//TIPOS DE DATOS
//ENTERO (DATOS DE TIPO ENTERO)
var numeroint = 44;
console.log(numeroint)

//FLOTANTE

//STRING (CONSTRUCCION DE CADENAS)
var cadena ="Hola, ¿que tal?" + " Tengo " + numeroint + " años";
alert(cadena);
console.log(cadena);

//BOOLEANO (SIRVE PARA CONDICIONES)
var verdadero_false=true; 

//ARRAY

//NUMBER
var numero_falso = "33";

console.log(Number(numero_falso)+7)
console.log(parseInt(numero_falso)+7) //Con parseint conviertes el dato a un tipo entero

//TYPEOF

console.log(typeof(numero1));
console.log(typeof(numero2));
console.log(typeof(operacion));
console.log(typeof(cadena));
console.log(typeof(verdadero_false));
console.log(typeof(numero_falso));
