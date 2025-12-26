<?php
include("config.php");

$username = $_POST['username'];
$hours = $_POST['hours'];
$amount = $hours * 80;

$query = "INSERT INTO bookings(username,hours,amount) VALUES('$username','$hours','$amount')";
mysqli_query($conn, $query);

echo "Seat Booked | Bill Rs. ".$amount;
?>

