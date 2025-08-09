// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// array para almacenar los nombres
let amigos = [];

//funcion para agregar nombre de amigo
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
// condicion para validar el nombre 
    if (nombre === "") {
        alert("Por favor, escribe un nombre válido.");
        return;
    }
//agregar el nombre al array de amigos
    amigos.push(nombre);
    input.value = "";
    mostrarLista();
}

function mostrarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}
// funcion para sortear  amigo
function sortearAmigo() {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    if (amigos.length === 0) {
        alert("No hay nombres en la lista para sortear.");
        return;
    }
// escoger aleatoridad 
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    const li = document.createElement("li");
    li.textContent = ` El amigo secreto es: ${amigoSecreto} `;
    resultado.appendChild(li);
}
