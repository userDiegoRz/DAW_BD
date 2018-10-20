
 <?php
    session_start();
 
    require_once("funciones.php");
    require_once("util.php");
    
 
    if (isset($_POST["usuario"])) {
        $_POST["usuario"] = limpia_entrada($_POST["usuario"]);
    }
    
    if (isset($_POST["password"])) {
        $_POST["password"] = limpia_entrada($_POST["password"]);
    }
 
 
    if (isset($_SESSION["usuario"])) {
        include("view/_header.html");
        include("view/_body.html");
    } else if (login($_POST["usuario"], $_POST["password"]) != false) {
        $_SESSION["usuario"] = $_POST["usuario"];
        include("view/_header.html");
        include("view/_body.html");
    } else if ($_POST["usuario"] == "" && $_POST["password"] == "" 
                && isset($_POST["usuario"])  && isset($_POST["password"]) ) {
        $error = "<p>Ingresa tu usuario y contraseña<p>";
        include("view/_header.html");
        include("view/_login.html");
    } else if(isset($_POST["usuario"]) || isset($_POST["password"]) ) {
        sleep(3);
        $error = "<p>Datos <strong>INVALIDOS</strong>.</p>";
        include("view/_header.html");
        include("view/_login.html");
    } else {
        include("view/_header.html");
        include("view/_login.html");
    }
    
    include("view/_footer.html");
 
 ?>