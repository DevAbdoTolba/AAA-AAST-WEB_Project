<?php


$admin = array("admin", "tolba", "yes");

$name = $_POST["username"];

if(in_array($name, $admin)){
    echo true;
}

else {
    echo false;
}



?>