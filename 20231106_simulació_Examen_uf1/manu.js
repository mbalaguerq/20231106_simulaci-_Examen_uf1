// Deshabilitar los botones inicialmente
$("#cierre, #button, #reset").prop("disabled", true);


//INICIAR SESSIÓ
$("#inicio").click(function() {
    var nombre = $("#nombre").val(); // Obtener el nombre del campo de entrada
    var password = $("#password").val();
    if (nombre.trim() === "") {
        // Comprobar si el campo de entrada está vacío
        alert("El nombre de usuario es obligatorio.");
    } else {
        $("#cierre, #button, #reset").prop("disabled", false);
        // Enviar el nombre al servidor usando AJAX
        $.post("inicio.php", { usuario: nombre, password: password }, function(data) {
            $("#cont1").html(data);
        });
    }
});
 
//TANCAR SESSIÓ
$("#cierre").click(function(){
    $("#cont1").hide();// Oculta l'element amb id "cont1"
// Deshabilitar los botones al hacer clic en "Tancar sessió"
$("#cierre, #button, #reset").prop("disabled", true);

    $.get("cierre.php",function(data){
     $("#cont2").html(data); //Mostra el contingut a "cont2"
    });
 });

 var contadorClicks = 0;
 $("#button").click(function () {
     contadorClicks++; 
     if (contadorClicks >= 20) {
         $("#button").hide(); // Oculta los botones cuando el contador llega a 20
         $("#imagen-container").show(); // Muestra la imagen
     }
     // Realiza una solicitud GET a click.php con el parámetro "c"
     $.get("click.php?c", function (data) {
         $("#contenido ul").html(data);
     });
 });
//resetejar la cookie
$("#reset").click(function(){
    contadorClicks = 0;
    // Realiza una solicitud GET a click.php con el parámetro "reset"
    $.get("reset.php?reset", function(data){
        // Actualiza la etiqueta ul con el nuevo valor de la cookie
        $("#contenido ul").html(data);
        $("#button").show(); // Muestra los botones
        $("#imagen-container").hide(); // Oculta la imagen
});
});