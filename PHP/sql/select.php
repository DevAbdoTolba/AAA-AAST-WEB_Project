<?php
include('conn.php');

// select from database and return json
function select($table)
{
    $sql = "SELECT * FROM " . $table;

    $result = conn->query($sql);
    $rows = array();
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            array_push($rows, $row);
        }
    }
    return json_encode($rows);
}
function signIn($conn, $email, $password)
{
    $sql = "select user_token ,  user_firstname ,  user_balance from users  WHERE user_email = '$email' AND user_password = '$password'";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        return $row;
    } else {
        return false;
    }
}
// i want to get products from database and return json
function getProducts($conn, $numOfRows)
{
    $sql = "SELECT * FROM products LIMIT $numOfRows";
    $result = $conn->query($sql);
    $rows = array();
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            array_push($rows, $row);
        }
        return $rows;
    }
}


// i want to get products from database and return json
function getProduct($conn, $id)
{
    $sql = "SELECT * FROM products WHERE product_id = $id";
    $result = $conn->query($sql);
    $row = array();
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();

        return $row;
    }
}

function getProductsInCart($conn, $token)
{

    $sql = "SELECT * FROM products Right JOIN `order` on products.product_id = order.product_id where order.user_id = (SELECT user_id from users where user_token = '$token')";

    $result = $conn->query($sql);
    $rows = array();
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            array_push($rows, $row);
        }
        return $rows;
    } else {
        return false;
    }



}



function getLovedProducts($conn, $token)
{

    $sql = "SELECT * FROM products Right JOIN love on products.product_id = love.product_id where love.user_id = (SELECT user_id from users where user_token = '$token')";

    $result = $conn->query($sql);
    $rows = array();
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            array_push($rows, $row);
        }
        return $rows;
    } else {
        return false;
    }



}

function getProductInCart($conn, $token, $id)
{

    $sql = "SELECT * FROM products Right JOIN `order` on products.product_id = order.product_id where order.user_id = (SELECT user_id from users where user_token = '$token') AND order.product_id = $id";

    $result = $conn->query($sql);
    $row = array();
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();

        return $row;
    } else {
        return false;
    }
}

function getLovedProduct($conn, $token, $id)
{

    $sql = "SELECT * FROM products Right JOIN love on products.product_id = love.product_id where love.user_id = (SELECT user_id from users where user_token = '$token') AND love.product_id = $id";

    $result = $conn->query($sql);
    $row = array();
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();

        return $row;
    } else {
        return false;
    }
}

function getCart($conn, $token)
{
    $sql = "SELECT * FROM Products Right join `order` on order.product_id = Products.product_id where order.user_id = (SELECT user_id from users where user_token = '$token')";
    $result = $conn->query($sql);
    $rows = array();
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            array_push($rows, $row);
        }
        return $rows;
    } else {
        return false;
    }

}

?>