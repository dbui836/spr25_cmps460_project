<?php

header('Access-Control-Allow-Origin: *'); // for development, angular runs on different port
header("Content-Type: application/json"); // for json encoding
header('Access-Control-Allow-Headers: Content-Type, Authorization'); // Allow the Content-Type header
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE'); // Allow methods
include("../connect_db.php"); // Connect to database



// Get the incoming data (plane model info)
$data = json_decode(file_get_contents("php://input"), true);

// Check if the data has required fields
if (isset($data['modelID']) && isset($data['modelName']) && isset($data['reqCert']) && isset($data['max_capacity'])) {
    $modelID = (int)$data['modelID'];
    $modelName = $data['modelName'];
    $reqCert = $data['reqCert'];
    $max_capacity = (int)$data['max_capacity'];

    // Query: Update the plane model in the database
    $sql = "UPDATE PlaneModel SET modelName = ?, reqCert = ?, max_capacity = ? WHERE modelID = ?";

    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssii", $modelName, $reqCert, $max_capacity, $modelID);

    if ($stmt->execute() === FALSE){
        echo json_encode(['error' => 'Error updating plane model']);
    }
    $stmt->close();
}else{
    echo json_encode(['error' => 'Invalid data']);
}

$conn->close();
?>