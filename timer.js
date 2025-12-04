let segundos = 0;
let intervalo;

// Nuevo: umbrales en segundos donde se reproduce sonido/animación
const umbrales = [5, 10, 15]; // ajustar según necesidad
let umbralesActivados = new Set();

// WebAudio beep simple
let audioCtx;
function playBeep(frequency = 880, duration = 200) {
    try {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = "sine";
        osc.frequency.value = frequency;
        gain.gain.setValueAtTime(0.0001, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.2, audioCtx.currentTime + 0.01);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        setTimeout(() => {
            gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.02);
            osc.stop(audioCtx.currentTime + 0.03);
        }, duration);
    } catch (e) {
        // silencioso si no es posible crear AudioContext
        console.warn("Audio no disponible:", e);
    }
}

function actualizarCronometro() {
    const hes = String(Math.floor(segundos / 3600)).padStart(2, '0');
    const mins = String(Math.floor((segundos % 3600) / 60)).padStart(2, '0');
    const segs = String(segundos % 60).padStart(2, '0');

    document.getElementById('cronometro').textContent = `${hes}:${mins}:${segs}`;
}

function triggerAviso(sec) {
    // animación
    const el = document.getElementById('cronometro');
    el.classList.add('pulse');
    setTimeout(() => el.classList.remove('pulse'), 900);

    // sonido - frecuencia distinta para cada umbral (opcional)
    const freq = sec >= 60 ? 440 : (sec >= 30 ? 660 : 880);
    playBeep(freq, 300);
}

document.getElementById('iniciar').addEventListener('click', () =>  {
    if (!intervalo) {
        // resume AudioContext si está en estado suspended (importante en algunos navegadores)
        if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
        intervalo = setInterval(() => {
            segundos++;
            actualizarCronometro();

            // comprobar umbrales
            if (umbrales.includes(segundos) && !umbralesActivados.has(segundos)) {
                umbralesActivados.add(segundos);
                triggerAviso(segundos);
            }
        }, 1000);
    }
});

document.getElementById('pausar').addEventListener('click', () => {
    clearInterval(intervalo);
    intervalo = null;
});

document.getElementById('reiniciar').addEventListener('click', () => {
    segundos = 0;
    actualizarCronometro();
    clearInterval(intervalo);
    intervalo = null;
    // reiniciar avisos para permitir que vuelvan a dispararse
    umbralesActivados.clear();
});