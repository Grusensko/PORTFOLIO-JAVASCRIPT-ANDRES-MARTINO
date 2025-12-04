document.getElementById('buscar').addEventListener('click', () => {
    const user = document.getElementById('usuario').value.trim();
    
    if (!user) return alert("Por favor ingrese un nombre de usuario válido.");

    document.getElementById("resultado").innerHTML = 'Buscando...';

    fetch(`https://api.github.com/users/${user}`)
    .then((res) => {
        if (!res.ok) throw new Error('Usuario no encontrado');
        return res.json();
    })
    .then((data) => {
        document.getElementById("resultado").innerHTML = `
            <h2>${data.login}</h2>
            <img src="${data.avatar_url}" alt="${data.login}" width="100" />
            <p>Repositorios públicos: ${data.public_repos}</p>
            <p>Seguidores: ${data.followers}</p>
            <p>Siguiendo: ${data.following}</p>
            <p>Ubicación: ${data.location || 'No disponible'}</p>
            <p>Estrellas: ${data.public_gists}</p>
            <p>Empresa: ${data.company || 'No disponible'}</p>
            <p>Blog: ${data.blog ? `<a href="${data.blog}" target="_blank">${data.blog}</a>` : 'No disponible'}</p>
            <p>Correo: ${data.email || 'No disponible'}</p>
            <p>Fecha de creación: ${new Date(data.created_at).toLocaleDateString()}</p>
            <p>Fecha de actualización: ${new Date(data.updated_at).toLocaleDateString()}</p>
            <p>Tipo de usuario: ${data.type}</p>
            <p>Estado de verificación: ${data.site_admin ? 'Verificado' : 'No verificado'}</p>
            <p>Idioma preferido: ${data.language || 'No disponible'}</p>
            <p>Zona horaria: ${data.timezone || 'No disponible'}</p>
            <p>Twitter: ${data.twitter_username ? `<a href="https://twitter.com/${data.twitter_username}" target="_blank">@${data.twitter_username}</a>` : 'No disponible'}</p>
            <p>Nombre completo: ${data.name || 'No disponible'}</p>
            <p>Bio: ${data.bio || 'No disponible'}</p>
            <a href="${data.html_url}" target="_blank">Ver perfil en GitHub</a>
        `;
    })
    .catch((error) => {
        document.getElementById("resultado").innerHTML = `Error: ${error.message}`;
    })
    .finally(() => 
        console.log("Búsqueda finalizada"));
});
