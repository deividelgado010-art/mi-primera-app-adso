
const boton = document.getElementById("botonMensaje");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function () {
    mensaje.classList.toggle("oculto");

    if (mensaje.classList.contains("oculto")) {
        boton.textContent = "Conoce mis metas";
    } else {
        boton.textContent = "Ocultar mis metas";
    }
});