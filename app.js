// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos =[];

function adicionAmigo() {
    const input =document.getElementById("nombre");
    const nombre = input.value.trim();

    if(nombre==""){
        alert("por favor, escribe un nombre valido para el juego");
        return;

    }
    amigos.push(nombre);
    input.value ="";
    mostrarlista();
}

function mostrarlista(){
    const lista = document.getElementById("listaAmigos")
    lista.innerHTML="";

    amigos. forEach(amigo => {
        const li= document.createElement("li");
        li.textContent=amigo;
        lista.appendChild(li);

    });
}
function mostrarlista() {
    const lista= document.getElementById("listaAmigos");
    lista.innerHTML ="";

    amigos.forEach(amigo => {
        const li = document. createElement(li);
        li.textContent = amigo;
        lista.appendChild(li);

    });
}

function sorteaAmigo(){
    const resultado= document.getElementById("resultado");
    resultado.innerHTML="";

    if (amigos.length=== 0){
        alert("no hay nombres en la lista para sortear");
        return;
    }

    const indicealeatorio = Math.floor(Math.random() + amigos.length);
    const amigoSecreto = amigo[ indicealeatorio];

    const li = document.createElement("li");
    li.textContent = `🎉 El amigo secreto es: ${amigoSecreto} 🎉`;
    resultado.appendChild(li);


}