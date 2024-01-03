<?php
include("conn.php");

$sqlUsers = "CREATE TABLE Users (
        user_id INT AUTO_INCREMENT  ,
        user_firstname VARCHAR(255),
        user_lastname VARCHAR(255),
        user_date DATE,
        user_balance DECIMAL(10,2),
        user_token VARCHAR(255),
        user_type VARCHAR(255),
        user_password VARCHAR(255),
        user_email VARCHAR(255) NOT NULL UNIQUE,
        user_city VARCHAR(255),
        user_country VARCHAR(255),
        user_gender BOOLEAN,
        PRIMARY KEY (user_id, user_email)
        )";

$sqlProducts = "CREATE TABLE Products (
            product_id INT AUTO_INCREMENT PRIMARY KEY,
            product_name VARCHAR(255),
            product_price DECIMAL(10,2),
            product_description TEXT,
            product_state VARCHAR(255),
            product_image TEXT
            )";

$sqlLove = "CREATE TABLE Love (
            user_id INT,
            product_id INT,
            FOREIGN KEY (user_id) REFERENCES Users(user_id), 
            FOREIGN KEY (product_id) REFERENCES Products(product_id),
            PRIMARY KEY (user_id, product_id)
            )";

$sqlOrder = "CREATE TABLE `Order` (
            user_id INT,
            product_id INT,
            order_quantity INT,
            FOREIGN KEY (user_id) REFERENCES Users(user_id), 
            FOREIGN KEY (product_id) REFERENCES Products(product_id),
            PRIMARY KEY (user_id, product_id)
            )";

define("TABLE_USERS", $sqlUsers);
define("TABLE_PRODUCTS", $sqlProducts);
define("TABLE_LOVE", $sqlLove);
define("TABLE_ORDER", $sqlOrder);

// function to invoke each depending on the button pressed

if (
    isset($_POST['tableName'])

) {
    if ($_POST['tableName'] == "delete") {
        delete();
    } else {
        echo "Creating table: " . $_POST['tableName'];
        createTable();
    }
}


function createTable()
{
    $tableName = $_POST['tableName'];
    // Here you can add the code to create the table in your database
    // The table name is passed as a parameter to this function
    switch ($tableName) {
        case "TABLE_USERS":
            $sql = TABLE_USERS;
            break;
        case "TABLE_PRODUCTS":
            $sql = TABLE_PRODUCTS;
            break;
        case "TABLE_LOVE":
            $sql = TABLE_LOVE;
            break;
        case "TABLE_ORDER":
            $sql = TABLE_ORDER;
            break;
        default:
            $sql = "";
            break;
    }

    if (conn->query($sql) === TRUE) {
        echo "Table created successfully";
    } else {
        echo "Error creating table: " . conn->error;
    }

}

function delete()
{
    // delete all tables
    $sqlLove = "DROP TABLE Love";
    $sqlOrder = "DROP TABLE `Order`";
    $sqlUsers = "DROP TABLE Users";
    $sqlProducts = "DROP TABLE Products";

    if (conn->query($sqlLove) === TRUE) {
        echo "Table deleted successfully <br /> ";
    } else {
        echo "Error deleting Table: " . conn->error;
    }
    if (conn->query($sqlOrder) === TRUE) {
        echo "Table deleted successfully <br /> ";
    } else {
        echo "Error deleting Table: " . conn->error;
    }
    if (conn->query($sqlUsers) === TRUE) {
        echo "Table deleted successfully <br /> ";
    } else {
        echo "Error deleting Table: " . conn->error;
    }
    if (conn->query($sqlProducts) === TRUE) {
        echo "Table deleted successfully <br /> ";
    } else {
        echo "Error deleting Table: " . conn->error;
    }
}


?>

<!-- make a simple form in which there is all 4 tables, every button invokes the button to create one of the tables above -->

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>

    </head>

    <body>
        <form action="tables.php" method="post" id="form">
            <input type="submit" name="tableName" value="TABLE_USERS">
            <input type="submit" name="tableName" value="TABLE_PRODUCTS">
            <input type="submit" name="tableName" value="TABLE_LOVE">
            <input type="submit" name="tableName" value="TABLE_ORDER">
            <input type="submit" name="tableName" value="delete" id="delete">
        </form>

        <script>


            document.getElementById("delete").addEventListener("click", function (event) {

                var password = prompt("Please enter the password to delete all tables", "");
                if (password == "delete force") {

                } else {
                    event.preventDefault();
                    alert("Wrong password");
                }
            });

        </script>
    </body>

    </html>

</body>

</html>