<?php

require_once(__DIR__ ."/../includes/core.php");
require_once(__DIR__ ."/../social/Google/autoload.php");

$client_id = $sm['plugins']['google']['key']; 
$client_secret = $sm['plugins']['google']['secret'];
$redirect_uri = $sm['config']['site_url'].'assets/sources/googleconnect.php';
$client = new Google_Client();
$client->setClientId($client_id);
$client->setClientSecret($client_secret);
$client->setRedirectUri($redirect_uri);
$client->addScope("email");
$client->addScope("profile");
$service = new Google_Service_Oauth2($client);
if (isset($_GET['code'])) {
  $client->authenticate($_GET['code']);
  $_SESSION['access_token'] = $client->getAccessToken();
  header('Location: ' . $redirect_uri);
  exit;
}
if (isset($_SESSION['access_token']) && $_SESSION['access_token']) {
  $client->setAccessToken($_SESSION['access_token']);
} else {
  $authUrl = $client->createAuthUrl();
}
if (isset($authUrl)){ 
  header('Location: ' . $authUrl);	
} else {
	$user = $service->userinfo->get(); 
	    $location = json_decode(file_get_contents('http://api.ipstack.com/'.$_SERVER['REMOTE_ADDR'].'?access_key='.$sm['settings']['ipstack']));		
  	$id = $user->id;         
	$name = $user->name; 
	$email = $user->email; 
	$gender = $user->gender;	
	$photo = $user->picture;		
	googleconnect($id,$name,$email,$gender,$photo,$location);  
	header('Location:'.$sm['config']['site_url']);
}