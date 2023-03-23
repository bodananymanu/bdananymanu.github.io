// Obtener la URL completa
const url = new URL(window.location.href);

const divBody = document.getElementById("principal");


let listInvitados = [
    {"id" : 1, "nombre" : "Alejo", "nombreCompleto" : "Alejandro Primo", "mensaje" : "" },
    {"id" : 2, "nombre" : "Papá", "nombreCompleto" : "Alvaro Grisales", "mensaje" : "" },
    {"id" : 3, "nombre" : "Biata", "nombreCompleto" : "Beatriz Piedrahita", "mensaje" : "" },
    {"id" : 4, "nombre" : "Juan", "nombreCompleto" : "Juan Esteban Acevedo", "mensaje" : "" },
    {"id" : 5, "nombre" : "Juli", "nombreCompleto" : "Julian David Acevedo", "mensaje" : "" },
    {"id" : 6, "nombre" : "Laura", "nombreCompleto" : "Laura Betancur", "mensaje" : "" },
    {"id" : 7, "nombre" : "Amparo", "nombreCompleto" : "Amparo Deosa", "mensaje" : "" },
    {"id" : 8, "nombre" : "Tía Amparo", "nombreCompleto" : "Amparo Ramirez", "mensaje" : "" },
    {"id" : 9, "nombre" : "Andre", "nombreCompleto" : "Andrea Grisales", "mensaje" : "" },
    {"id" : 10, "nombre" : "Mamá", "nombreCompleto" : "Sonia Rivera", "mensaje" : "" },
    {"id" : 11, "nombre" : "Tío Bayron", "nombreCompleto" : "Bayron Rivera", "mensaje" : "" },
    {"id" : 12, "nombre" : "Michel", "nombreCompleto" : "Emilse Velez Bedoya", "mensaje" : "" },
    {"id" : 13, "nombre" : "Oscar", "nombreCompleto" : "Oscar Andres Palacio", "mensaje" : "" },
    {"id" : 14, "nombre" : "Bayron", "nombreCompleto" : "Bayron Restrepo", "mensaje" : "" },
    {"id" : 15, "nombre" : "Camilo", "nombreCompleto" : "Camilo Chavarriaga", "mensaje" : "" },
    {"id" : 16, "nombre" : "David", "nombreCompleto" : "Carlos David Ramirez", "mensaje" : "" },
    {"id" : 17, "nombre" : "Tío Mario", "nombreCompleto" : "Mario Ramirez", "mensaje" : "" },
    {"id" : 18, "nombre" : "Teo", "nombreCompleto" : "Mateo Ramirez", "mensaje" : "" },
    {"id" : 19, "nombre" : "Dorita", "nombreCompleto" : "Dora Valencia", "mensaje" : "" },
    {"id" : 20, "nombre" : "Cata", "nombreCompleto" : "Catalina Ballesteros", "mensaje" : "" },
    {"id" : 21, "nombre" : "Tía Consuelo", "nombreCompleto" : "Consuelo Ramirez", "mensaje" : "" },
    {"id" : 22, "nombre" : "Cristian", "nombreCompleto" : "Cristian Camilo Ramirez", "mensaje" : "" },
    {"id" : 23, "nombre" : "Dani", "nombreCompleto" : "Daniel Gomez", "mensaje" : "" },
    {"id" : 24, "nombre" : "Dilber", "nombreCompleto" : "Dilber Tangarife", "mensaje" : "" },
    {"id" : 25, "nombre" : "Edw", "nombreCompleto" : "Edward Velazques", "mensaje" : "" },
    {"id" : 26, "nombre" : "Don Efra", "nombreCompleto" : "Efrain Rios", "mensaje" : "" },
    {"id" : 27, "nombre" : "Eliana", "nombreCompleto" : "Eliana Ramirez", "mensaje" : "" },
    {"id" : 28, "nombre" : "Eliza", "nombreCompleto" : "Elizabeth Toro", "mensaje" : "" },
    {"id" : 29, "nombre" : "Magdalena", "nombreCompleto" : "Magdalena Catañeda", "mensaje" : "" },
    {"id" : 30, "nombre" : "Migue", "nombreCompleto" : "Miguel Angel Toro", "mensaje" : "" },
    {"id" : 31, "nombre" : "Tía Estela", "nombreCompleto" : "Estela Grisales", "mensaje" : "" },
    {"id" : 32, "nombre" : "Tía Vanessa", "nombreCompleto" : "Vanessa Grisales", "mensaje" : "" },
    {"id" : 33, "nombre" : "Nati", "nombreCompleto" : "Natalia Jimenez", "mensaje" : "" },
    {"id" : 34, "nombre" : "Tio Marlon", "nombreCompleto" : "Marlon Grisales", "mensaje" : "" },
    {"id" : 35, "nombre" : "Pine", "nombreCompleto" : "Estiven Pineda", "mensaje" : "" },
    {"id" : 36, "nombre" : "Tio Nando", "nombreCompleto" : "Fernando Ramírez", "mensaje" : "" },
    {"id" : 37, "nombre" : "Rocy", "nombreCompleto" : "Rocio Tamayo", "mensaje" : "" },
    {"id" : 38, "nombre" : "Bibi", "nombreCompleto" : "Bibiana Polaskey", "mensaje" : "" },
    {"id" : 39, "nombre" : "Andrew", "nombreCompleto" : "Andrew Polaskey", "mensaje" : "" },
    {"id" : 40, "nombre" : "Gloria", "nombreCompleto" : "Gloria Roger", "mensaje" : "" },
    {"id" : 41, "nombre" : "Henry", "nombreCompleto" : "Henry Ramirez", "mensaje" : "" },
    {"id" : 42, "nombre" : "Papá", "nombreCompleto" : "Hernan Cuervo", "mensaje" : "Ya no me lleva mi padre en la mano, solamente sus consejos" },
    {"id" : 43, "nombre" : "Mamá", "nombreCompleto" : "Beatriz Ramírez", "mensaje" : "" },
    {"id" : 44, "nombre" : "Santi", "nombreCompleto" : "Santiago Cuervo", "mensaje" : "" },
    {"id" : 45, "nombre" : "Jenny", "nombreCompleto" : "Jenny Rico", "mensaje" : "" },
    {"id" : 46, "nombre" : "Tío Jhon", "nombreCompleto" : "Jhon Grisales", "mensaje" : "" },
    {"id" : 47, "nombre" : "Johan", "nombreCompleto" : "Johan Palacio", "mensaje" : "" },
    {"id" : 48, "nombre" : "Laura", "nombreCompleto" : "Laura Henao", "mensaje" : "" },
    {"id" : 49, "nombre" : "Laura", "nombreCompleto" : "Laura Ospina", "mensaje" : "" },
    {"id" : 50, "nombre" : "Santiago", "nombreCompleto" : "Santiago Ospina", "mensaje" : "" },
    {"id" : 51, "nombre" : "Uriel", "nombreCompleto" : "Uriel Ospina", "mensaje" : "" },
    {"id" : 52, "nombre" : "Yolanda", "nombreCompleto" : "Yolanda Grisales", "mensaje" : "" },
    {"id" : 53, "nombre" : "Tia Liliam", "nombreCompleto" : "Liliam Cuervo Restrepo", "mensaje" : "" },
    {"id" : 54, "nombre" : "Juan Fernando", "nombreCompleto" : "Juan Fernando Betancur", "mensaje" : "" },
    {"id" : 55, "nombre" : "Luisa", "nombreCompleto" : "Luisa Fernanda Betancur", "mensaje" : "" },
    {"id" : 56, "nombre" : "Paula", "nombreCompleto" : "Paula Ramirez", "mensaje" : "" },
    {"id" : 57, "nombre" : "Tia Nena", "nombreCompleto" : "Luz Helena Cuervo", "mensaje" : "" },
    {"id" : 58, "nombre" : "Tío John Jairo", "nombreCompleto" : "Jhon Jairo Cuervo", "mensaje" : "" },
    {"id" : 59, "nombre" : "Isa", "nombreCompleto" : "Maria Isabela Ceballos", "mensaje" : "" },
    {"id" : 60, "nombre" : "Cristian", "nombreCompleto" : "Cristian Alejandro Cuervo", "mensaje" : "" },
    {"id" : 61, "nombre" : "Lina", "nombreCompleto" : "Lina Estrada", "mensaje" : "" },
    {"id" : 62, "nombre" : "Livia", "nombreCompleto" : "Livia Mamá Alejandro Primo", "mensaje" : "" },
    {"id" : 63, "nombre" : "Margara", "nombreCompleto" : "Margarita Ramirez", "mensaje" : "" },
    {"id" : 64, "nombre" : "Maria Isabel", "nombreCompleto" : "Maria Isabel Tabares", "mensaje" : "" },
    {"id" : 65, "nombre" : "Maria", "nombreCompleto" : "Maria Paulina Marin", "mensaje" : "" },
    {"id" : 66, "nombre" : "Cachi", "nombreCompleto" : "Marlen Casafus", "mensaje" : "" },
    {"id" : 67, "nombre" : "Mauro", "nombreCompleto" : "Mauricio Restrepo", "mensaje" : "" },
    {"id" : 68, "nombre" : "Tía Mery", "nombreCompleto" : "Mery Grisales", "mensaje" : "" },
    {"id" : 69, "nombre" : "Deiby", "nombreCompleto" : "Deiby Garcia", "mensaje" : "" },
    {"id" : 70, "nombre" : "Nelson", "nombreCompleto" : "Nelson Garcia", "mensaje" : "" },
    {"id" : 71, "nombre" : "Tío Nelson", "nombreCompleto" : "Nelson Ramirez", "mensaje" : "" },
    {"id" : 72, "nombre" : "Tio Orlando", "nombreCompleto" : "Orlando Grisales", "mensaje" : "" },
    {"id" : 73, "nombre" : "Juanes", "nombreCompleto" : "Juanes Grisales", "mensaje" : "" },
    {"id" : 74, "nombre" : "Ricardo", "nombreCompleto" : "Ricardo Yepes", "mensaje" : "" },
    {"id" : 75, "nombre" : "Rocio", "nombreCompleto" : "Rocio Grisales", "mensaje" : "" },
    {"id" : 76, "nombre" : "Nataly", "nombreCompleto" : "Nataly Echavarria", "mensaje" : "" },
    {"id" : 77, "nombre" : "Viviana", "nombreCompleto" : "Viviana ", "mensaje" : "" },
    {"id" : 78, "nombre" : "Novio Nataly", "nombreCompleto" : "Sergio Ramirez", "mensaje" : "" },
    {"id" : 79, "nombre" : "Tío Roger", "nombreCompleto" : "Roger Ramirez", "mensaje" : "" },
    {"id" : 80, "nombre" : "Ruby", "nombreCompleto" : "Rubi Ramirez", "mensaje" : "" },
    {"id" : 81, "nombre" : "Negro", "nombreCompleto" : "Santiago (Negro)", "mensaje" : "" },
    {"id" : 82, "nombre" : "Santi", "nombreCompleto" : "Santiago Espinosa", "mensaje" : "" },
    {"id" : 83, "nombre" : "Mono", "nombreCompleto" : "Sebastian Anderson", "mensaje" : "" },
    {"id" : 84, "nombre" : "Sergio", "nombreCompleto" : "Sergio Ramirez", "mensaje" : "" },
    {"id" : 85, "nombre" : "Sofi", "nombreCompleto" : "Sofia Maldonado", "mensaje" : "" },
    {"id" : 86, "nombre" : "Vale", "nombreCompleto" : "Valeria Morales", "mensaje" : "" },
    {"id" : 87, "nombre" : "Wanda", "nombreCompleto" : "Wanda Ramirez", "mensaje" : "" },
    {"id" : 88, "nombre" : "Tío William", "nombreCompleto" : "William Ramirez", "mensaje" : "" },
    {"id" : 89, "nombre" : "Yeidi", "nombreCompleto" : "Yeidi Cartagena", "mensaje" : "" }
]



// Obtener el parámetro de la URL
const param = url.searchParams.get("invitado");

let nombre = null;
let invitadoEncontrado = false;
let nombreCompleto = null;
let mensaje = "";


listInvitados.forEach(function(invitado) {
    if(invitado.id === parseInt(param)) {
        nombre = invitado.nombre;
        nombreCompleto = invitado.nombreCompleto;
        mensaje = invitado.mensaje
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

const divMensaje = document.getElementById("mensaje-personalizado")

if(mensaje !== "") {
    divMensaje.innerHTML = mensaje
} else {
    divMensaje.innerHTML = "\"Dicen que cuando uno realmente deja de buscar es donde encuentra y creo que esta frase se acomoda más a nuestra historia que ninguna.\"";
}



