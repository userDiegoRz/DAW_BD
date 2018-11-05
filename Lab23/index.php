<?php
    session_start();

    if (isset($_SESSION['access_token']) == false){
        header('Location: login.php');
        exit();
    }
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="google-signin-client_id" content="968427137036-83pph8fom8a871fq320fpi55d8g759e7.apps.googleusercontent.com">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <!--Import Google Icon Font-->
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <!--Import materialize.css-->
        <link type="text/css" rel="stylesheet" href="../materialize/css/materialize.min.css"  media="screen,projection"/>
        <link type="text/css" rel="stylesheet" href="../css/Diego.css">

        <!--Let browser know website is optimized for mobile-->
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Index</title>
  </head>
  <body>
    <div class="container">
        <h3 class="center-align">Welcome.</h3>
        <div class="row center-align">
            
            <div class="col s6 m6 l6 offset-s3 offset-m3 offset-l3">
                <img src="<?php echo $_SESSION['picture'] ?>">
            </div>
            <div class="col s6 m6 l6 offset-s3 offset-m3 offset-l3">
                
                <table class="responsive-table ">
                    <tbody>
                        <tr>
                            <td>Google ID</td>
                            <td><?php echo $_SESSION['id'] ?></td>
                        </tr>
                        <tr>
                            <td>Nombre</td>
                            <td><?php echo $_SESSION['givenName'] ?></td>
                        </tr>
                        <tr>
                            <td>Apellido</td>
                            <td><?php echo $_SESSION['familyName'] ?></td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td><?php echo $_SESSION['email'] ?></td>
                        </tr>
                        <tr>
                            <td>Sexo </td>
                            <td><?php echo $_SESSION['gender'] ?></td>
                        </tr>
                    </tbody>
                </table>
              
            </div>
            
            <a href="logout.php">
                <button class="btn waves-effect waves-light" type="submit" name="action">Exit<i class="material-icons">power_settings_new</i>
                </button>
            </a>
            
        </div>
    </div>
      
      <script src="https://apis.google.com/js/platform.js" async defer></script>
  </body>
</html>