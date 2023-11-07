<?php
if( isset($_GET["reset"])){
    setcookie("numero", "0", time() + (86400 * 30), "/");
    $num=0;
}
?>