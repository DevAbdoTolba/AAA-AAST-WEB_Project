<?php
include('conn.php');

// select from database and return json
function select($sql)
{
    // $sql = "SELECT * FROM `test`";
    
    $result = conn->query($sql);
    $rows = array();
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            array_push($rows, $row);
        }
    }
    return json_encode($rows);
}

?>