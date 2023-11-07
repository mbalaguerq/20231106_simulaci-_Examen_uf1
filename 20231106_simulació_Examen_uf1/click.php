<?php 
	$num = 0;
	// si no existe la cookie, cookie=0
	if( !isset($_COOKIE["numero"])){
		setcookie("numero", "0", time() + (86400 * 30), "/");
	}else{
		$num = $_COOKIE["numero"];
	}
	// si existe $_GET (he clicado), cookie+1
	if( isset($_GET["c"]) ){
		$num++;
		setcookie("numero", $num, time() + (86400 * 30), "/");
	}	
	
?>

<li><?= $num ?> clicks hechos</li>