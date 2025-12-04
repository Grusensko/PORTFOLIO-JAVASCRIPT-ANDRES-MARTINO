// Lista de compras con totales

let listaCompras = [
    { nombre: "Leche", precio: 1200, cantidad: 2 },
    { nombre: "Pan", precio: 800, cantidad: 1 },
    { nombre: "Huevos", precio: 3000, cantidad: 1 },
    { nombre: "café", precio: 3200, cantidad: 1 }        
];

// Mostrar lista con forEach
console.log("Lista de Compras:");
listaCompras.forEach((item) => {
    console.log(`${item.cantidad} x ${item.nombre} - $${item.precio} c/u`);
});

// Calcular total con reduce
let total = listaCompras.reduce((acumulador, item) => {
    return acumulador + (item.precio * item.cantidad);
}, 0);

console.log(`Total a pagar: $${total}`);

// Filtrar productos caros

const productosCaros = listaCompras.filter(item => item.precio > 1000);
console.log("Productos con precio mayor a $1000:", productosCaros);

// Buscar un producto específico
const buscar = prompt("Ingrese el nombre del producto a buscar:");
const encontrado = listaCompras.find(
    (item) => item.nombre.toLowerCase() === buscar.toLowerCase()
);
if (encontrado) {
    console.log(`Producto encontrado: ${encontrado.cantidad} x ${encontrado.nombre} - $${encontrado.precio} c/u`);
} else {
    console.log("Producto no encontrado.");
}

// Desafío: Permitir al usuario agregar o eliminar productos de la lista dimámica usando push() y splice().

let continuar = true;

while (continuar) {
    const accion = prompt("¿Desea agregar (A) o eliminar (E) un producto? Escriba A o E (o escriba 'salir' para terminar):");
    
    if (accion && accion.toLowerCase() === "salir") {
        continuar = false;
        break;
    }
    
    if (accion && accion.toUpperCase() === "A") {
        // Agregar producto
        const nombre = prompt("Ingrese el nombre del producto:");
        const precio = parseInt(prompt("Ingrese el precio del producto:"));
        const cantidad = parseInt(prompt("Ingrese la cantidad:"));
        
        if (nombre && precio > 0 && cantidad > 0) {
            listaCompras.push({ nombre, precio, cantidad });
            console.log(`Producto "${nombre}" agregado a la lista.`);
        } else {
            console.log("Datos inválidos. Intente nuevamente.");
        }
    } 
    else if (accion && accion.toUpperCase() === "E") {
        // Eliminar producto
        const nombreEliminar = prompt("Ingrese el nombre del producto a eliminar:");
        const indice = listaCompras.findIndex(
            (item) => item.nombre.toLowerCase() === nombreEliminar.toLowerCase()
        );
        
        if (indice !== -1) {
            const eliminado = listaCompras.splice(indice, 1);
            console.log(`Producto "${eliminado[0].nombre}" eliminado de la lista.`);
        } else {
            console.log("Producto no encontrado.");
        }
    } 
    else {
        console.log("Opción no válida. Intente nuevamente.");
    }
}

// Mostrar lista actualizada
console.log("\n--- Lista de Compras Actualizada ---");
listaCompras.forEach((item) => {
    console.log(`${item.cantidad} x ${item.nombre} - $${item.precio} c/u`);
});

// Calcular total actualizado
let totalActualizado = listaCompras.reduce((acumulador, item) => {
    return acumulador + (item.precio * item.cantidad);
}, 0);

console.log(`Total a pagar: $${totalActualizado}`);