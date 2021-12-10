<?php

session_start();

$_SESSION = array();

session_destroy();

header("refresh:1.5; URL = login.php");
exit;
?>
