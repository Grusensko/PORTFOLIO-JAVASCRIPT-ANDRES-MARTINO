// Calculadora con interfaz gráfica

const pantalla = document.getElementById("display");
const botones = document.querySelectorAll(".button");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const valor = boton.textContent;

        if (valor === "=") {
            try {   
                pantalla.value = eval(pantalla.value);
            } catch {
                pantalla.value = "Error";
            }
        } else {
            pantalla.value += valor;    

        }
    });
});

// Desafío: Agregar funcionalidad para limpiar la pantalla con un botón "C"
const botonLimpiar = document.getElementById("limpiar");
botonLimpiar.addEventListener("click", () => {
    pantalla.value = "";
}); 

