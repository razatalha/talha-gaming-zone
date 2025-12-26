<?php
include("config.php");

$username = $_POST['username'];
$password = $_POST['password'];

$query = "INSERT INTO users(username,password) VALUES('$username','$password')";
mysqli_query($conn, $query);

echo "Registered Successfully";
?>
