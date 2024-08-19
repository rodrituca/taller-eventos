document.addEventListener("DOMContentLoaded", function() {

divSaludo.addEventListener("click", function() {
alert("Hola! Soy el Div") });

btnSaludo.addEventListener("click", function(event) {
    alert("Hola! Soy el Botón");
    event.stopPropagation();
});

});