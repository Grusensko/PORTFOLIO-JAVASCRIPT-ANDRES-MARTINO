const form = document.getElementById('registerForm');
const mensaje = document.getElementById('mensaje');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!nombre || !email || !password) {
        mensaje.textContent = 'Por favor, complete todos los campos.';
        mensaje.style.color = 'red';
        return;
    }

    if (!email.includes('@') || !email.includes('.')) {
        mensaje.textContent = 'Por favor, ingrese un correo electrónico válido.';
        mensaje.style.color = 'red';
        return;
    }   

    if (password.length < 6) {
        mensaje.textContent = 'La contraseña debe tener al menos 6 caracteres.';
        mensaje.style.color = 'red';
        return;
    }
    
    // Desafío: almacenar datos en localStorage y mostrar alerta personalizada
    const usuario = {
        nombre: nombre,
        email: email,
        password: password,
        fechaRegistro: new Date().toLocaleDateString()
    };
    
    localStorage.setItem('usuario', JSON.stringify(usuario));
    
    mensaje.style.color = 'green';
    mensaje.textContent = 'Registro exitoso. Redirigiendo...';
    form.reset();
    
    // Mostrar alerta personalizada
    alert(`¡Bienvenido ${nombre}!\nTu registro ha sido completado exitosamente.\nCorreo: ${email}`);
    
    // Opcional: redirigir a otra página
    // setTimeout(() => { window.location.href = 'login.html'; }, 2000);
});

// Cargar y mostrar alerta al iniciar sesión (si ya existe usuario registrado)
window.addEventListener('load', () => {
    const usuarioGuardado = localStorage.getItem('usuario');
    if (usuarioGuardado) {
        const usuario = JSON.parse(usuarioGuardado);
        alert(`¡Bienvenido de vuelta ${usuario.nombre}!\nÚltimo acceso: ${usuario.fechaRegistro}`);
    }
});