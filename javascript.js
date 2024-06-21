// Mensaje de bienvenida inicial
function mensajehola() {
    const nombre = "Alejandra";
    const edad = 35;
    const fechaNacimiento = "11/12/1988";
    
    const mensaje = `Hola soy ${nombre} y tengo ${edad} años y naci el ${fechaNacimiento}`;
    document.getElementById('mensajehola').innerText = mensaje;
    
    // Mostrar formulario para ingresar datos
    document.getElementById('usuario').style.display = 'block';
}

// Función para calcular los días vividos
function calcularDiasVividos(fechaNacimiento) {
    const fechaActual = new Date();
    const fechaNac = new Date(fechaNacimiento);
    const diferencia = fechaActual - fechaNac;
    const diasVividos = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    return diasVividos;
}

// Manejar envío del formulario
document.getElementById('user-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nombre = document.getElementById('name').value;
    const edad = document.getElementById('age').value;
    const fechaNacimiento = document.getElementById('dob').value;
    
    const mensaje = `¡Te damos la bienvenida, ${nombre}! Tienes ${edad} años.`;
    const diasVividos = calcularDiasVividos(fechaNacimiento);
    const mensajeDias = `Has vivido aproximadamente ${diasVividos} días.`;
    
    document.getElementById('mensajehola').innerText = `${mensaje}\n${mensajeDias}`;
    
    // Ocultar formulario después de enviar
    document.getElementById('usuario').style.display = 'none';
});

// Cargar mensaje de bienvenida inicial al cargar la página
window.onload = mensajehola;
