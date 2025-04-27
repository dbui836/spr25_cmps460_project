<?php

header('Access-Control-Allow-Origin: *'); // for development, angular runs on different port
header("Content-Type: application/json"); // for json encoding
header('Access-Control-Allow-Headers: Content-Type, Authorization'); // Allow the Content-Type header
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE'); // Allow methods
include("../connect_db.php"); // Connect to database



// Get the incoming data
$data = json_decode(file_get_contents("php://input"), true);

// Check if the data has required fields
if (isset($data['pass_fname']) && isset($data['pass_lname'])) {
    $pass_fname = $data['pass_fname'];
    $pass_lname = $data['pass_lname'];

    // Query: Add new passenger to database
    $sql = "INSERT INTO Passenger (pass_fname, pass_lname)
            VALUES (?, ?)";
    
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ss", $pass_fname, $pass_lname);

    if ($stmt->execute() === FALSE) {
        echo json_encode(['error' => 'Error adding passenger']);
    }
    $stmt->close();
} else {
    echo json_encode(['error' => 'Invalid data']);
}

$conn->close();
?>