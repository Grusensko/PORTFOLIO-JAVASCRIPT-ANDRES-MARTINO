// 1 Calculadora simple en consola

//pedri datos al usuario 

let numero1 = parseFloat(prompt("Ingrese el primer número: "));
let numero2 = parseFloat(prompt("Ingrese el segundo número: "));
let operacion = prompt("Ingrese la operación a realizar (+, -, *, /): ");

let resultado;

// Estructura consicional para realizar la operación
if (operacion === "+") {
    resultado = numero1 + numero2; 
} else if (operacion === "-") {
    resultado = numero1 - numero2; 
}  else if (operacion === "*") {
    resultado = numero1 * numero2; 
} else if (operacion === "/") {
    // el signo de pregunta reemplaza un if, es un condicional ternario
    resultado = numero2 !== 0 ? numero1 / numero2 : "Error: División por cero";
} else {
    resultado = "Operación no válida";
}

console.log("El resultado es: " + resultado);

//Ejercicio adicional:
// Ejercico adicional agrega validaciones para que el usuario solo ingrese números.

/*

*/



