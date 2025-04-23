<?php

header('Access-Control-Allow-Origin: *'); // for development, angular runs on different port
header("Content-Type: application/json"); // for json encoding
include("../connect_db.php");



# Embedded sql to show pilot table
$sql = "SELECT * from PlaneModel";
$stmt = $conn->prepare($sql);
$stmt->execute();
$result = $stmt->get_result();

# if results not empty
if ($result->num_rows > 0){
    $models = [];

    # Store all models in array
    while ($row = $result->fetch_assoc()){
        $models[] = $row;
    }
    
    # Send data as JSON
    echo json_encode($models);

} else {
    echo json_encode([]);
}

# Close connection 
$stmt->close();
$conn->close();

?>