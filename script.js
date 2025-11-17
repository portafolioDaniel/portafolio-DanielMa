// ===============================
//   Número de contacto de Daniel
// ===============================

// Guardamos el número para que si algún día cambia,
// solo lo modifiques aquí y no en todo el código.
const phoneNumber = "5531444914";


// ================================================
//   Función que abre WhatsApp con un mensaje listo
// ================================================

// Esta función se ejecuta cuando el usuario da clic
// en el botón de "Contactar por WhatsApp".
function sendWhatsAppMessage() {

    // Mensaje que aparecerá escrito automáticamente
    const message = "Hola Daniel, me interesa tu servicio de transporte.";

    // Armamos el enlace oficial de WhatsApp
    // 52 = código de México
    // encodeURIComponent() evita errores con espacios o caracteres especiales
    const url = `https://wa.me/52${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Abrimos WhatsApp en una nueva pestaña
    window.open(url, "_blank");
}



// ============================================================
//   Animación del header: cambia estilo cuando haces scroll
// ============================================================

// Detecta cuando el usuario se desplaza hacia abajo
window.addEventListener("scroll", function () {

    // Seleccionamos el elemento <header>
    const header = document.querySelector("header");

    // Si baja más de 50px, agregamos una clase
    // que puedes usar en el CSS para cambiar el estilo
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } 
    // Si regresa hacia arriba, removemos la clase
    else {
        header.classList.remove("scrolled");
    }
});
