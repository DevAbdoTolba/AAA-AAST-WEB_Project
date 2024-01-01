<?php

include("conn.php");



function insertIntoUsers($conn, $firstname, $lastname, $date, $balance,$token, $type, $password, $email, $city, $country, $gender)
{
    
    $sql = "INSERT INTO Users (user_firstname, user_lastname, user_date, user_balance, user_token, user_type, user_password, user_email, user_city, user_country, user_gender) 
            VALUES ('$firstname', '$lastname', '$date', $balance, '$token', '$type', '$password', '$email', '$city', '$country', $gender)";

    try {

        if ($conn->query($sql) === TRUE) {
            echo json_encode(array("message" => "user created successful ", "status" => 200));
            return $conn->insert_id;

        } else {
            throw new Exception($conn->error);
        }
    } catch (Exception $e) {
        if ($e->getCode() == 1062) { // 1062 is the error code for duplicate entry
            header('Content-Type: application/json');
            echo json_encode(array("message" => "Error: email is used", "status" => 409));
        }  else {
            header('Content-Type: application/json');
            echo json_encode(array("message" => "Error: " . $e->getMessage(), "status" => 500));
        }
        return false;

    }
}

// insertIntoUsers(conn, "John", "Doe", "1990-01-01", 100,  "user", "123456", "user@user.user", "Paris", "France", 1);

function insertIntoProducts($conn, $price, $description, $state, $image)
{
    $sql = "INSERT INTO Products (product_price, product_description, product_state, product_image) 
            VALUES ($price, '$description', '$state', '$image')";
    if ($conn->query($sql) === TRUE) {
        return $conn->insert_id;
    } else {
        return $conn->error;

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
        return $conn->error;

    }
}

// insertIntoLove(conn, 1, 1);

function insertIntoOrder($conn, $userId, $productId, $quantity)
{
    $sql = "INSERT INTO `Order` (user_id, product_id, order_quantity) 
            VALUES ($userId, $productId, $quantity)";
    if ($conn->query($sql) === TRUE) {
        return true;
    } else {

        return $conn->error;
    }
}


// insertIntoOrder(conn, 1,1);
// SELECT user_firstname  FROM Users RIGHT JOIN Love on Users.user_id = Love.user_id  where Users.user_id =2;



// if ($_SERVER["REQUEST_METHOD"] == "POST") {
//     switch ($_POST["endpoint"]) {
//         case "insertIntoUsers":
//             $firstname = $_POST["firstname"];
//             $lastname = $_POST["lastname"];
//             $date = $_POST["date"];
//             $balance = $_POST["balance"];
//             $type = $_POST["type"];
//             $password = $_POST["password"];
//             $email = $_POST["email"];
//             $city = $_POST["city"];
//             $country = $_POST["country"];
//             $gender = $_POST["gender"];

//             insertIntoUsers($conn, $firstname, $lastname, $date, $balance, $type, $password, $email, $city, $country, $gender);
//             break;
//         case "insertIntoProducts":
//             $productName = $_POST["productName"];
//             $productPrice = $_POST["productPrice"];
//             $productDescription = $_POST["productDescription"];
//             $productCategory = $_POST["productCategory"];

//             insertIntoProducts($conn, $productName, $productPrice, $productDescription, $productCategory);
//             break;
//         case "insertIntoLove":
//             $userId = $_POST["userId"];
//             $productId = $_POST["productId"];

//             insertIntoLove($conn, $userId, $productId);
//             break;
//         case "insertIntoOrder":
//             $userId = $_POST["userId"];
//             $productId = $_POST["productId"];
//             $quantity = $_POST["quantity"];

//             insertIntoOrder($conn, $userId, $productId, $quantity);
//             break;
//         default:
//             // Handle unknown endpoint
//             break;
//     }
// }


?>