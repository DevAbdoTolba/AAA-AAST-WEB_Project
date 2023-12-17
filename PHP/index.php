<?php

// Create an array with a greeting
$data = array('message' => 'Hello, World!');

// Convert the array to JSON
$json = json_encode($data);

// Output the JSON
// $data = $_POST['data'];

echo $json;


// echo "Data: " . $data . "\n";

?>