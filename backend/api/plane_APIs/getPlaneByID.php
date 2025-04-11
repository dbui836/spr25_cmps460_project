<?php

header('Access-Control-Allow-Origin: *'); // for development, angular runs on different port
header("Content-Type: application/json"); // for json encoding
include("../connect_db.php");

// Check if id is set in the url
if (isset($_GET['id'])) {
    $planeID = $_GET['id'];

    $sql = "SELECT * FROM plane WHERE planeID = $planeID";
    $result = $conn->query($sql);

    if ($result === false) {
        echo json_encode(['error' => 'Query failed: ' . $conn->error]);
    }

    if ($result->num_rows > 0) {
        $plane = $result->fetch_assoc(); // should only have 1 plane per id
        echo json_encode($plane);  
    } else {
        echo json_encode(['error' => 'Plane not found']);
    }
} else {
    echo json_encode(['error' => 'No plane ID provided']);
}

$conn->close();
?>