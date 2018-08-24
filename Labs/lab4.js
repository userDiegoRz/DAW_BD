function getTable(n) {
    
    let tab = String("");
    
    tab=tab + '<table border="1">';
    
    for( n; n; n--){
        tab= tab+'<tr>';
        
        for(let j=1; j<=3; j++){
            let res = Math.pow(n,j);
            tab = tab + '<td>'+ res +'</td>';
        }
        tab= tab + ('</tr>');   
        
    }
    tab= tab +'</table>';
    
    return tab;
}

function powers() {
    var input = Number(prompt("Enter an integer number", "ex, 1,6,12"));

    
    var w = window.open("", "_blank", "width=300, height=200, rezisable=no, left=800, top=400");
    w.document.open();
    w.document.write(getTable(input));
    w.document.close();
}
           
function mentalMath() {
    let a = Number(Math.floor((Math.random() * 100) + 1));
    let b = Number(Math.floor((Math.random() * 100) + 1));
    let kron = Date.now();
    let ans = a+b;
    let x = "";
    
    var promp = Number(prompt("Add: " + a + " + " + b));
    
    if (promp == ans){
        kron = ((Date.now()-kron)/1000);
        x = String("Correct. You answered right in " + kron + " seconds");
    } else {
        x = String("Incorrect. Correct answer was: " + ans)
    }
    
    var w = window.open("", "_blank", "width=300, height=200, rezisable=no, left=800, top=400");
    w.document.open();
    w.document.write(x);
    w.document.close();
    
}

function generateArray(){
    var array = "";
    let longi = Number(prompt("Set a size for the array:", "ex. 8"));
    let n = 0;
    
    for (let i=0; i<longi; i++) {
        n = Math.floor(Math.random() * 20-10);
        array = array + n;
    }
    
    console.log(array);
    return array;
}

function counter(){
    let array = generateArray();
    
    let neg = 0;
    let pos = 0;
    let zer = 0;
    let n = array.length;
    
    for (let i=0; i<n; i++) {
        if (array.charAt(i)<0)
            neg++;
        if (array.charAt(i)>0)
            pos++;
        if (array.charAt(i)==0)
            zer++;
    }
    
    let x = String("In the Array there are "+ neg + " Negative numbers; " + pos + " Positive numbers; and " + zer + " Number Zero.");
    
    var w = window.open("", "_blank", "width=300, height=200, rezisable=no, left=800, top=400");
    w.document.open();
    w.document.write(x);
    w.document.close();
    
}

function setInverted (arr){
    
    let n = arr.length;
    var inv = "";
    
    for (n; n>=0; n--) {
        inv = inv + arr.charAt(n);
    }
    console.log(inv);
    return inv;
    
}

function getInverted (){
    let x = prompt("Enter any number: ");
    
    console.log(x);
    
    var w = window.open("", "_blank", "width=300, height=200, rezisable=no, left=800, top=400");
    w.document.open();
    w.document.write("The inverse of " + x + " is " + setInverted(x));
    w.document.close();
}

function generateMatrix(){
    var arr = [];
    var aux = "";
    let col = 6;
    let row = prompt("Escribe las filas para una tabla de 6 columnas");
    
    
    for (let i=0; i<row; i++) {
        arr[i] = new Array();
        for (let j=0; j<col; j++) {
            arr[i][j] = Math.floor(Math.random() * 20);
            aux = aux + arr [i][j];
        }
        aux = aux + '<br/>';
    } 
    console.log(arr);
    
    let mat = "";
    let n = 0;
    
    mat = aux;
    
    for(i=0; i<row; i++){
        for(j=0; j<col; j++){
            n = n + arr[i][j];
        }
        n=n/j;

        mat = mat + '<br/>' + "El promedio de la Fila " + i + "es: " + n + '<br/>';
        n=0;
    }
    var w = window.open("", "_blank", "width=300, height=200, rezisable=no, left=800, top=400");
    w.document.open();
    w.document.write(mat);
    w.document.close();
}

function invertBinary(){
    alert("Dato curioso #58");
    alert("Anteriormente, los sistemas operativos de Macintosh y Windows no eran compatibles. Una de las principales razones era que los mensajes entre ellos no se podían interpretar.");
    alert("Hablando a nivel bit, al momento de comunicar un mensaje, ambos Sistemas contaban con un bit start, uno o dos bit stop, y un bit de pariedad, además de los 8 bits (1 byte) de mensaje.");
    alert("Sin embargo, el problema radicaba en el ordenamiento de los bits. En los sistemas Macintosh, el bit más significativo se encontraba a la derecha y el menos significativo a la izquierda");
    alert("Para los sistemas de Windows, el bit más significativo se encuentra a la izquierda de la cadena, y el menos significativo a la derecha");
    alert("Por lo que si tu desearas enviar una cadena con un bit start, un bit stop, 1 byte de mensaje sin pariedad [Total 10 bits]")
    let n = prompt("Introduce una cadena binaria de 10 bits", "1001110101");
    
    var x = setInverted(n);
    
    var w = window.open("", "_blank", "width=300, height=200, rezisable=no, left=800, top=400");
    w.document.open();
    w.document.write("Una cadena " + n + " de un sistema se leería como " + x + " En el otro" + '<br/>' + '<br/>' + "   Fascinante...");
    w.document.close();
    
}


document.getElementById("one").onclick = powers;
document.getElementById("two").onclick = mentalMath;
document.getElementById("three").onclick = counter;
document.getElementById("four").onclick = generateMatrix;
document.getElementById("five").onclick = getInverted;
document.getElementById("free").onclick = invertBinary;
