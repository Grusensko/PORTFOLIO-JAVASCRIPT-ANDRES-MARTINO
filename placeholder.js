// URL de una API pública que devuelve una lista de usuarios
const apiURL = 'https://jsonplaceholder.typicode.com/users';

// Función asíncrona para obtener los datos
async function obtenerUsuarios() { 
  try {
    // Hacemos la solicitud a la API con fetch()
    const respuesta = await fetch(apiURL);

    // Verificamos si la respuesta fue exitosa (status 200)
    if (!respuesta.ok) {
      throw new Error('Error al obtener los datos de la API');
    }

    // Convertimos la respuesta a formato JSON
    const datos = await respuesta.json();

    // Mostramos los datos en la consola
    console.log('Usuarios obtenidos:', datos);

    // También los mostramos en el DOM (en la página)
    const lista = document.getElementById('lista-usuarios');
    datos.forEach(usuario => {
      const li = document.createElement('li');
      li.textContent = `${usuario.name} (${usuario.email})`;
      lista.appendChild(li);
    });

  } catch (error) {
    // Si algo falla, mostramos el error
    console.error('Hubo un problema:', error.message);
  }
}

// Llamamos a la función cuando cargue la página
obtenerUsuarios();