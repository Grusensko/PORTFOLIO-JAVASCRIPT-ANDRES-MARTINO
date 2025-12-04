function actualzarReloj() {
    const ahora = new Date();
    const horas = String(ahora.getHours()).padStart(2, '0');
    const minutos = String(ahora.getMinutes()).padStart(2, '0');
    const segundos = String(ahora.getSeconds()).padStart(2, '0');

    const reloj = document.getElementById('reloj');
    reloj.innerHTML = `${horas}:${minutos}:${segundos}`;
}

setInterval(actualzarReloj, 1000);

// Inicializar el reloj al cargar la página
actualzarReloj();

//Desafío: Cambiar el color del reloj dependiendo de la hora del día

function cambiarColorReloj() {
    const ahora = new Date();
    const horas = ahora.getHours();
    const reloj = document.getElementById('reloj');
    if (horas >= 6 && horas < 12) {
        // Mañana
        reloj.style.color = '#4bcbcbff'; // Celeste
    } else if (horas >= 12 && horas < 18) {
        // Tarde
        reloj.style.color = '#00a6ffff'; // Dorado
    } else {
        // Noche
        reloj.style.color = '#eac96eff'; // Azul oscuro
    }   
}

setInterval(cambiarColorReloj, 1000);
cambiarColorReloj();    
