<?php

header('Access-Control-Allow-Origin: *'); // for development, angular runs on different port
header("Content-Type: application/json"); // for json encoding
include("../connect_db.php");

// Check if id is set in the url
if (isset($_GET['id'])) {
    $passId = $_GET['id'];

    // Query: check if id matches one of passenger
    $sql = "SELECT * FROM passenger WHERE passID = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $passId);
    $stmt->execute();

    // Send results
    $result = $stmt->get_result();
    if ($result === false) {
        echo json_encode(['error' => 'Query failed: ' . $conn->error]);
    }
    echo json_encode($result->num_rows > 0);  

    // Close stmt connection
    $stmt->close();
} else {
    echo json_encode(['error' => 'No passenger ID provided']);
}

$conn->close();
?>