// Obtener la URL completa
const url = new URL(window.location.href);

// Obtener el parámetro de la URL
const param = url.searchParams.get("invitado");

const divsInvitados = document.getElementsByName("invitado");

for (const miDiv of divsInvitados) {
    miDiv.innerHTML = "Hola " + (param ? param : "");
}
