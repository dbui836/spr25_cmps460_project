<?php

header('Access-Control-Allow-Origin: *'); // for development, angular runs on different port
header("Content-Type: application/json"); // for json encoding
header('Access-Control-Allow-Headers: Content-Type, Authorization'); // Allow the Content-Type header
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE'); // Allow methods
include("../connect_db.php"); // Connect to database



// Get the incoming data
$data = json_decode(file_get_contents("php://input"), true);

// Check if the data has required fields
if (isset($data['scr']) && isset($data['dest']) && isset($data['planeID']) && isset($data['plt1_ID']) && isset($data['plt2_ID'])) {
    $scr = $data['scr'];
    $dest = $data['dest'];
    $planeID = (int)$data['planeID'];
    $plt1 = (int)$data['plt1_ID'];
    $plt2 = (int)$data['plt2_ID'];

    // Query: Insert flight in the database
    $sql = "INSERT INTO Flight (scr, dest, planeID, plt1_ID, plt2_ID)
            VALUES (?, ?, ?, ?, ?)";
    

    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssiii", $scr, $dest, $planeID, $plt1, $plt2);

    if ($stmt->execute() === FALSE) {
        echo json_encode(['error' => 'Error adding flight']);
    }

    // Get recently added flightID
    $flightID = $stmt->insert_id;
    $stmt->close();

    // Query: Get the max capacity of the plane from the recently added flight
    // in order to create FlightSeats for it
    $sqlCap = "SELECT max_capacity 
               FROM PlaneModel 
               WHERE modelID = (SELECT modelID from Plane WHERE planeID = ?)";

    $stmtCap = $conn->prepare($sqlCap);
    $stmtCap->bind_param("i", $planeID);

    $stmtCap->execute();

    $resultCap = $stmtCap->get_result();
    $rowCap = $resultCap->fetch_assoc();
    $stmtCap->close();

    $capacity = (int)$rowCap['max_capacity'];

    // Query: Create FlightSeats for recent flight
    $sqlSeat = "INSERT INTO FlightSeat (flightID, seatID) VALUES (?, ?)";
    $stmtSeat = $conn->prepare($sqlSeat);

    for ($seatID = 1; $seatID <= $capacity; $seatID++) {
        $stmtSeat->bind_param("ii", $flightID, $seatID);
        $stmtSeat->execute();
    }

    $stmtSeat->close();

} else {
    echo json_encode(['error' => 'Invalid data']);
}

$conn->close();

?>