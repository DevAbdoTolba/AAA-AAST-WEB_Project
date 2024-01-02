<?php
include('conn.php');

// select from database and return json
function select($table)
{
    $sql = "SELECT * FROM " . $table ;

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
        $row = $result -> fetch_assoc();
        return $row;
    } else {
        return false;
    }
}
    // i want to get products from database and return json
    function getProducts($conn , $numOfRows)
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
?>