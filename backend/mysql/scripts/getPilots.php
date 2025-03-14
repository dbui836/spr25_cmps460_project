<?php

include("database.php");


$sql = "SELECT * from pilot";
$result = $conn->query($sql);

if ($result->num_rows > 0){
    echo "<table border='1'>
    <tr>
        <th>ID</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Certification</th>
        <th>Current Location</th>
        <th>Consec Hrs Flown</th>
    </tr>";

    while($row = $result->fetch_assoc()) {
    echo "<tr>
            <td>" . $row["pilotID"] . "</td>
            <td>" . $row["pilot_fname"] . "</td>
            <td>" . $row["pilot_lname"] . "</td>
            <td>" . $row["certs"] . "</td>
            <td>" . $row["pilot_location"] . "</td>
            <td>" . $row["pilot_hrs_flown"] . "</td>
        </tr>";
    }
    echo "</table>";
} else {
echo "0 results found.";  
}

$conn->close();

?>