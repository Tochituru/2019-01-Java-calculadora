var numero = 5;

while (numero >= 0) {
    document.write(numero - 1);
    document.write("<br/>");
    numero = numero - 1;
    //Si usamos break; acá, deja de repetirse; si queremos que se repita el 4 en el doc, hace falta escribirla después de la resta)
    break;
}
console.log(numero);

var diez = 0;
while(diez !=0){
    diez = prompt("ingrese un numero");
}