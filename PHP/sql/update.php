<?php

include("conn.php");

function updateCart($conn, $id, $token)
{
    // check if it is already in
    $sql = "SELECT * FROM `order` where product_id = $id AND user_id = (SELECT user_id from users where user_token = '$token')";
    $result = conn->query($sql);

    $row = array();

    if ($result && $result->num_rows > 0) {
        // delete that row
        $sql = "DELETE FROM `order` WHERE product_id = " . $id;
        $result = conn->query($sql);

        echo json_encode(array("message" => "product removed from cart", "status" => 200));
    } else {
        $sql = "INSERT INTO `order` (product_id, user_id, order_quantity) VALUES ($id, (SELECT user_id from users where user_token = '$token'),1)";
        $result = conn->query($sql);

        echo json_encode(array("message" => "product added to cart", "status" => 200));


    }
    return true;

}

function updateFev($conn, $id, $token)
{
    // check if it is already in
    $sql = "SELECT * FROM love where product_id = $id AND user_id = (SELECT user_id from users where user_token = '$token')";
    $result = conn->query($sql);

    $row = array();

    if ($result && $result->num_rows > 0) {
        // delete that row
        $sql = "DELETE FROM love WHERE product_id = " . $id;
        $result = conn->query($sql);

        echo json_encode(array("message" => "product removed from favorite", "status" => 200));
    } else {
        $sql = "INSERT INTO love (product_id, user_id) VALUES ($id, (SELECT user_id from users where user_token = '$token'))";
        $result = conn->query($sql);

        echo json_encode(array("message" => "product added to favorite", "status" => 200));


    }
    return true;

}
?>