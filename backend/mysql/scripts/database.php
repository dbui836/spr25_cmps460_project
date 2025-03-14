<?php
$host = "localhost";
$user = "root";
$password = "";
$db = "ul_airlines";

$conn = new mysqli($host, $user, $password, $db);


if ($conn-> connect_error) {
    die("Can't connect to the database: " . $conn->connect_error);
} else{
    echo "Database connection successful";
}

?>