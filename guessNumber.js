// ----------------------------------------------------------------------------
// 2 Juego: adivina el numero

const numeroSecreto = Math.floor(Math.random() * 10) + 1; // Numero aleatorio entre 1 y 10

let intentos = 3;
let adivinado = false;

while (intentos > 0 && !adivinado) {
    let numero = parseInt(prompt(`Adivina el número entre 1 y 10. Te quedan ${intentos} intentos: `)); 

    if (numero === numeroSecreto) {
        console.log("¡Felicidades! Has adivinado el número.");
        adivinado = true;
    } else if (numero  > numeroSecreto) {
        console.log("El número es menor.");
    } else if (numero < numeroSecreto)  {  
        console.log("El número es mayor.");
    }

    intentos--;
}

if (!adivinado) {
    console.log(`Lo siento, has perdido. El número era ${numeroSecreto}.`);
}   

// Deasfío 2 -- permite que el usuarioi elija el rango de numeros.
