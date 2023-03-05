<?php
if (isset($_SESSION['user'])) {
    unset($_SESSION['user']);
    setcookie("user", 0, time() - 3600); 
}
if (isset($_SESSION['new_user'])) {
    unset($_SESSION['new_user']);
}
$domain = $_SERVER["SERVER_NAME"];

// Is Mobile
if (preg_match("/(android|blackberry|iphone|ipod|palm|windows\s+ce)/i", $_SERVER["HTTP_USER_AGENT"])) {
    header('Location: http://'.$domain.'/sbx/mobile');
}
else{
    header('Location: http://'.$domain.'/sbx');
}
