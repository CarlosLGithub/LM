'use strict'

//CONDICIONAL IF

var numero1=1,numero2=2;

if(numero1==numero2)
{
    console.log("Los numeros son iguales")
}

else
{
    console.log("Los numeros son diferentes")
}

var edad=75;
var nombre='David Suarez'

if(edad>=18)
{
    console.log(nombre + " tiene " + edad + " años, es mayor de edad")

    if(edad<=25)
    {
        console.log(nombre + " tiene " + edad + " ha superado el limite de los 20 años")
    }

    else if(edad<=35)
        {
            console.log(nombre + " tiene " + edad + " ha superado el limite de los 30 años, es un adulto")
        }

        else
        {
            console.log(nombre + " tiene mas de setenta años, es un anciano")
        }
}

else 
{
    console.log(nombre + " tiene " + edad + " años, es menor de edad")
}

//OPERADORES RELACIONALES
/*
Mayor: >
Menor: <
mayor o igual: >=
Menor o igual: <=
Igual: ==
Distinto: !=
*/

//OPERADORES LOGICOS
/*
AND(Y)=&&
OR (O)= ||
Negación:!
*/

if(edad==65 && nombre=="David Suarez")
{
    console.log("Los parametros si coinciden")
    
}

else if (edad==65 || nombre=="Jorge Ordoñez")
{
    console.log("Solo uno de los parametros coincide")
}

else //ACTUA LOGICAMENTE EN ESTE CASO COMO !
{
    console.log("Ningun parametro coincide")
}