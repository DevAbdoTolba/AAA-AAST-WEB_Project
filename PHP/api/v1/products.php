<?php

include("../../sql/select.php");


if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $numOfRows = $_GET["numOfRows"];
    if ($numOfRows >= 0) {

        $row = getProducts(conn, $numOfRows);
        if ($row > 0)
            echo json_encode(array("data" => $row, "status" => 200));
        else {
            echo json_encode(array("message" => "Error: No Products available", "status" => 404));
        }
    } else {
        echo json_encode(array("message" => "Error: Invalid Request", "status" => 400));
    }
}

?>