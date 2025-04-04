<?php

header('Access-Control-Allow-Origin: *'); // for development, angular runs on different port
header("Content-Type: application/json"); // for json encoding
header('Access-Control-Allow-Headers: Content-Type, Authorization'); // Allow the Content-Type header
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE'); // Allow methods
include("../connect_db.php"); // Connect to database



// Get the incoming data (pilot info)
$data = json_decode(file_get_contents("php://input"), true);

// Check if the data has required fields
if (isset($data['passID']) && isset($data['pass_fname']) && isset($data['pass_lname'])) {
    $passID = $data['passID'];
    $pass_fname = $data['pass_fname'];
    $pass_lname = $data['pass_lname'];


    // Update the passenger in the database
    $sql = "UPDATE passenger SET pass_fname = '$pass_fname', pass_lname = '$pass_lname' WHERE passID = '$passID'";
    
    if ($conn->query($sql) === FALSE) {
        echo json_encode(['error' => 'Error updating pilot']);
    }
} else {
    echo json_encode(['error' => 'Invalid data']);
}

$conn->close();
?>