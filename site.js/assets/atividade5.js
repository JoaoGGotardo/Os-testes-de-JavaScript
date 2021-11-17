var nota1 = prompt("Nota: peso 2");
var nota2 = prompt("Nota: peso 3");
var nota3 = prompt("Nota: peso 5");

var resu1 = parseInt(nota1) * 2;
var resu2 = parseInt(nota2) * 3;
var resu3 = parseInt(nota3) * 5; 

var mediaFinal = (resu1 + resu2 + resu3) / 3; 

document.write("Sua média final é: ", mediaFinal)