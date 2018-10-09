<?php
	
function connectDb(){
    
    
}


function connect() 
{	
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "Lab14";
                                    //servidor  usuario pass  
    $conexion = mysqli_connect("localhost","root","","Lab14");

    if($conexion == NULL)
    {
        die("Error al conectar en la base de datos");
    }
    $conexion->set_charset("utf8");
    return $conexion;
}

function disconnect($conexion) 
{
    mysqli_close($conexion);
}

function login($usuario, $password)
{
    $conexion = connect();

    $usuario = $conexion->real_escape_string($usuario);
    $password = $conexion->real_escape_string($password);

    $query = 'SELECT nombre FROM usuario where nombre = "'.$usuario.'"AND password = "'.$password.'"';

    $results = $conexion->query($query);

    while ($row = mysqli_fetch_array($results,MYSQL_BOTH))
    {
        mysql_free_result($results);
        disconnect($conexion);
        return $row["nombre"];
    }

    mysql_free_result($results);
    disconnect($conexion);
    return false;
}

function getConciertos()
{
    $conexion = connect();


    $query = 'SELECT nombre,fecha,lugar,imagen FROM conciertos';

    $results = $conexion->query($query);

    while ($row = mysqli_fetch_array($results,MYSQL_BOTH))
    {
        $tarjetas.= '<div class="card">
                        <div class="card-image waves-effect waves-block waves-light">
                          <img class="activator" src="uploads/'.$row[imagen].'">
                        </div>
                        <div class="card-content">
                          <span class="card-title activator grey-text text-darken-4">'.$row[nombre].'<i class="material-icons right">more_vert</i></span>
                          <p><a href="#">This is a link</a></p>
                        </div>
                        <div class="card-reveal">
                          <span class="card-title grey-text text-darken-4">'.$row[nombre].'<i class="material-icons right">close</i></span>
                          <p>'.$row[lugar].$row[fecha].'</p>
                        </div>
                      </div>'
    }

    mysql_free_result($results);
    disconnect($conexion);
    return $tarjetas;
}


	?>