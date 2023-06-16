// Contenido del archivo "script.js"

// Ejemplo de función para mostrar una alerta al cargar la página
function mostrarAlerta() {
    alert("¡Bienvenido al sitio web de [Nombre del Artista]!");
}

// Ejemplo de función para validar el formulario de contacto
function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;

    if (nombre === "" || email === "" || mensaje === "") {
        alert("Por favor, completa todos los campos del formulario.");
        return false; // Evita que se envíe el formulario si hay campos vacíos
    }

    return true; // Permite el envío del formulario si todos los campos están completos
}


document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let comment = document.getElementById('comment').value;
    alert(`Gracias, ${name}. Recibimos tu comentario: ${comment}`);
});



