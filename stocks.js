// Ejemplo: obtener el precio de una acción con una API
// (Ajustá la URL, el “endpoint” y el api_key según la API que uses)

// Ejemplo usando StockData.org (o adaptalo a Marketstack u otra)
const ticker = 'AAPL';   // símbolo de la acción (Apple Inc.)
const apiKey = 'tg1X1iD839keEU6eqqIPxujoXFMgAzfulBSrurnj';  // registrate y obtené tu clave
const url = `https://api.stockdata.org/v1/data/quote?symbols=${ticker}&api_token=${apiKey}`;

async function obtenerPrecioAccion() {
  try {
    const respuesta = await fetch(url);
    if (!respuesta.ok) {
      throw new Error('Error al conectar con la API: ' + respuesta.status);
    }
    const json = await respuesta.json();
    console.log('Datos recibidos:', json);
    // Supongamos que json.data[0].price es el dato
    const precio = json.data && json.data[0] && json.data[0].price;
    if (precio === undefined) {
      console.log('No se encontró el precio para el ticker: ' + ticker);
    } else {
      console.log(`El precio de ${ticker} es ${precio} USD`);
      // Mostrar en el DOM:
      const elemento = document.getElementById('precio-accion');
      if (elemento) {
        elemento.textContent = `Precio de ${ticker}: ${precio} USD`;
      }
    }
  } catch (error) {
    console.error('Hubo un problema:', error.message);
  }
}

// Llamar la función cuando cargue la página
obtenerPrecioAccion();