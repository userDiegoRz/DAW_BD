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
    
    for (n; n>=0; n--) {
        if (array.charAt(n)<0)
            neg++;
        if (array.charAt(n)>0)
            pos++;
        if (array.charAt(n)==0)
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

function averageMatrix (){
    let matrix = generateMatrix();
    
    let avrg = 0;
    let n = matrix.length;
    let divi = n;
    let m = matrix.width;
    
    for (m; m>=0; m--) {
        avrg = avrg + matrix.charAt(n);  
        n--;
    }
}

function generateMatrix(){
    var mat = "";
    let fil = Number(Math.floor((Math.random() * 10) + 1));
    let row = Number(Math.floor((Math.random() * 10) + 1));;
    let n = 0;
    
    for (let i=0; i<row; i++) {
        for (let j=0; j<fil; j++) {
            n = Math.floor(Math.random() * 20-10);
            mat = mat + n;
        }
    }
    
    console.log(mat);
    return mat;
}


document.getElementById("one").onclick = powers;
document.getElementById("two").onclick = mentalMath;
document.getElementById("three").onclick = counter;
document.getElementById("four").onclick = averageMatrix;
document.getElementById("five").onclick = getInverted;
document.getElementById("free").onclick = powers;
