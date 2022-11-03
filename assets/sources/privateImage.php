<?php
require_once("../includes/core.php");
require_once 'S3.php';
if(siteConfig('s3') != ''){
	$bucketName = siteConfig('s3_bucket');
	$key = siteConfig('s3');
	$secret = siteConfig('s3_key');
	$s3 = new S3($key,$secret );
}
$data = array();
$user = $sm['user']['id'];
$site_base = $sm['config']['site_url'];
$photos_base = "/assets/sources/uploads/";
$privatePhoto = secureEncode($_POST['private']);
if( isset( $_POST ) && !empty( $_FILES['photos'] )){
	//get the structured array
	$images = restructure_array(  $_FILES );
	$allowedExts = array("gif", "jpeg", "jpg", "png");
	foreach ( $images as $key => $value){
		$i = $key+1;
		$image_name = $value['name'];
		//get image extension
		$ext = strtolower(pathinfo($image_name, PATHINFO_EXTENSION));
		//assign unique name to image
		$name = $i*time().'.'.$ext;
		//$name = $image_name;
		//image size calcuation in KB
		$image_size = $value["size"] / 1024;
		$image_flag = true;
		//max image size
		$max_size = 8048;
		if( in_array($ext, $allowedExts) && $image_size < $max_size ){
			$image_flag = true;
		} else {
			$image_flag = false;
			$data[$i]['error'] = $image_name. ' exceeds max '.$max_size.' KB size or incorrect file extension';
		} 
		if( $value["error"] > 0 ){
			$image_flag = false;
			$data[$i]['error'] = '';
			$data[$i]['error'].= '<br/> '.$image_name.' Image contains error - Error Code : '.$value["error"];
		}
		if($image_flag){
			move_uploaded_file($value["tmp_name"], "uploads/".$name);		
			$src = "uploads/".$name;
			$dist = "uploads/thumbnail_".$name;
			$dist2 = "uploads/photo_".$name;
			$data[$i]['success'] = $thumbnail = 'thumbnail_'.$name;
			$data[$i]['success'] = $photo = 'photo_'.$name;					
			thumbnail($src, $dist, 200);
			photo($src, $dist2);
			unlink($src);
			$u_foto = $mysqli->query("SELECT * FROM users_photos where u_id = '".$user."' and profile = 1");
			$ins_photo = $site_base.$photos_base.$photo;			
			$ins_thumb = $site_base.$photos_base.$thumbnail;
			if(siteConfig('s3') != ''){
				$uploadFile = dirname(__FILE__).'/'.$dist2;
				$uploadFile2 = dirname(__FILE__).'/'.$dist;
				if ($s3->putObjectFile($uploadFile, $bucketName, baseName($uploadFile), S3::ACL_PUBLIC_READ)) {
					$ins_photo = 'https://'.$bucketName.'.s3.amazonaws.com/'.baseName($uploadFile);
					unlink($uploadFile);
					if ($s3->putObjectFile($uploadFile2, $bucketName, baseName($uploadFile2), S3::ACL_PUBLIC_READ)) {
						$ins_thumb = 'https://'.$bucketName.'.s3.amazonaws.com/'.baseName($uploadFile2);
						unlink($uploadFile2);					
					}	
				} else {
					echo "S3::putObjectFile(): Failed to copy file\n";
				}
			}			
				$mysqli->query("INSERT INTO users_photos(u_id,photo,thumb,approved,private,blocked)
														   VALUES ('$user','$ins_photo', '$ins_thumb','".$sm['config']['photo_review']."',1,1)");			
		}
	}
	echo json_encode($data);
} else {
	$data[] = 'No Image Selected..';
}
function restructure_array(array $images)
{
	$result = array();
	foreach ($images as $key => $value) {
		foreach ($value as $k => $val) {
			for ($i = 0; $i < count($val); $i++) {
				$result[$i][$k] = $val[$i];
			}
		}
	}
	return $result;
}
function thumbnail($src, $dist, $dis_width = 100 ){
	$img = '';
	$extension = strtolower(strrchr($src, '.'));
	switch($extension)
	{
		case '.jpg':
		case '.jpeg':
			$img = @imagecreatefromjpeg($src);
			break;
		case '.gif':
			$img = @imagecreatefromgif($src);
			break;
		case '.png':
			$img = @imagecreatefrompng($src);
			break;
	}
	$width = imagesx($img);
	$height = imagesy($img);
	$dis_height = $dis_width * ($height / $width);
	$new_image = imagecreatetruecolor($dis_width, $dis_height);
	imagecopyresampled($new_image, $img, 0, 0, 0, 0, $dis_width, $dis_height, $width, $height);
	$imageQuality = 35;
	switch($extension)
	{
		case '.jpg':
		case '.jpeg':
			if (imagetypes() & IMG_JPG) {
				imagejpeg($new_image, $dist, $imageQuality);
			}
			break;
		case '.gif':
			if (imagetypes() & IMG_GIF) {
				imagegif($new_image, $dist);
			}
			break;
		case '.png':
			$scaleQuality = round(($imageQuality/100) * 9);
			$invertScaleQuality = 9 - $scaleQuality;
			if (imagetypes() & IMG_PNG) {
				imagepng($new_image, $dist, $invertScaleQuality);
			}
			break;
	}
	imagedestroy($new_image);
}
function photo($src, $dist){
	$img = '';
	$extension = strtolower(strrchr($src, '.'));
	switch($extension)
	{
		case '.jpg':
		case '.jpeg':
			$img = @imagecreatefromjpeg($src);
			break;
		case '.gif':
			$img = @imagecreatefromgif($src);
			break;
		case '.png':
			$img = @imagecreatefrompng($src);
			break;
	}
	$width = imagesx($img);
	$height = imagesy($img);
	if($height > $width) {
		$destino = imagecreatetruecolor($width, $height);		
		imagecopy($destino, $img, 0, 0, 0, 0, $width, $height);	
	} else {
		$destino = imagecreatetruecolor($width, $height);		
		imagecopy($destino, $img, 0, 0, 0, 0, $width, $height);		
	}
	$imageQuality = 35;
	switch($extension)
	{
		case '.jpg':
		case '.jpeg':
			if (imagetypes() & IMG_JPG) {
				imagejpeg($destino, $dist, $imageQuality);
			}
			break;
		case '.gif':
			if (imagetypes() & IMG_GIF) {
				imagegif($destino, $dist);
			}
			break;
		case '.png':
			$scaleQuality = round(($imageQuality/100) * 9);
			$invertScaleQuality = 9 - $scaleQuality;
			if (imagetypes() & IMG_PNG) {
				imagepng($destino, $dist, $invertScaleQuality);
			}
			break;
	}
	imagedestroy($destino);
	imagedestroy($img);	
}