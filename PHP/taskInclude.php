<?php
$name = "User";
$score = 10;
?>
<!DOCTYPE html>
<html>

<head>
    <title>
        <?php echo $name; ?>
    </title>
</head>

<body>
    <div>
        <?php echo "Welcomes " . $name; ?>
    </div>
    <div>
        <?php echo $name . ", you scored " . $score . " point/s"; ?>
    </div>
    <div>
        <?php
        // for ($i = 0; $i < 5; $i++) {

            include("score.php");
        // }
        ?>
    </div>
</body>

</html>