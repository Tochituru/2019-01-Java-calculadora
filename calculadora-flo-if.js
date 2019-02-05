var numero1 = prompt("Ingrese el número 1");
var operacion = prompt ("Ingrese el signo de la operación (+ - * /)");
var numero2 = prompt ("Ingrese el número 2");
var resultado;

numero1 = parseInt(numero1);
operacion = parseInt(operacion);
numero2 = parseInt(numero2);

//Opción 1//
if (operacion == '+') {
    resultado = numero1 + numero2;
} else if (operacion =='-') {
    resultado = numero1 - numero2; 
} else if (operacion == '*') {
    resultado = numero1 * numero2;
} else if (operacion == '/') {
    resultado = numero1 / numero2;
} else {
    console.log('La cagaste. Pulsa F5.')
}

if (typeof(resultado) != "undefined") {
document.write(resultado);
}