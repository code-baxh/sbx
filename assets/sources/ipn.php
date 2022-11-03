<?php
require('../includes/config.php');
$mysqli = new mysqli($db_host, $db_username, $db_password,$db_name);
if (mysqli_connect_errno($mysqli)) {
    exit(mysqli_connect_error());
}

function getArray($table,$filter='',$order,$limit=''){
	global $mysqli;
	$result = array();
	$query = $mysqli->query("SELECT * FROM $table $filter ORDER BY $order $limit");
	if(isset($query->num_rows) && !empty($query->num_rows)){
		while($row = $query->fetch_assoc()){
			$result[] = $row;
		}		
	}
	return $result;	
}

function getData($table,$col,$filter=''){
    global $mysqli;
    $q = $mysqli->query("SELECT $col FROM $table $filter");
    $result = 'noData';
    if($q->num_rows >= 1) {
        $r = $q->fetch_object();
        $result = $r->$col;
    }
    return $result;
}

define("DEBUG", 0);
define("USE_SANDBOX", 0);
define("LOG_FILE", "./ipn.log");
$raw_post_data = file_get_contents('php://input');
$raw_post_array = explode('&', $raw_post_data);
$myPost = array();
foreach ($raw_post_array as $keyval) {
	$keyval = explode ('=', $keyval);
	if (count($keyval) == 2)
		$myPost[$keyval[0]] = urldecode($keyval[1]);
}
// read the post from PayPal system and add 'cmd'
$req = 'cmd=_notify-validate';
if(function_exists('get_magic_quotes_gpc')) {
	$get_magic_quotes_exists = true;
}
foreach ($myPost as $key => $value) {
	if($get_magic_quotes_exists == true && get_magic_quotes_gpc() == 1) {
		$value = urlencode(stripslashes($value));
	} else {
		$value = urlencode($value);
	}
	$req .= "&$key=$value";
}
// Post IPN data back to PayPal to validate the IPN data is genuine
// Without this step anyone can fake IPN data
if(USE_SANDBOX == true) {
	$paypal_url = "https://www.sandbox.paypal.com/cgi-bin/webscr";
} else {
	$paypal_url = "https://ipnpb.paypal.com/cgi-bin/webscr";
}
$ch = curl_init($paypal_url);
if ($ch == FALSE) {
	return FALSE;
}
curl_setopt($ch, CURLOPT_HTTP_VERSION, CURL_HTTP_VERSION_1_1);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_RETURNTRANSFER,1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $req);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 1);
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 2);
curl_setopt($ch, CURLOPT_FORBID_REUSE, 1);
if(DEBUG == true) {
	curl_setopt($ch, CURLOPT_HEADER, 1);
	curl_setopt($ch, CURLINFO_HEADER_OUT, 1);
}
curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 30);
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Connection: Close'));
$res = curl_exec($ch);
if (curl_errno($ch) != 0)
	{
	if(DEBUG == true) {	
		error_log(date('[Y-m-d H:i e] '). "Can't connect to PayPal to validate IPN message: " . curl_error($ch) . PHP_EOL, 3, LOG_FILE);
	}
	curl_close($ch);
	exit;
} else {
		if(DEBUG == true) {
			error_log(date('[Y-m-d H:i e] '). "HTTP request of validation request:". curl_getinfo($ch, CURLINFO_HEADER_OUT) ." for IPN payload: $req" . PHP_EOL, 3, LOG_FILE);
			error_log(date('[Y-m-d H:i e] '). "HTTP response of validation request: $res" . PHP_EOL, 3, LOG_FILE);
			list($headers, $res) = explode("\r\n\r\n", $res, 2);
		}
		curl_close($ch);
}


if (strcmp ($res, "VERIFIED") == 0) {
	$item_name = $_POST['item_name'];
	$item_number = $_POST['item_number'];
	$quanity = $_POST['os0'];
	$payment_status = $_POST['payment_status'];
	$payment_amount = $_POST['mc_gross'];
	$payment_currency = $_POST['mc_currency'];
	$txn_id = $_POST['txn_id'];
	$receiver_email = $_POST['receiver_email'];
	$payer_email = $_POST['payer_email'];
	$custom = $_POST['custom'];
	$payment_amount = intval($payment_amount);
	$data = explode(",", $custom);
	$uid = $data[0]; // User id
	$credits = $data[1]; // Credits

	$saledate = date('m/d/Y');
	$actionText = $credits.' credits';
	$mysqli->query("UPDATE users SET credits = credits+'".$credits."' WHERE id = '".$uid."'");	
	$mysqli->query("INSERT INTO sales (u_id,amount,gateway,action,time,type,quantity,saledate) 
		VALUES ('".$uid."','".$payment_amount."','paypal','".$actionText."','".time()."','credits','".$credits."','".$saledate."')");	

			
    $ref = getData('users','referral','WHERE id = '.$uid);
    $refId = getData('users','id','WHERE username = "'.$ref.'"');
    $refPremium = getData('users_premium','premium','WHERE uid = '.$refId);

	if($ref != ''){
		if($refId == $uid){
			die();
		} else {
			$packageId = getData('config_credits','id','WHERE credits = '.$credits);
			$referrals = getArray('referrals','WHERE ref_status = 1','RAND()');
			if(count($referrals) > 0){
				foreach ($referrals as $r) {
		            $pos = strpos($r['ref_type'], 'purchases credits package');
		            if($pos == true) {
		                $i = substr($r['ref_type'], -1);
		                if($i == $packageId){
			            	$reward = strpos($r['ref_reward'], 'credits');
			            	if($reward == true){	                	
		                		$mysqli->query("UPDATE users SET credits = credits+'".$r['ref_amount']."' WHERE username = '".$ref."'");
		                	} else {
								$time = $refPremium;
								if(time() > $refPremium){
									$time = time();
								}	
								$extra = 86400 * $r['ref_amount'];
								$premium = $time + $extra;
								$mysqli->query("UPDATE users_premium SET premium = '".$premium."' WHERE uid = ".$refId);	                		
		                	}
		                }	
		            }                   				
				}
			}
		}
	}

	if(DEBUG == true) {
		error_log(date('[Y-m-d H:i e] '). "Verified IPN: $req ". PHP_EOL, 3, LOG_FILE);
	}
} else if (strcmp ($res, "INVALID") == 0) {
	if(DEBUG == true) {
		error_log(date('[Y-m-d H:i e] '). "Invalid IPN: $req" . PHP_EOL, 3, LOG_FILE);
	}
}