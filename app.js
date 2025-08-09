// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos =[];
consolelog ("nombres")

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
    
}
