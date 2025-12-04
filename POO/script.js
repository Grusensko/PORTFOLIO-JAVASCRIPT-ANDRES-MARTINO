class Perro {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    ladrar() {
        console.log(`${this.nombre} dice: ¡Guau Guau!`);
    }   
}
    // creamos un objeto
const miPerro = new Perro('Firulais', 3);

// llamamos al método ladrar
miPerro.ladrar();   



class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    mostrarInfo() {
        console.log(`Producto: ${this.nombre}, Precio: $${this.precio}`);
    }   
}

const p1 = new Producto('Laptop', 1500);
const p2 = new Producto('Smartphone', 800);



p1.mostrarInfo();
p2.mostrarInfo();