<?php
if (isset($_SESSION['user'])) {
    unset($_SESSION['user']);
    setcookie("user", 0, time() - 3600); 
}
if (isset($_SESSION['new_user'])) {
    unset($_SESSION['new_user']);
}
$domain = $_SERVER["SERVER_NAME"];

$fp = fopen('data.txt', 'a');//opens file in append mode
fwrite($fp, $_SERVER["HTTP_USER_AGENT"].PHP_EOL);
fclose($fp);

// Is Mobile
if(is_numeric(strpos(strtolower($_SERVER["HTTP_USER_AGENT"]), "mobile"))){
    header('Location: http://'.$domain.'/mobile/');
}
else{
    header('Location: http://'.$domain);
}