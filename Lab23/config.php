<?php
    session_start();
    require_once("GoogleAPI/vendor/autoload.php");

    $gClient = new Google_Client();
    $gClient->setClientId("968427137036-83pph8fom8a871fq320fpi55d8g759e7.apps.googleusercontent.com");
    $gClient->setClientSecret("SOyZPzmRjr5PIj87fWyPxKrq");
    $gClient->setApplicationName("Lab API Login");
    $gClient->setRedirectUri("http://localhost/DAW_BD/Lab23/g-callback.php");
    $gClient->addScope("https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/userinfo.email");
?>