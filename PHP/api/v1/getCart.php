<?php
// select * from products Right join `order` on products.product_id = order.product_id where order.user_id = 1;
//  insert into `order` values  (46,151,1);



include("../../sql/select.php");



if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $token = $_GET["token"];
    $rows = getCart(conn, $token);
    if ($rows && $rows > 0)
        echo json_encode(array("data" => $rows, "status" => 200));
    else {
        echo json_encode(array("message" => "Error: No Products available", "status" => 404));
    }
}


?>