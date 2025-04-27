<?php

header('Access-Control-Allow-Origin: *'); // for development, angular runs on different port
header("Content-Type: application/json"); // for json encoding
include("../connect_db.php");



# Query: Embedded sql to show Flight table
$sql = "SELECT seatID, passID from FlightSeat WHERE flightID = ?";

$stmt = $conn->prepare($sql);
$flightID = (int)$_GET['id'];
$stmt->bind_param("i", $flightID);
$stmt->execute();
$result = $stmt->get_result();

# if results not empty
if ($result->num_rows > 0){
    $seats = [];

    # Store all pilots in array
    while ($row = $result->fetch_assoc()){
        $seats[] = $row;
    }
    # Send data as JSON
    echo json_encode($seats);

}else{
    echo json_encode([]);
}

# Close connection 
$stmt->close();
$conn->close();
?>