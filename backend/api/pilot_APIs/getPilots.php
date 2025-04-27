<?php

header('Access-Control-Allow-Origin: *'); // for development, angular runs on different port
header("Content-Type: application/json"); // for json encoding
include("../connect_db.php");



# Query: Embedded sql to show pilot table
$sql = "SELECT * FROM pilot";
$optLicense = $_GET['license'];
$optHrs = $_GET['hrs'];

if ($optLicense !== "All"){
    $sql .= " WHERE license = ?";
    if ($optHrs !== "null"){
        $optHrs = (int)$optHrs;
        $sql .= " AND ? > consec_hrs_flown";
    }
}elseif ($optHrs !== "null"){
    $optHrs = (int)$optHrs;
    $sql .= " WHERE ? > consec_hrs_flown";
}

$stmt = $conn->prepare($sql);
if ($optLicense !== "All"){
    if ($optHrs !== "null"){
        $stmt->bind_param("si", $optLicense, $optHrs);
    } else{
        $stmt->bind_param("s", $optLicense);
    }
} elseif ($optHrs !== "null"){
    $stmt->bind_param("i", $optHrs);
}

$stmt->execute();
$result = $stmt->get_result();

# if results not empty
if ($result->num_rows > 0){
    $pilots = [];

    # Store all pilots in array
    while ($row = $result->fetch_assoc()){
        $pilots[] = $row;
    }
    # Send data as JSON
    echo json_encode($pilots);

} else {
    echo json_encode([]);
}

# Close connection 
$stmt->close();
$conn->close();

?>