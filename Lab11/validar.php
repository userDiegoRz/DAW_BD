<?php
    
    // define variables and set to empty values
    $usuario = $clave1 = $clave2 = "";



    if (isset($_POST["usuario"])) {
        $_POST["usuario"] = htmlspecialchars($_POST["usuario"]);
    }

    if ($_POST["usuario"]=="Profesor" && $_POST["clave1"]=="Pass01"
        && $_POST["clave2"] == "Pass01") {
        include("view/_header.html");
        echo "<h2> Bienvenido ".$_POST["usuario"]."</h2>";
        include("view/_body.html");
        include("view/_footer.html");
    } else if ($_POST["usuario"]=="Becario" && $_POST["clave1"]=="_password"
        && $_POST["clave2"] == "_password") {
        include("view/_header.html");
        echo "<h2> Bienvenido ".$_POST["usuario"]."</h2>";
        include("view/_body.html");
        include("view/_footer.html");
    } else if ($_POST["usuario"]=="" || $_POST["clave1"]==""
        || $_POST["clave2"] == "") {
        include("view/_header.html");
        $error = "<p>Datos <strong>INVALIDOS</strong>.</p>";
        include("view/_login_form.html");
        include("view/_footer.html");
        
    }else {
       include("view/_header.html");
        $error = "<p>Usuario <strong>NO REGISTRADO</strong>.</p>";
        include("view/_login_form.html");
        include("view/_footer.html");
    }
        
    
        
        

?>