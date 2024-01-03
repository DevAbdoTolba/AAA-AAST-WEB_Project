<?php 

include("../../sql/select.php");
include("index.php");


function signIn($conn, $email, $password)
{
    $sql = "SELECT * FROM Users WHERE user_email = '$email' AND user_password = '$password'";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        $row = $result -> fetch_assoc();
        return $row;
    } else {
        return false;
    }
}


?>