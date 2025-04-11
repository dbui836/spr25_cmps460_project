<?php

header('Access-Control-Allow-Origin: *'); // for development, angular runs on different port
header("Content-Type: application/json"); // for json encoding
header('Access-Control-Allow-Headers: Content-Type, Authorization'); // Allow the Content-Type header
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE'); // Allow methods
include("../connect_db.php"); // Connect to database



// Get the incoming data (pilot info)
$data = json_decode(file_get_contents("php://input"), true);

// Check if the data has required fields
if (isset($data['plt_fname']) && isset($data['plt_lname']) && isset($data['license']) && isset($data['plt_location']) && isset($data['consec_hrs_flown'])) {
    $plt_fname = $data['plt_fname'];
    $plt_lname = $data['plt_lname'];
    $plt_location = $data['plt_location'];
    $license = $data['license'];
    $consec_hrs_flown = (int)$data['consec_hrs_flown'];

    // Update the pilot in the database
    $sql = "INSERT INTO Pilot (plt_fname, plt_lname, license, plt_location, consec_hrs_flown)
            VALUES (?, ?, ?, ?, ?)";
    

    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssssi", $plt_fname, $plt_lname, $license, $plt_location, $consec_hrs_flown);

    if ($stmt->execute() === FALSE) {
        echo json_encode(['error' => 'Error adding pilot']);
    }
    $stmt->close();
} else {
    echo json_encode(['error' => 'Invalid data']);
}

$conn->close();

?>