<?php

header('Access-Control-Allow-Origin: *'); // for development, angular runs on different port
header("Content-Type: application/json"); // for json encoding
include("../connect_db.php");



// Check if id is set in the url
if (isset($_GET['id'])) {
    $passId = $_GET['id'];

    $sql = "SELECT * FROM passenger WHERE passID = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $passId);
    $stmt->execute();

    $result = $stmt->get_result();

    if ($result === false) {
        echo json_encode(['error' => 'Query failed: ' . $conn->error]);
    }

    if ($result->num_rows > 0) {
        $pilot = $result->fetch_assoc(); // should only have 1 pilot per id
        echo json_encode($pilot);  
    } else {
        echo json_encode(['error' => 'Passenger not found']);
    }

    $stmt->close();
} else {
    echo json_encode(['error' => 'No passenger ID provided']);
}

$conn->close();
?>