<?php
# initialize variables to connect to database
$host = "localhost";
$user = "root";
$password = "";
$db = "ul_airlines";

# Connect to database
$conn = new mysqli($host, $user, $password, $db);

# Debug: Test if connection successful
if ($conn-> connect_error) {
    die("Can't connect to the database: " . $conn->connect_error);
}
?>