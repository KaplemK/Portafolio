const formulario = document.getElementById("formContacto");
const respuesta = document.getElementById("respuestaContacto");
const boton = document.getElementById("btnEnviar");

// 👉 CAMBIA ESTO por tu correo real
const destino = "Meliodaskun0620@gmail.com";

if (formulario) {
    formulario.addEventListener("submit", function (evento) {
        evento.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        if (!nombre || !correo || !mensaje) {
            respuesta.textContent = "Por favor, completa todos los campos.";
            return;
        }

        const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formatoCorreo.test(correo)) {
            respuesta.textContent = "Escribe un correo electrónico válido.";
            return;
        }

        const asunto = "Nuevo mensaje desde tu portafolio";
        const contenido =
            "Nombre: " + nombre + "\n" +
            "Correo: " + correo + "\n\n" +
            "Mensaje:\n" + mensaje;

        respuesta.textContent = "¡Todo listo! Abriendo tu aplicación de correo...";
        boton.disabled = true;

        window.location.href =
            "mailto:" + destino +
            "?subject=" + encodeURIComponent(asunto) +
            "&body=" + encodeURIComponent(contenido);

        setTimeout(function () { boton.disabled = false; }, 1500);
    });
}
