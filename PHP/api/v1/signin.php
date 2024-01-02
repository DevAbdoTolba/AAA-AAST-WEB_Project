<?php 

include("../../sql/select.php");
 


if($_SERVER["REQUEST_METHOD"] == "GET"){
    $email = $_GET["email"];
    $password = $_GET["password"];
    $row = signIn(conn, $email, $password);
    if($row)
    echo json_encode(array("message" => $row, "status" => 200));
    else{
        echo json_encode(array("message" => "Error: user not found" , "status" => 404));
    }
}

?>