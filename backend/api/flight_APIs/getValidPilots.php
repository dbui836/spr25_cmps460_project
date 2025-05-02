<?php

header('Access-Control-Allow-Origin: *'); // for development, angular runs on different port
header("Content-Type: application/json"); // for json encoding
include("../connect_db.php");


// Set up license variables
$student = "Student";
$recreational = "Recreational";
$private = "Private";
$commercial = "Commercial";
$airline_transport = "Airline Transport";

// Query: Get the required cert for the given plane model
$sql0 = "SELECT reqCert FROM PlaneModel WHERE modelID = ?";
$stmt0 = $conn->prepare($sql0);
$planeID = (int)$_GET['planeID'];
$location = $_GET['scr'];

$stmt0->bind_param("i", $planeID);
$stmt0->execute();
$result0 = $stmt0->get_result();

if ($result0->num_rows > 0 && $location !== "") {
    $row0 = $result0->fetch_assoc();
    $license = $row0['reqCert'];

    if ($license === "Student"){
        // Query: Get pilots located at the same location of the flight that have under a certain amount of hrs
        $sql = "SELECT pltID from pilot WHERE plt_location = ? AND 16 > consec_hrs_flown";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("s", $location);

    } elseif ($license === "Recreational"){
        $sql = "SELECT pltID from pilot WHERE plt_location = ? AND 16 > consec_hrs_flown AND  (license = ? OR license = ? OR license = ? OR license = ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("sssss", $location, $license, $private, $commercial, $airline_transport); 

    } elseif ($license === "Private"){
        $sql = "SELECT pltID from pilot WHERE plt_location = ? AND 16 > consec_hrs_flown AND  (license = ? OR license = ? OR license = ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ssss",$location, $license, $commercial, $airline_transport); 

    } elseif ($license === "Commercial"){
        $sql = "SELECT pltID from pilot WHERE plt_location = ? AND 16 > consec_hrs_flown AND  (license = ? OR license = ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("sss",$location, $license, $airline_transport); 
    } else {
        $sql = "SELECT pltID from pilot WHERE plt_location = ? AND 16 > consec_hrs_flown AND  (license = ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ss", $location, $license); 
    }

    $stmt->execute();
    $result = $stmt->get_result();

    # if results not empty
    if ($result->num_rows > 0){
        $pilots = [];

        # Store all pilots in array
        while ($row = $result->fetch_assoc()){
            $pilots[] = (int)$row['pltID'];
        }
        # Send data as JSON
        echo json_encode($pilots);

    } else {
        echo json_encode([]);
    }
    $stmt->close();
} else{
    echo json_encode([]);
}

# Close connections
$stmt0->close();
$conn->close();

?>