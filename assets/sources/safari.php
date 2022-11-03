<?php
require_once('assets/includes/core.php');
require_once('assets/sources/Sitemap.php');
$time = explode(" ",microtime());
$time = $time[1];
$sitemap = new SitemapGenerator($sm['config']['site_url']);
$sitemap->addUrl($sm['config']['site_url'],date('c'),  'daily','1');
$query = $mysqli->query("SELECT DISTINCT city FROM users");
if ($query->num_rows > 0) { 
    while($c = $query->fetch_object()){
        if(!empty($c->city)){
            $ur = $sm['config']['site_url'].'search/'.$c->city.'/';        
            $url = $sm['config']['site_url'].'search/'.$c->city.'/girls';
            $url2 = $sm['config']['site_url'].'search/'.$c->city.'/boys';
            $sitemap->addUrl($ur,date('c'),  'daily',    '1');        
            $sitemap->addUrl($url,date('c'),  'daily',    '1');
            $sitemap->addUrl($url2,date('c'),  'daily',    '1');
        }
    }
}
$query = $mysqli->query("SELECT DISTINCT country FROM users");
if ($query->num_rows > 0) { 
    while($c = $query->fetch_object()){
        if(!empty($c->country)){
            $ur = $sm['config']['site_url'].'search/'.$c->country.'/';
            $url = $sm['config']['site_url'].'search/'.$c->country.'/girls';
            $url2 = $sm['config']['site_url'].'search/'.$c->country.'/boys';
            $sitemap->addUrl($url,date('c'),  'daily',    '1');
            $sitemap->addUrl($url2,date('c'),  'daily',    '1');
            $sitemap->addUrl($ur,date('c'),  'daily',    '1');
        }
    }
}
$sitemap->createSitemap();
$sitemap->writeSitemap();
$sitemap->updateRobots();
$sitemap->submitSitemap();
$xml = simplexml_load_file("sitemap.xml");
foreach ($xml as $value) {
    echo 'Url added to the sitemap: '. $value->loc;
    echo '<br>';
}
echo '<br>Robots.txt updated!';
echo '<br>sitemap.xml updated!';
echo "<br><br>Memory peak usage: ".number_format(memory_get_peak_usage()/(1024*1024),2)."MB";
$time2 = explode(" ",microtime());
$time2 = $time2[1];
echo "<br>Execution time: ".number_format($time2-$time)."s";
?>