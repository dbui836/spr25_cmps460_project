<?php

header('Access-Control-Allow-Origin: *'); // for development, angular runs on different port
header("Content-Type: application/json"); // for json encoding
include("../connect_db.php");



# Embedded sql to show entire pilot table
$sql = "SELECT * from pilot";
$optLicense = $_GET['license'];
$optHrs = $_GET['hrs'];

if ($optLicense !== "All"){
    $sql .= " WHERE license = '$optLicense'";
    if ($optHrs !== "null"){
        $optHrs = floatval($optHrs);
        $sql .= " AND $optHrs > consec_hrs_flown";
    }
} elseif ($optHrs !== "null"){
    $optHrs = floatval($optHrs);
    $sql .= " WHERE $optHrs > consec_hrs_flown";
}

$result = $conn->query($sql);

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
$conn->close();

?>