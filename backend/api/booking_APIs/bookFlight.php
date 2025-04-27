<?php

header('Access-Control-Allow-Origin: *'); // for development, angular runs on different port
header("Content-Type: application/json"); // for json encoding
header('Access-Control-Allow-Headers: Content-Type, Authorization'); // Allow the Content-Type header
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE'); // Allow methods
include("../connect_db.php"); // Connect to database

// Get the incoming data 
$data = json_decode(file_get_contents("php://input"), true);

// Check if the data has required fields
if (isset($data['flightID']) && isset($data['seat']) && isset($data['passID'])) {
    $flightID = (int)$data['flightID'];
    $seatID = (int) $data['seat'];
    $passID = (int)$data['passID'];

    // Query: Book FlightSeat to passenger
    $sql = "UPDATE FlightSeat SET passID = ? WHERE flightID = ? AND seatID = ?";

    $stmt = $conn->prepare($sql);
    $stmt->bind_param("iii", $passID, $flightID, $seatID);

    if ($stmt->execute() === FALSE) {
        echo json_encode(['error' => 'Error updating seating info']);
    }
    $stmt->close();
} else {
    echo json_encode(['error' => 'Invalid data']);
}

$conn->close();
?>