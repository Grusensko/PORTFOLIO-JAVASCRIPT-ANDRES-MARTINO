// Conversor de temperaturas

//función declarativa

function celsiusAFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// funcion flacha

const fahrenheitACelsius = (fahrenheit) => ((fahrenheit - 32) * 5/9);

//programa principal
//let opcion = prompt("Elija la conversión: 1. Celsius a Fahrenheit 2. Fahrenheit a Celsius");
//
//if (opcion === "1") {
//    let celsius = parseFloat(prompt("Ingrese la temperatura en Celsius: "));
//    console.log(`${celsius}°C son ${celsiusAFahrenheit(celsius).toFixed(2)}°F`);
//} else if (opcion === "2") {
//    let fahrenheit = parseFloat(prompt("Ingrese la temperatura en Fahrenheit: "));
//    console.log(`${fahrenheit}°F son ${fahrenheitACelsius(fahrenheit).toFixed(2)}°C`);
//} else {
//    console.log("Opción no válida.");
//}

// Desafío: Agregar una tercera opción para convertir Kelvin a Celsius y viceversa.

const kelvinACelsius = (kelvin) => kelvin - 273.15;
const celsiusAKelvin = (celsius) => celsius + 273.15;

let opcion = prompt("Elija la conversión: 1. Celsius a Fahrenheit 2. Fahrenheit a Celsius 3. Kelvin a Celsius 4. Celsius a Kelvin");

if (opcion === "1") {
    let celsius = parseFloat(prompt("Ingrese la temperatura en Celsius: "));
    console.log(`${celsius}°C son ${celsiusAFahrenheit(celsius).toFixed(2)}°F`);
} else if (opcion === "2") {
    let fahrenheit = parseFloat(prompt("Ingrese la temperatura en Fahrenheit: "));
    console.log(`${fahrenheit}°F son ${fahrenheitACelsius(fahrenheit).toFixed(2)}°C`);
} else if (opcion === "3") {
    let kelvin = parseFloat(prompt("Ingrese la temperatura en Kelvin: "));
    console.log(`${kelvin}K son ${kelvinACelsius(kelvin).toFixed(2)}°C`);
} else if (opcion === "4") {
    let celsius = parseFloat(prompt("Ingrese la temperatura en Celsius: "));
    console.log(`${celsius}°C son ${celsiusAKelvin(celsius).toFixed(2)}K`);
} else {
    console.log("Opción no válida.");
}