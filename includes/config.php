<?php 
	$config = array(
		"mysql_server" => "localhost",
		"mysql_user" => "root",
		"mysql_password" => "",
		"mysql_db" => "chantry"
	);		
	
	$user = "root";
	$pass = ""; //PC
	$url = "localhost";
	$db = "chantry";
	
	$link = mysqli_connect($url, $user, $pass, $db);
?>