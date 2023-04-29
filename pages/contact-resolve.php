<?php

if(isset($_POST['submit'])) {
    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $email = $_POST['email'];
    $subject = "Website Contact Form Submission";
    $message = $_POST['message'];

    $mailTo = "joseph@josephmanni.com";
    $headers = "From: ".$email;
    $txt = "You have received an email from ".$firstname." ".$lastname.".\n\n".$message;

    mail($mailTo, $subject, $txt, $headers);
    header("Location: ../contact.php?mailsent")
}