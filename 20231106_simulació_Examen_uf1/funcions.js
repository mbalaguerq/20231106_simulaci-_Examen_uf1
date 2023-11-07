

//Quan facis clic a miButton
$("#b").click(function(){

    console.log("dentro");

   //mediante get, conéctate a click.php i ejecuta data
   //en una etiqueta ul con id contenido
   $.get("click.php/?c",function(data){
        $("#contenido ul").html(data);console.log("fuera");
    });
}); 

