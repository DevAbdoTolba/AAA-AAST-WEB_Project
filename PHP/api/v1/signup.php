<?php


include("../../sql/insert.php");

// print all the POST parameters

$firstname = $_POST["firstname"];
$lastname = $_POST["lastname"];
$date = $_POST["date"];
$password = $_POST["password"];
$email = $_POST["email"];
$city = $_POST["city"];
$country = $_POST["country"];

$gender = $_POST["gender"];
$balance = $_POST["balance"];
$type = $_POST["type"];


// if any value is empty echo the first empty value's key

$flag = true;



foreach ($_POST as $key => $value) {
    if (!(strlen($value) > 0)) {
        echo json_encode(array("message" => "Error: " . $key . " is empty", "status" => 409));
        $flag = false;
        break;
    }
}

if ($flag) {


    $token = $email . $firstname . $lastname . $password;

    $result = insertIntoUsers(conn, $firstname, $lastname, $date, $balance, $token, $type, $password, $email, $city, $country, $gender);
}


// $data = array('message' => $result ? 'user created successfully' : "Error creating user", 'result' => $result ? 200 : 404);

// Convert the array to JSON
// $json = json_encode($data);

// Output the JSON

// echo $json;


?>