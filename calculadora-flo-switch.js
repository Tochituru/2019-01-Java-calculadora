var numero1 = prompt("Ingrese el número 1");
var operacion = prompt("Ingrese el signo de la operación (+ - * /)");
var numero2 = prompt("Ingrese el número 2");
var resultado;

numero1 = parseInt(numero1);
numero2 = parseInt(numero2);

if(!isNaN(numero1) && 
   !isNaN(numero2)) {
       switch (operacion) {
    case "+":
        resultado = numero1 + numero2;
        break;
    case "-":
        resultado = numero1 + numero2;
        break;
    case "*":
        resultado = numero1 * numero2;
        break;
    case "/":
        resultado = numero1 + numero2;
        break;
    default:
        resultado = "La cagaste. Volvé al principio.";
}
document.write(resultado);
   }