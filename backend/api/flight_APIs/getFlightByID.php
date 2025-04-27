<?php

header('Access-Control-Allow-Origin: *'); // for development, angular runs on different port
header("Content-Type: application/json"); // for json encoding
include("../connect_db.php");



// Check if id is set in the url
if (isset($_GET['id'])) {
    $pilotId = (int)$_GET['id'];

    // Query: Get flight by ID
    $sql = "SELECT * FROM flight WHERE flightID = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $pilotId);
    $stmt->execute();

    $result = $stmt->get_result();

    if ($result === false) {
        echo json_encode(['error' => 'Query failed: ' . $conn->error]);
    }

    if ($result->num_rows > 0) {
        $pilot = $result->fetch_assoc(); // should only have 1 pilot per id
        echo json_encode($pilot);  
    } else {
        echo json_encode(['error' => 'Flight not found']);
    }

    $stmt->close();
} else {
    echo json_encode(['error' => 'No flight ID provided']);
}

$conn->close();
?>