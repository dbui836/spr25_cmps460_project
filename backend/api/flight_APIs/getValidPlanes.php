<?php

header('Access-Control-Allow-Origin: *'); // for development, angular runs on different port
header("Content-Type: application/json"); // for json encoding
include("../connect_db.php");

// Query: Get valid planes for Flight create
$sql0 = "SELECT planeID FROM Plane WHERE hrs_flown < 100";
$stmt0 = $conn->prepare($sql0);
$stmt0->execute();
$result0 = $stmt0->get_result();


# if results not empty
if ($result0->num_rows > 0){
    $planes = [];

    # Store all planeIDs in array
    while ($row = $result0->fetch_assoc()){
        $planes[] = (int)$row['planeID'];
    }
    # Send data as JSON
    echo json_encode($planes);

} else {
    echo json_encode([]);
}

# Close connections
$stmt0->close();
$conn->close();

?>