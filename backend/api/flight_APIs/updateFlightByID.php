<?php

header('Access-Control-Allow-Origin: *'); // for development, angular runs on different port
header("Content-Type: application/json"); // for json encoding
header('Access-Control-Allow-Headers: Content-Type, Authorization'); // Allow the Content-Type header
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE'); // Allow methods
include("../connect_db.php"); // Connect to database



// Get the incoming data 
$data = json_decode(file_get_contents("php://input"), true);

// Check if the data has required fields
if (isset($data['flightID']) && isset($data['scr']) && isset($data['dest']) && isset($data['plt1_ID']) && isset($data['plt2_ID'])) {
    $scr = $data['scr'];
    $dest = $data['dest'];
    $flightID = (int)$data['flightID'];
    $plt1 = (int)$data['plt1_ID'];
    $plt2 = (int)$data['plt2_ID'];

    // Query: Update the flight in the database
    $sql = "UPDATE flight SET scr = ?, dest = ?, plt1_ID = ?, plt2_ID = ? WHERE flightID = ?";

    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssiii", $scr, $dest, $plt1, $plt2, $flightID);

    if ($stmt->execute() === FALSE) {
        echo json_encode(['error' => 'Error updating flight']);
    }
    $stmt->close();
} else {
    echo json_encode(['error' => 'Invalid data']);
}

$conn->close();
?>