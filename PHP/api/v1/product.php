<?php

include("../../sql/select.php");


if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $id = $_GET["id"];

    $row = getProduct(conn, $id);
    if ($row > 0)
        echo json_encode(array("data" => $row, "status" => 200));
    else {
        echo json_encode(array("message" => "Error: No Products available", "status" => 404));
    }

}

?>