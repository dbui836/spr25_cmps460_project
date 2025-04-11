<?php

header('Access-Control-Allow-Origin: *'); // for development, angular runs on different port
header("Content-Type: application/json"); // for json encoding
header('Access-Control-Allow-Headers: Content-Type, Authorization'); // Allow the Content-Type header
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE'); // Allow methods
include("../connect_db.php"); // Connect to database

// Get the incoming data (plane info)
$data = json_decode(file_get_contents("php://input"), true);

// Check if the data has required fields
if (isset($data['modelID']) && isset($data['hrs_flown'])) {
    $modelID = $data['modelID'];
    $hrs_flown = $data['hrs_flown'];

    // Update the pilot in the database
    $sql = "INSERT INTO Plane (modelID, hrs_flown)
            VALUES ('$modelID', '$hrs_flown')";
    
    if ($conn->query($sql) === FALSE) {
        echo json_encode(['error' => 'Error adding plane']);
    }
} else {
    echo json_encode(['error' => 'Invalid data']);
}

$conn->close();
?>