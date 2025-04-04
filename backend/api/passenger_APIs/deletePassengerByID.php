<?php

header('Access-Control-Allow-Origin: *'); // for development, angular runs on different port
header("Content-Type: application/json"); // for json encoding
header('Access-Control-Allow-Headers: Content-Type, Authorization'); // Allow the Content-Type header
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE'); // Allow methods
include("../connect_db.php"); // Connect to database



// Check if id is set in the url
if (isset($_GET['id'])) {
    $passId = $_GET['id'];

    $sql = "DELETE FROM passenger WHERE passID = $passId";
    $result = $conn->query($sql);

    if ($result === false) {
        echo json_encode(['error' => 'Query failed: ' . $conn->error]);
    }
    else{
        echo json_encode(['message' => 'Deletion successful']);
    }
} else {
    echo json_encode(['error' => 'No passenger ID provided']);
}

$conn->close();
?>