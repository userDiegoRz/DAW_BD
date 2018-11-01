<?php
	
function connect() 
{	

                                    //servidor  usuario pass  
    $conexion = mysqli_connect("localhost","root","","lab14");

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

    $query = 'SELECT nombre FROM usuarios where nombre = "'.$usuario.'"AND password = "'.$password.'"';

    $results = $conexion->query($query);

    while ($row = mysqli_fetch_array($results,MYSQLI_BOTH))
    {
        mysqli_free_result($results);
        disconnect($conexion);
        return $row["nombre"];
    }

    mysqli_free_result($results);
    disconnect($conexion);
    return false;
}


	?>