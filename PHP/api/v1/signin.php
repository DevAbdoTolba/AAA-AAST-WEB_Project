<?php

include("../../sql/select.php");
include("index.php");



if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $email = $_GET["email"];
    $password = $_GET["password"];
    $flag = true;
    foreach ($_GET as $key => $value) {
        if (!(strlen($value) > 0)) {
            echo json_encode(array("message" => "Error: " . $key . " is empty", "status" => 409));
            $flag = false;
            break;
        }
    }

    if ($flag) {

        $row = signIn(conn, $email, $password);
        if ($row)
            echo json_encode(array("data" => $row, "status" => 200));
        else {
            echo json_encode(array("message" => "Error: user not found", "status" => 404));
        }
    }
}

?>