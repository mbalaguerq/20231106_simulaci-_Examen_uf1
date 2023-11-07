<?php
session_start();//inicia o reanuda sesion

//después verificamos si existe variable 
if (isset($_SESSION['usr'])) {
    //si existe se recupera su valor
    $nombre = $_SESSION['usr'];
    echo "Sessió tancada. Fins la propera, $nombre!";
     // Destruir la sesión de usuario después de mostrar el mensaje
     session_destroy();
} else {
    echo "No se encontró una sesión activa.";
}
?>
<p id="cont1" ></p>