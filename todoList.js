const input = document.getElementById('tarea');
const boton = document.getElementById('agregar');
const lista = document.getElementById('lista');

// Cargar tareas al iniciar
cargarTareas();

boton.addEventListener('click', () => {
    const texto = input.value.trim();
    if (texto === '') return;

    agregarTarea(texto);
    input.value = '';
});

function agregarTarea(texto) {
    const li = document.createElement('li');
    li.textContent = texto;

    const btnBorrar = document.createElement('button');
    btnBorrar.textContent = 'Borrar';
    btnBorrar.addEventListener('click', () => {
        li.remove();
        guardarTareas();
    });
    
    li.appendChild(btnBorrar);
    lista.appendChild(li);
    
    guardarTareas();
}

// Desafío: guardar las tareas en localStorage para que persistan al recargar la página
function guardarTareas() {
    const tareas = [];
    document.querySelectorAll('#lista li').forEach(li => {
        tareas.push(li.textContent.replace('Borrar', '').trim());
    });
    localStorage.setItem('tareas', JSON.stringify(tareas));
}

function cargarTareas() {
    const tareasGuardadas = localStorage.getItem('tareas');
    if (tareasGuardadas) {
        const tareas = JSON.parse(tareasGuardadas);
        tareas.forEach(tarea => agregarTarea(tarea));
    }
}