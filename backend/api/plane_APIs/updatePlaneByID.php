<?php

header('Access-Control-Allow-Origin: *'); // for development, angular runs on different port
header("Content-Type: application/json"); // for json encoding
header('Access-Control-Allow-Headers: Content-Type, Authorization'); // Allow the Content-Type header
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE'); // Allow methods
include("../connect_db.php"); // Connect to database



// Get the incoming data (plane info)
$data = json_decode(file_get_contents("php://input"), true);

// Check if the data has required fields
if (isset($data['planeID']) && isset($data['modelID']) && isset($data['hrs_flown'])) {
    $planeID = $data['planeID'];
    $modelID = $data['modelID'];
    $hrs_flown = $data['hrs_flown'];

    // Update the plane in the database
    $sql = "UPDATE plane SET planeID = '$planeID', modelID = '$modelID', hrs_flown = '$hrs_flown'";
    
    if ($conn->query($sql) === FALSE) {
        echo json_encode(['error' => 'Error updating plane']);
    }
} else {
    echo json_encode(['error' => 'Invalid data']);
}

$conn->close();
?>