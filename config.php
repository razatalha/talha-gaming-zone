<?php
$conn = mysqli_connect("localhost","root","","gamingzone");
if(!$conn){
    die("Database Connection Failed: ".mysqli_connect_error());
}
?>
