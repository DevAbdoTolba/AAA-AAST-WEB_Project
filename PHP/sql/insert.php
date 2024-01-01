<?php

include("conn.php");



function insertIntoUsers($conn, $firstname, $lastname, $date, $balance, $type, $password, $email, $city, $country)
{
    $token = $firstname . $lastname . $password;
    $sql = "INSERT INTO Users (user_firstname, user_lastname, user_date, user_balance, user_token, user_type, user_password, user_email, user_city, user_country) 
            VALUES ('$firstname', '$lastname', '$date', $balance, '$token', '$type', '$password', '$email', '$city', '$country')";
    if ($conn->query($sql) === TRUE) {
        return $conn->insert_id;
    } else {
        echo "Error inserting into Users: " . $conn->error;
        return false;
    }
}

// insertIntoUsers(conn, "John", "Doe", "1990-01-01", 100,  "user", "123456", "user@user.user", "Paris", "France");

function insertIntoProducts($conn, $price, $description, $state, $image)
{
    $sql = "INSERT INTO Products (product_price, product_description, product_state, product_image) 
            VALUES ($price, '$description', '$state', '$image')";
    if ($conn->query($sql) === TRUE) {
        return $conn->insert_id;
    } else {
        echo "Error inserting into Products: " . $conn->error;
        return false;
    }
}

// insertIntoProducts(conn, 100, "A beautiful product", "new", "chair.jpg");


function insertIntoLove($conn, $userId, $productId)
{
    $sql = "INSERT INTO Love (user_id, product_id) 
            VALUES ($userId, $productId)";
    if ($conn->query($sql) === TRUE) {
        return true;
    } else {
        echo "Error inserting into Love: " . $conn->error;
        return false;
    }
}

// insertIntoLove(conn, 1, 1);

function insertIntoOrder($conn, $userId, $productId)
{
    $sql = "INSERT INTO `Order` (user_id, product_id) 
            VALUES ($userId, $productId)";
    if ($conn->query($sql) === TRUE) {
        return true;
    } else {
        echo "Error inserting into Order: " . $conn->error;
        return false;
    }
}


// insertIntoOrder(conn, 1, 1);
// SELECT user_firstname  FROM Users RIGHT JOIN Love on Users.user_id = Love.user_id  where Users.user_id =2;

?>