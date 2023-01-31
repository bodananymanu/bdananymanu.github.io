// Obtener la URL completa
const url = new URL(window.location.href);

const divBody = document.getElementById("principal");


let listInvitados = [
    {"id" : 1, "nombre" : "Andrea"  },
    {"id" : 2, "nombre" : "Alvaro"  },
    {"id" : 3, "nombre" : "Sofia"  }
]



// Obtener el parámetro de la URL
const param = url.searchParams.get("invitado");

let nombre = null;
let invitadoEncontrado = false;


listInvitados.forEach(function(invitado) {
    if(invitado.id === parseInt(param)) {
        nombre = invitado.nombre;
        invitadoEncontrado = true;
    }
});


const divsInvitados = document.getElementsByName("invitado");



if(invitadoEncontrado) {
    divBody.hidden = false;
}
 

for (const miDiv of divsInvitados) {
    miDiv.innerHTML = "Hola " + (nombre ? nombre : "");
}
