<?php	
	function getSingle($name) {
		include("config.php");
		$querySingle = "SELECT * FROM content WHERE name='{$name}'";
		$runSingle = mysqli_query($link, $querySingle);
		
		if($runSingle){
			return $runSingle;
		}else{
			$error = "This was not the content you were looking for...";
			return $error;
		}
		mysqli_close($link);
	}
?>