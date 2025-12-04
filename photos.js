const boton = document.getElementById('buscar');
const img = document.getElementById('imagen');
const inputTema = document.getElementById('tema');

// Función para obtener una imagen de ejemplo
function obtenerImagen() {
  const tema = inputTema.value.trim() || 'random';
  
  // URL base de Picsum: permite setear tamaño y efectos
  // También usamos Math.random() para evitar cachear la misma imagen
  const url = `https://picsum.photos/seed/${tema + Math.random()}/400/300?grayscale&blur=1`;

  img.src = url;
}

// Evento para cambiar la imagen al hacer clic
boton.addEventListener('click', obtenerImagen);

// Mostrar una imagen inicial
obtenerImagen();