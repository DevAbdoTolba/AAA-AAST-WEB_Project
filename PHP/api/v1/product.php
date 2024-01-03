<?php

include("../../sql/select.php");


if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $id = $_GET["id"];
    $row = getProduct(conn, $id);

    if (isset($_GET["token"])) {
        $token = $_GET["token"];
        $rowInCart = getProductInCart(conn, $token, $id);
        $rowLoved = getLovedProduct(conn, $token, $id);
        $row["inCart"] = false;
        $row["favorite"] = false;
        if ($rowInCart > 0) {
            $row["inCart"] = true;
        }
        if ($rowLoved > 0) {
            $row["favorite"] = true;
        }
    }

    if ($row > 0)
        echo json_encode(array("data" => $row, "status" => 200));
    else {
        echo json_encode(array("message" => "Error: No Products available", "status" => 404));
    }

}

?>