// Agenda básica de contactos en JavaScript

let agenda = [];

//FUnción para agregar un contacto
function agregarContacto(nombre, telefono, email) {
    const contacto = { nombre, telefono, email };
    agenda.push(contacto);
    console.log(`Contacto ${nombre} agregado.`);
}

//Función para mostrar todos los contactos
function mostrarContactos() {
    console.log("Lista de contactos:");
    agenda.forEach(({ nombre, telefono, email }, i) => {
        console.log(`${1}. ${nombre} - Tel: ${telefono}, Email: ${email}`);
    });
}

// Función para buscar un contacto por nombre
function buscarContacto(nombre) {
    const contacto = agenda.find(
        (c) => c.nombre.toLowerCase() === nombre.toLowerCase()
    );

    if (contacto) {
        console.log(`Contacto encontrado: ${contacto.nombre} - Tel: ${contacto.telefono}, Email: ${contacto.email}`);
    } else {
        console.log("Contacto no encontrado.");
    }
}

// Funcion para exportar la agenda a formato JSON
function exportarAgenda() {
    const json = JSON.stringify(agenda, null, 2);
    console.log("Agenda en formato JSON:");
}

// Programa principal de ejemplo
agregarContacto("Andrés Martino", "123456789", "am@gmail.com");
agregarContacto("Juan Pérez", "987654321", "juan@perez.com");
mostrarContactos();

buscarContacto("Juan Pérez");

exportarAgenda();

// Desafío: Agregar funcionalidad para eliminar un contacto por nombre
function eliminarContacto(nombre) {
    const indice = agenda.findIndex(
        (c) => c.nombre.toLowerCase() === nombre.toLowerCase()
    );  
    if (indice !== -1) {
        agenda.splice(indice, 1);
        console.log(`Contacto ${nombre} eliminado.`);
    } else {
        console.log("Contacto no encontrado.");
    }
}

// Desafio2: Guardar y cargar los datos desde localStorage para que persistan entre sesiones

function guardarAgenda() {
    localStorage.setItem("agenda", JSON.stringify(agenda));
    console.log("Agenda guardada en localStorage.");
}
function cargarAgenda() {
    const datos = localStorage.getItem("agenda");
    if (datos) {
        agenda = JSON.parse(datos);
        console.log("Agenda cargada desde localStorage.");
    } else {
        console.log("No hay datos en localStorage.");
    }   
}

// Ejemplo de uso de guardar y cargar
guardarAgenda();
agenda = []; // Limpiar agenda en memoria
cargarAgenda();
mostrarContactos();

