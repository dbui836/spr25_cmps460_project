<?php

header('Access-Control-Allow-Origin: *');
header("Content-Type: application/json");
include("../connect_db.php");



# Embedded sql to show entire pilot table
$sql = "SELECT * from pilot";
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