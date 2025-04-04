<?php

header('Access-Control-Allow-Origin: *'); // for development, angular runs on different port
header("Content-Type: application/json"); // for json encoding
include("../connect_db.php");



# Embedded sql to show entire passenger table
$sql = "SELECT * from passenger";

$fname = $_GET['fname'];
$lname = $_GET['lname'];

if ($fname !== "" || $lname !== ""){

    if ($fname !== ""){
        $sql .= " WHERE pass_fname = '$fname'";
        if ($lname !== ""){
            $sql .= " AND pass_lname = '$lname'";
        }
    }else{
        $sql .= " WHERE pass_lname = '$lname'";
    }
}


$result = $conn->query($sql);

# if results not empty
if ($result->num_rows > 0){
    $passengers = [];

    # Store all passengers in array
    while ($row = $result->fetch_assoc()){
        $passengers[] = $row;
    }
    
    # Send data as JSON
    echo json_encode($passengers);

} else {
    echo json_encode([]);
}

# Close connection 
$conn->close();

?>