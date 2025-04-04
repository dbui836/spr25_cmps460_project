<?php

header('Access-Control-Allow-Origin: *'); // for development, angular runs on different port
header("Content-Type: application/json"); // for json encoding
header('Access-Control-Allow-Headers: Content-Type, Authorization'); // Allow the Content-Type header
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE'); // Allow methods
include("../connect_db.php"); // Connect to database



// Get the incoming data (pilot info)
$data = json_decode(file_get_contents("php://input"), true);

// Check if the data has required fields
if (isset($data['pltID']) && isset($data['plt_fname']) && isset($data['plt_lname']) && isset($data['license']) && isset($data['plt_location']) && isset($data['consec_hrs_flown'])) {
    $pltID = $data['pltID'];
    $plt_fname = $data['plt_fname'];
    $plt_lname = $data['plt_lname'];
    $plt_location = $data['plt_location'];
    $license = $data['license'];
    $consec_hrs_flown = $data['consec_hrs_flown'];

    // Update the pilot in the database
    $sql = "UPDATE pilot SET plt_fname = '$plt_fname', plt_lname = '$plt_lname', plt_location = '$plt_location', license = '$license', consec_hrs_flown = '$consec_hrs_flown' WHERE pltID = '$pltID'";
    
    if ($conn->query($sql) === FALSE) {
        echo json_encode(['error' => 'Error updating pilot']);
    }
} else {
    echo json_encode(['error' => 'Invalid data']);
}

$conn->close();
?>