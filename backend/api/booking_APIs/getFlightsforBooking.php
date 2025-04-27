<?php

header('Access-Control-Allow-Origin: *'); // for development, angular runs on different port
header("Content-Type: application/json"); // for json encoding
include("../connect_db.php");

# Query: Get flight based on source and location
$sql = "SELECT flightID from Flight WHERE scr = ? AND dest = ?";

$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $_GET['src'], $_GET['dest']);
$stmt->execute();
$result = $stmt->get_result();

# if results not empty
if ($result->num_rows > 0){
    $flights = [];

    # Store all flightIDs in array
    while ($row = $result->fetch_assoc()){
        $flights[] = (int)$row['flightID'];
    }
    
    # Send data as JSON
    echo json_encode($flights);

} else {
    echo json_encode([]);
}

# Close connections
$stmt->close();
$conn->close();

?>