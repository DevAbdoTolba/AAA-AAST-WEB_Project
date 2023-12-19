<?php

// check all folders visible in ./
$dir = scandir("./");
$dir = array_diff($dir, array('.', '..'));

// remove files
foreach ($dir as $key => $value) {
    if (!is_dir($value) || $value == "index.php") {
        unset($dir[$key]);
    }
}

// simpl html redirecting to each folder

echo nl2br("<html><body>

<h1>PHP</h1>

"
);

foreach ($dir as $v) {
    echo nl2br("<a href='" . $v . "'>" . $v . "</a><br>");
}

echo nl2br("
</body>
</html>

");




?>