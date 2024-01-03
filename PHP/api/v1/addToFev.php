<?php
// select * from products Right join `order` on products.product_id = order.product_id where order.user_id = 1;
//  insert into `order` values  (46,151,1);



include("../../sql/update.php");




if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST["id"]) && isset($_POST["token"])) {
        $id = $_POST["id"];
        $token = $_POST["token"];
        $result = updateFev(conn, $id, $token);
    } else {
        echo "Error: id or token not set in POST data.";
    }
}

?>