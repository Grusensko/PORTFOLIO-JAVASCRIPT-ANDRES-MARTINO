// ❌ MAL: Función muy larga (más de 20 líneas)
function procesarUsuarioMal(nombre, email, edad, pais) {
    if (!nombre || nombre.trim() === '') {
        console.log('Error: nombre vacío');
        return null;
    }
    
    if (!email || !email.includes('@')) {
        console.log('Error: email inválido');
        return null;
    }
    
    if (edad < 18 || edad > 120) {
        console.log('Error: edad fuera de rango');
        return null;
    }
    
    if (!pais || pais.trim() === '') {
        console.log('Error: país vacío');
        return null;
    }
    
    const usuario = {
        nombre: nombre.trim(),
        email: email.toLowerCase(),
        edad: edad,
        pais: pais.trim(),
        fechaRegistro: new Date()
    };
    
    console.log('Usuario registrado:', usuario);
    return usuario;
}

// ✅ BIEN: Funciones pequeñas y reutilizables (máximo 20 líneas)

// Validaciones específicas
function validarNombre(nombre) {
    if (!nombre || nombre.trim() === '') {
        console.log('Error: nombre vacío');
        return false;
    }
    return true;
}

function validarEmail(email) {
    if (!email || !email.includes('@')) {
        console.log('Error: email inválido');
        return false;
    }
    return true;
}

function validarEdad(edad) {
    if (edad < 18 || edad > 120) {
        console.log('Error: edad fuera de rango');
        return false;
    }
    return true;
}

function validarPais(pais) {
    if (!pais || pais.trim() === '') {
        console.log('Error: país vacío');
        return false;
    }
    return true;
}

// Función que valida todos los datos
function validarDatos(nombre, email, edad, pais) {
    return validarNombre(nombre) && 
           validarEmail(email) && 
           validarEdad(edad) && 
           validarPais(pais);
}

// Función que crea el objeto usuario
function crearUsuario(nombre, email, edad, pais) {
    return {
        nombre: nombre.trim(),
        email: email.toLowerCase(),
        edad: edad,
        pais: pais.trim(),
        fechaRegistro: new Date()
    };
}

// Función principal - orquesta el proceso
function procesarUsuario(nombre, email, edad, pais) {
    if (!validarDatos(nombre, email, edad, pais)) {
        return null;
    }
    
    const usuario = crearUsuario(nombre, email, edad, pais);
    console.log('Usuario registrado:', usuario);
    return usuario;
}

// Ejemplo de uso
console.log('--- Ejemplo 1: Usuario válido ---');
procesarUsuario('Juan Pérez', 'juan@example.com', 25, 'España');

console.log('\n--- Ejemplo 2: Usuario con email inválido ---');
procesarUsuario('María García', 'maria-sin-arroba', 30, 'México');

console.log('\n--- Ejemplo 3: Usuario menor de edad ---');
procesarUsuario('Carlos López', 'carlos@example.com', 16, 'Argentina');