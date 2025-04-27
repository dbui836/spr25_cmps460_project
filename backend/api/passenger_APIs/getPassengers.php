<?php

header('Access-Control-Allow-Origin: *'); // for development, angular runs on different port
header("Content-Type: application/json"); // for json encoding
include("../connect_db.php");



# Query: Embedded sql to show entire passenger table
$sql = "SELECT * from passenger";

$fname = $_GET['fname'];
$lname = $_GET['lname'];

// For optional name searching
if ($fname !== "" || $lname !== ""){ // if both are "", meaning no search, just show everything
    if ($fname !== ""){
        $sql .= " WHERE pass_fname = ?";
        if ($lname !== ""){
            $sql .= " AND pass_lname = ?";
        }
    }else{
        $sql .= " WHERE pass_lname = ?";
    }
}

$stmt = $conn->prepare($sql);
if ($fname !== "" || $lname !== ""){
    if ($fname !== ""){
        if ($lname !== ""){
            $stmt->bind_param("ss", $fname, $lname);
        } else{
            $stmt->bind_param("s", $fname);
        }
    }else{
        $stmt->bind_param("s", $lname);
    }
}


$stmt->execute();
$result = $stmt->get_result();

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
$stmt->close();
$conn->close();

?>