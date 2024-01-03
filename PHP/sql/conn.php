<?php
header("Content-Type: application/json; charset=UTF-8");

$servername = 'back-mysql'; // Use the service name from docker-compose.yml
$password = "root";
$username = "root";
$dbname = "db";

// Create connection
// echo "Connecting to " . $servername . " as " . $username . " to database " . $dbname . "\n";
define("conn" , new mysqli($servername, $username, $password, $dbname, 3306));

 

?>