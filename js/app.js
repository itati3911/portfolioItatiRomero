$(document).ready(function(){

    //Función para el menú hamburguesa
    let hamburguer = document.querySelector('.hamburguer');
    let times = document.querySelector('.times');
    let mobileNav = document.querySelector('.mobile-nav');
    
    
    hamburguer.addEventListener('click', function(){
        mobileNav.classList.add('open');
    
    
    });
    
    times.addEventListener('click', function(){
        mobileNav.classList.remove('open');
    
    });
    
     
// Función para mostrar el mensaje "CV descargado con éxito"
function descargarCV() {
    // Mostrar el mensaje
    document.getElementById("mensaje").style.display = "block";
    
    
    setTimeout(function() {
        document.getElementById("mensaje").style.display = "none";
    }, 3000);
}

// evento onclick
document.querySelector("#descargar button").addEventListener("click", descargarCV);


//Función para Enviar mensaje 
document.getElementById("enviarMensaje").addEventListener("click", function() {
    // Mostrar el mensaje de confirmación
    let mensajeConfirmacion = document.getElementById("mensajeConfirmacion");
    mensajeConfirmacion.style.display = "block";

    // Limpiar los campos del formulario -NO FUNCIONA ----)revisar!
    document.getElementById("nombre").value = "";
    document.getElementById("email").value = "";
    document.getElementById("asunto").value = "";
    document.getElementById("mensaje").value = "";

    // Ocultar el mensaje después de 3 segundos --) tampoco funciona, revisar
    setTimeout(function() {
        mensajeConfirmacion.style.display = "none";
    }, 3000);
});


//Función para mostrar el mail

function mostrarGmail() {
    // Mostrar el mensaje
    document.getElementById("mensajeGmail").style.display = "block";
    
    
    setTimeout(function() {
        document.getElementById("mensajeGmail").style.display = "none";
    }, 3000);
}
// evento onclick
document.querySelector("#gmailLink").addEventListener("click", mostrarGmail);





});







