// Generador de Tablas de Multiplicar

let numero = parseInt(prompt("Ingrese un número para generar su tabla de multiplicar: "));
let limite = parseInt(prompt("Ingrese el límite hasta donde desea multiplicar: "));

console.log(`Tabla de multiplicar del ${numero} hasta el ${limite}:`);

// Programa principal
//for (let i = 1; i <= limite; i++) {
//    console.log(`${numero} x ${i} = ${numero * i}`);
//}
    

// Desafío: Almacenar los resultados en un array y mostrarlos usando for...of
let resultados = []; // array para almacenar resultados

for (let i = 1; i <= limite; i++) {
    const linea = `${numero} x ${i} = ${numero * i}`;
    console.log(linea);
    resultados.push(linea);
}

// Mostrar resultados usando for...of
console.log("Resultados guardados en el array:");
for (const linea of resultados) {
    console.log(linea);
}
// fin desafío