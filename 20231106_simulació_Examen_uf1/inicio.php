<?php
/*
session_start();//inicia sesión

//si existe se almacena en variable
if (isset($_POST["usuario"])) {
    $nombre = $_POST["usuario"];
    $_SESSION['usr'] = $nombre;
} else {
    echo "El nom d'usuari és obligatori.";
}*/
session_start();

if (isset($_POST["usuario"]) && isset($_POST["password"])) {
    $password = $_POST["password"];

    // Comprobar la contraseña
    if ($password === "1234") {
        $nombre = $_POST["usuario"];
        $_SESSION['usr'] = $nombre;
        echo "Benvingut/a $nombre";
    } else {
        echo "Contraseña incorrecta.";
    }
} else {
    echo "El nombre de usuario y la contraseña son obligatorios.";
}
?>


<!--p>Benvingut/a <?=$nombre?></p-->
