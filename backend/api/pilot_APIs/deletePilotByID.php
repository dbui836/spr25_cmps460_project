<?php

header('Access-Control-Allow-Origin: *'); // for development, angular runs on different port
header("Content-Type: application/json"); // for json encoding
header('Access-Control-Allow-Headers: Content-Type, Authorization'); // Allow the Content-Type header
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE'); // Allow methods
include("../connect_db.php"); // Connect to database



// Check if id is set in the url
if (isset($_GET['id'])) {
    $pilotId = (int)$_GET['id'];

    // Query: Delete piliot by id
    $sql = "DELETE FROM pilot WHERE pltID = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $pilotId);
    $stmt->execute();

    $result = $stmt->get_result();

    if ($result === false){
        echo json_encode(['error' => 'Query failed: ' . $conn->error]);
    }
    else{
        echo json_encode(['message' => 'Deletion successful']);
    }
    $stmt->close();

}else{
    echo json_encode(['error' => 'No pilot ID provided']);
}

$conn->close();
?>