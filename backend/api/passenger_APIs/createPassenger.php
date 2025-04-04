<?php

header('Access-Control-Allow-Origin: *'); // for development, angular runs on different port
header("Content-Type: application/json"); // for json encoding
header('Access-Control-Allow-Headers: Content-Type, Authorization'); // Allow the Content-Type header
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE'); // Allow methods
include("../connect_db.php"); // Connect to database



// Get the incoming data (pilot info)
$data = json_decode(file_get_contents("php://input"), true);

// Check if the data has required fields
if (isset($data['pass_fname']) && isset($data['pass_lname'])) {
    $pass_fname = $data['pass_fname'];
    $pass_lname = $data['pass_lname'];
 

    // Update the pilot in the database
    $sql = "INSERT INTO Passenger (pass_fname, pass_lname)
            VALUES ('$pass_fname', '$pass_lname')";
    

    if ($conn->query($sql) === FALSE) {
        echo json_encode(['error' => 'Error adding passenger']);
    }
} else {
    echo json_encode(['error' => 'Invalid data']);
}

$conn->close();
?>