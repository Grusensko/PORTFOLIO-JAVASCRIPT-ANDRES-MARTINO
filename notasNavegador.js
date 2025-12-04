const listNotas = document.getElementById("listNotas");
let notas = JSON.parse(localStorage.getItem("nota")) || [];

function mostrarNotas() {
    listNotas.innerHTML = "";
    notas.forEach((texto, i) => {       
        const li = document.createElement("li");
        li.textContent = texto;
        listNotas.appendChild(li);
    });
}

document.getElementById("guardar").addEventListener("click", () => {
    const nota = document.getElementById("nota").value.trim();
    if (nota) {
        notas.push(nota);
        localStorage.setItem("nota", JSON.stringify(notas));
        mostrarNotas();
        document.getElementById("nota").value = "";
    }
});

document.getElementById("borrar").addEventListener("click", () => {
    notas = [];
    localStorage.removeItem("nota");
    mostrarNotas();
});

mostrarNotas();
