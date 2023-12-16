<?php


$admin = array("admin", "tolba", "yes");

$name = $_POST["username"];

if(in_array($name, $admin)){
    echo "Welcome ".$name;
}

else {
    echo "Sorry this user is not an admin";
}



?>