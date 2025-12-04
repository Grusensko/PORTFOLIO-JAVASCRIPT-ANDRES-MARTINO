/* Practica numero 18 */

class Animal {
    comer() {
        console.log("El animal está comiendo");
    }   
}   

class perro extends Animal {
    ladrar() {
        console.log("El perro está ladrando");
    }
}

const firu = new perro();
firu.comer();
firu.ladrar();  


/* ¿Qué es super? */

class Animal2   {
    constructor(nombre) {
        this.nombre = nombre;
    }   
}
class Perro2 extends Animal2 {        
    constructor(nombre, raza) {
        super(nombre);
        this.raza = raza;
        
    }
}


/* Métodos estáticos */
class Matematica {
    static sumar(a, b) {
        return a + b;
    }
}

Matematica.sumar(5, 10); // 15

/* Encapsulación */

class CuentaBancaria {
    #saldo = 0;

    depositar(monto) {
        this.#saldo += monto;
    }

    verSaldo() {
        return this.#saldo;
    }
}

const c = new CuentaBancaria();
c.depositar(1000);
console.log(c.verSaldo()); // 1000


/* Practica de ejemplo */

class Autor{
    constructor(nombre){
        this.nombre = nombre;
        this.cantidadDeLibros = 0;
    }       
}

class Libro {
    constructor(titulo, autor){
        this.titulo = titulo;
        this.autor = autor;
        autor.cantidadDeLibros ++;
    }

    mostrar() {
        console.log(`El libro "${this.titulo}" fue escrito por ${this.autor.nombre}, quien ha escrito ${this.autor.cantidadDeLibros} libros.`);
    }
}
    const autor1 = new Autor("Gabriel Garcia Marquez" );
    const libro1 = new Libro("Cien Años de Soledad", autor1);

    libro1.mostrar();
    console.log(autor1.cantidadDeLibros);
