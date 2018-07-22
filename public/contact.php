<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$from = 'From: SSR'; 
$to = 'chenyahua2012@hotmail.com'; // send to this address
$subject = 'SSR Contact Form'; //subject line in email

$body = "From: $name\n
Email: $email\n 
Message:\n $message";

mail($to, $subject, $body); 
header("Location: http://www.ssracademy.in/thank.html"); /* Redirect browser */
exit();
?>