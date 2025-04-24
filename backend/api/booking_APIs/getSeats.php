<?php

header('Access-Control-Allow-Origin: *'); // for development, angular runs on different port
header("Content-Type: application/json"); // for json encoding
include("../connect_db.php");



# Embedded sql to show available seats
$sql = "SELECT seatID from FlightSeat WHERE flightID = ? AND passID IS NULL";

$stmt = $conn->prepare($sql);

$flightID = (int)$_GET['id'];
$stmt->bind_param("i", $flightID);
$stmt->execute();
$result = $stmt->get_result();

# if results not empty
if ($result->num_rows > 0){
    $seats = [];

    # Store all seatIDs in array
    while ($row = $result->fetch_assoc()){
        $seats[] = (int)$row['seatID'];
    }
    
    # Send data as JSON
    echo json_encode($seats);

} else {
    echo json_encode([49]);
}

# Close connection 
$stmt->close();
$conn->close();

?>