const apikey = "78553fd3a2e49493785660ef5c55f5ee"; // registro de openweathermap.org

document.getElementById("buscar").addEventListener("click", async() => {
    const ciudad = document.getElementById("ciudad").value.trim();
    if (!ciudad) return alert("ingrese una ciudad");

    try {
        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apikey}&units=metric&lang=es`
        );
        const data = await res.json();
        
        if (data.cod !== 200) {
            document.getElementById("resultado").innerText = "Ciudad no encontrada";
            return;
        }

        document.getElementById("resultado").innerHTML = `
            <h3>Clima en ${data.name}, ${data.sys.country}</h3>
            <p>Temperatura:<strong> ${data.main.temp} °C</strong></p>
            <p>Viento: <strong>${data.wind.speed} km/h</strong></p>
            <p>Clima: <strong>${data.weather[0].description}</strong></p>
        `;
    } catch (error) {
        document.getElementById("resultado").innerText = "Error al conectar con la API";
    }

});

