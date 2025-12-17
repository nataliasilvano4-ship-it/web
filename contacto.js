

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const asunto = document.getElementById("asunto").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (!nombre || !correo || !asunto || !mensaje) {
        alert("Por favor completa todos los campos.");
        return;
    }

    alert("¡Mensaje enviado con éxito! 🐱💙");

    this.reset();
});