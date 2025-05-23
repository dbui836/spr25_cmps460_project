<?php

header('Access-Control-Allow-Origin: *'); // for development, angular runs on different port
header("Content-Type: application/json"); // for json encoding
include("../connect_db.php");



// Check if id is set in the url
if (isset($_GET['id'])) {
    $modelId = (int)$_GET['id'];

    // Query: Get planeModel by id
    $sql = "SELECT * FROM PlaneModel WHERE modelID = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $modelId);
    $stmt->execute();

    $result = $stmt->get_result();

    if ($result ===false) {
        echo json_encode(['error' => 'Query failed: ' . $conn->error]);
    }

    if ($result->num_rows > 0) {
        $models = $result->fetch_assoc(); // should only have 1 model per id
        echo json_encode($models);  
    }else{
        echo json_encode(['error' => 'Plane Model not found']);
    }

    $stmt->close();
}else{
    echo json_encode(['error' => 'No plane model ID provided']);
}

$conn->close();
?>