<?php
    
    // define variables and set to empty values
    $usuario = $clave1 = $clave2 = "";



    if (isset($_POST["usuario"])) {
        $_POST["usuario"] = htmlspecialchars($_POST["usuario"]);
    }

    if ($_POST["usuario"]=="Profesor" && $_POST["clave1"]=="Pass01"
        && $_POST["clave2"] == "Pass01") {
        include("_header.html");
        echo "<h2> Bienvenido ".$_POST["usuario"]."</h2>";
        include("_body.html");
        include("_footer.html");
    } else if ($_POST["usuario"]=="Becario" && $_POST["clave1"]=="_password"
        && $_POST["clave2"] == "_password") {
        include("_header.html");
        echo "<h2> Bienvenido ".$_POST["usuario"]."</h2>";
        include("_body.html");
        include("_footer.html");
    } else if ($_POST["usuario"]=="" || $_POST["clave1"]==""
        || $_POST["clave2"] == "") {
        include("_header.html");
        $error = "<p>Datos <strong>INVALIDOS</strong>.</p>";
        include("_login_form.html");
        include("_footer.html");
        
    }else {
       include("_header.html");
        $error = "<p>Usuario <strong>NO REGISTRADO</strong>.</p>";
        include("_login_form.html");
        include("_footer.html");
    }
        
    
        
        

?>