<?php
$servername = 'back-mysql'; // Use the service name from docker-compose.yml
$password = "root";
$username = "root";
$dbname = "db";

// Create connection
// echo "Connecting to " . $servername . " as " . $username . " to database " . $dbname . "\n";
$conn = new mysqli($servername, $username, $password, $dbname, 3306);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
// echo "Connected successfully";

// $sql = "CREATE TABLE IF NOT EXISTS `test` (
//   `id` int(11) NOT NULL AUTO_INCREMENT,
//     `name` varchar(255) NOT NULL,
//   PRIMARY KEY (`id`)
// ) ";

$data = $_GET['data'];

$json = json_encode(array("posted" => $data));

// $data = "test";

$sql = "INSERT INTO `test` (`name`) VALUES ('" . $data . "')";

if ($conn->query($sql) === TRUE) {
    // echo "New record created successfully";
    $status = json_encode(array("status" => "200"));
    // echo a big object json $json and $status
    echo 
    json_encode(array("data" => $data, "status" => "200"));
} else {
    // echo "Error: " . $sql . "<br>" . $conn->error;
    $status = json_encode(array("status" => "400"));
    // echo a big object json $json and $status
    echo 
    json_encode(array("data" => $data, "status" => "400"));

}

?>