<?php

// check if it is a get or a post request
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // The request is using the POST method
    $sql = $_POST['sql'];

    // get data from ../sql/select.php
    include('../sql/select.php');
    $data = select($sql);
    echo $data;

} else {
    // The request is using the GET method
    
    // Create an array with a greeting
    $data = array('message' => 'Hello, World!');
    
    // Convert the array to JSON
    $json = json_encode($data);
    
    // Output the JSON
    // $data = $_POST['data'];
    
    echo $json;
}


// echo "Data: " . $data . "\n";

?>