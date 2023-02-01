// Obtener la URL completa
const url = new URL(window.location.href);

const divBody = document.getElementById("principal");


let listInvitados = [
    {"id" : 1, "nombre" : "Andrea", "nombreCompleto" : "Andrea Grisales"  },
    {"id" : 2, "nombre" : "Alvaro", "nombreCompleto" : "Alvaro Grisales"  },
    {"id" : 3, "nombre" : "Sofia", "nombreCompleto" : "Sofia Maldonado"  }
]



// Obtener el parámetro de la URL
const param = url.searchParams.get("invitado");

let nombre = null;
let invitadoEncontrado = false;
let nombreCompleto = null;


listInvitados.forEach(function(invitado) {
    if(invitado.id === parseInt(param)) {
        nombre = invitado.nombre;
        nombreCompleto = invitado.nombreCompleto;
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

const divConfirmarAsistencia = document.getElementById("confirmar-asistencia")

divConfirmarAsistencia.innerHTML = "Invitación exclusiva para " + nombreCompleto 
