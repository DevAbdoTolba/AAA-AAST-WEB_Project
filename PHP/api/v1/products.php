<?php

include("../../sql/select.php");
include("index.php");


if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $numOfRows = $_GET["numOfRows"];



    if ($numOfRows >= 0) {

        $rows = getProducts(conn, $numOfRows);

        if (isset($_GET["token"])) {
            $token = $_GET["token"];

            $rowsInCart = getProductsInCart(conn, $token);
            $rowsLoved = getLovedProducts(conn, $token);
            if ($rowsInCart && $rowsLoved) {
                foreach ($rows as $key => $value) {
                    $rows[$key]["inCart"] = false;
                    $rows[$key]["favorite"] = false;
                    foreach ($rowsInCart as $keyInCart => $valueInCart) {
                        if ($value["product_id"] == $valueInCart["product_id"]) {
                            $rows[$key]["inCart"] = true;
                        }
                    }
                    foreach ($rowsLoved as $keyLoved => $valueLoved) {
                        if ($value["product_id"] == $valueLoved["product_id"]) {
                            $rows[$key]["favorite"] = true;
                        }
                    }
                }
            }
            // add to each product inCart initial as false, and if it is in cart, change it to true
            // add to each product favorite initial as false, and if it is in loved, change it to true

        }

        if ($rows > 0)

            echo json_encode(array("data" => $rows, "status" => 200));
        else {
            echo json_encode(array("message" => "Error: No Products available", "status" => 404));
        }

    } else {
        echo json_encode(array("message" => "Error: Invalid Request", "status" => 400));
    }
}

?>