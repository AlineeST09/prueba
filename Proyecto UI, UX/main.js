"use strict";

let nombre= "Alfonso "//Variable
const pi =3.141516; // Constante 
var ciudad = "CDMX" //Variable

console.log(nombre, pi, ciudad)

let texto  ="mi ma esta malita ";
let numero ="12";
let numero1 ="1"
let bool   ="tue";
console.log (typeof texto,typeof numero,typeof bool);

let nombre2= prompt("COMO TE LLAMAS");
alert("Bienvenido pinks "+ nombre2);
/*
alert("bienvenido"+nombre2);
 let num = prompt("Ingresa las calificaciones guaperris ");
 if(num>=90){
    alert("Pasaste nene")

 }
 else if (num<=80 ||num>=60){
    alert("Pasaste de asi")

 }
 else{
    alert("Triste")
 }
 */
//Vamos a comparar igual
let usuario = prompt ("Ingresa el usuario");
let clave = prompt("password");
if (usuario === "admin" && clave === "12345"){
    alert ("acceso permitido");
}else {
      alert("no papi")
}

let dia = prompt("ingresa un dia");

switch(dia .toLocaleLowerCase()){
    case"Lunes":
    alert("Inicio de semana");
    break;
    case "Martes":
        alert("mhe martes");

break;
case "miercoles":
    case"jueves":
    alert("dias que no interesan segun");
    break;
    case "viernes":
        case "sabado":
            alert ("dia de loquera");
            break;
            default:
                alert("parametro no permitido");
}
