<?php

header('Access-Control-Allow-Origin: *'); // for development, angular runs on different port
header("Content-Type: application/json"); // for json encoding
include("../connect_db.php");

# Embedded sql to show entire pilot table
$sql = "SELECT * from plane";

$result = $conn->query($sql);

# if results not empty
if ($result->num_rows > 0){
    $planes = [];

    # Store all pilots in array
    while ($row = $result->fetch_assoc()){
        $planes[] = $row;
    }
    
    # Send data as JSON
    echo json_encode($planes);
} else {
    echo json_encode([]);
}

# Close connection 
$conn->close();

?>