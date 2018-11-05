<?php
    require_once "config.php";

    if (isset($_SESSION['access_token'])){
        header('Location: index.php');
        exit();
    }

    $loginURL = $gClient->createAuthUrl();
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <!--Import Google Icon Font-->
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <!--Import materialize.css-->
        <link type="text/css" rel="stylesheet" href="../materialize/css/materialize.min.css"  media="screen,projection"/>
        <link type="text/css" rel="stylesheet" href="../css/Diego.css">

        <!--Let browser know website is optimized for mobile-->
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>LOGIN</title>
  </head>
  <body>
    <div class="container">
        <h3 class="center-align">Log-in</h3>
        <div class="row center-align">
            <div class="col s6 m6 l6 offset-s3 offset-m3 offset-l3">
                
                <form>
                    <input disabled placeholder="E-Mail" type="email" name="email" class="input-field validate" id="disabled"><br/>
                    <input disabled placeholder="Password" type="password" name="password" class="input-field validate" id="disabled"><br/>
                    <input type="submit" value="Log in" class="waves-effect waves-light cyan btn">
                    <input type="button" onclick="window.location = '<?php echo $loginURL ?>'" value="Log in with google" class="waves-effect waves-light red btn">
                </form>
                
            </div>
        </div>
    </div>
      
      <script src="https://apis.google.com/js/platform.js" async defer></script>
  </body>
</html>