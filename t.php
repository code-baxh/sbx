<?php
$filePath = __DIR__.'/assets/includes/core.php';
require_once($filePath);

$filePath = __DIR__.'/assets/includes/connect.php';
require_once($filePath);
use PHPMailer\PHPMailer\PHPMailer;

date_default_timezone_set('Etc/UTC');

//Create a new PHPMailer instance
$mail = new PHPMailer();
//Tell PHPMailer to use SMTP
$mail->isSMTP();
//Enable SMTP debugging
// 0 = off (for production use)
// 1 = client messages
// 2 = client and server messages
$mail->SMTPDebug   = 2;
$mail->DKIM_domain = 'localhost';
//Ask for HTML-friendly debug output
$mail->Debugoutput = 'html';
//Set the hostname of the mail server
// $mail->Host        = "smtpout.secureserver.net";
$mail->Host        = "ns1015861.ip-92-204-146.us";
//Set the SMTP port number - likely to be 25, 465 or 587
$mail->Port        = 465;
//Whether to use SMTP authentication
$mail->SMTPAuth    = true;
$mail->Username = "no-reply@socialbusinessexperience.com";             
$mail->Password = "GCkO&~;pxRxv";                       

$mail->SMTPSecure  = 'ssl';
//Set who the message is to be sent from
$mail->setFrom('no-reply@socialbusinessexperience.com', 'Social Bussiness Experience');
//Set an alternative reply-to address
//$mail->addReplyTo('replyto@example.com', 'First Last');
//Set who the message is to be sent to
$mail->addAddress('test@mailinator.com', 'Malik Ahsan');
//Set the subject line
$mail->Subject = 'PHPMailer SMTP test';
//Read an HTML message body from an external file, convert referenced images to embedded,
//convert HTML into a basic plain-text alternative body
$mail->msgHTML("hello", dirname(__FILE__));
//Replace the plain text body with one created manually
$mail->AltBody = 'This is a plain-text message body';

//send the message, check for errors
if (!$mail->send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
} else {
    echo "Message sent!";
}
?>