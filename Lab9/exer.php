<?php 

    $test_1 = array(100, 95, 97, 70, 90, 95);
    $test_2 = array(15, 97, 38, 65, 12, 95, 4);

   function print_array($array) { 
       echo '{ '.$array[0];
        for ($i=1; $i<sizeof($array); $i++) {
            echo ', '.$array[$i];
        }
       echo ' }';
    }
    
   function media($array) {
        $add = 0;
        $i = 0;
        foreach ($array as $value) {
            $add += $value;
            $i++;
        }
        return $add/$i;
    }

    function mediana($array) {
        sort($array);
        if (sizeof($array) % 2 == 0) {
            return ($array[sizeof($array)/2-1] + $array[sizeof($array)/2])/2;
        } else {
            return $array[(sizeof($array)-1)/2];
        }
    }

     function lista($array) {
        // Lista de numeros
        echo "<ul>";
        foreach ($array as $value) {
            echo "  <li>$value</li>";
        }
        echo "</ul>";
        // Lista de datos
        $media = media($array);
        $mediana = mediana($array);
        echo "<ul>";
        echo "  <li>Media: ".$media."</li>";
        echo "  <li>Mediana: ".$mediana."</li>";
        // Ascendente
        echo "<li>Ascendente: ";
        sort($array);
        print_array($array);
        echo "</li>";
        // Descendente
        echo "<li>Descendente: ";
        rsort($array);
        print_array($array);
        echo "</li>";
        echo "</ul>";
    }

    function potencias($n) {
    	echo "<tr><th>n</th><th>n^2</th><th>n^3</th></tr>";
        for ($i=1; $i <= $n; $i++) {
            echo "<tr><td>".$i."</td><td>".pow($i,2)."</td><td>".pow($i,3)."</td></tr>";
        }

    }
    function area_circulo($rad) {
        return pi() * pow($rad, 2);
    }
    function area_esfera($rad) {
        return 4 * area_circulo($rad);
    }
    function volumen_esfera($rad) {
        return ($rad * area_esfera($rad))/3;
    }

?>
