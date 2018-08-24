//***********************************************************************//
// Terrible implementación de JS para validate.html
//***********************************************************************//



//-----------------------------------------------------------------------//

//***********************************************************************//
// Terrible implementación de JS para eshop.html
//***********************************************************************//

//Seleccionar item 1
var total = Number();
var price = Number();

function selectItem1() {
    
    total = 0;   
    price =0;
    var prom = 0;
         
    if (isNaN(prom)){
           alert("Invalid request! please ty again... or not.... whatever.") 
    }

    else {
        let prom = Number(prompt("How many items?");
        total = total+prom;
        price = price + (500 * prom);
    }
    
    document.getElementById("total1").innerHTML = total + " items";
    document.getElementById("price1").innerHTML = "$" + price + ".00 MXN";
}
//Confirmar item 1 y borrar pantalla
function buyItem1() {
    alert("Order Sweatshirt Confirmed!");
    document.getElementById("total1").innerHTML =  "0 items";
    document.getElementById("price1").innerHTML = "$ 0.00 MXN";
}

//--------------------------------------------------------------------------//

//Seleccionar item 2
function selectItem2 () {
    
    var total = Number();   
    var price = Number();
    var prom = 0;
         
    if (isNaN(prom)){
           alert("Invalid request! please ty again... or not.... whatever.") 
    }

    else {
        let prom = Number(prompt("How many items?");
        total = total+prom;
        price = price + (150 * prom);
    }
    
    document.getElementById("total2").innerHTML = total + " items";
    document.getElementById("price2").innerHTML = "$" + price + ".00 MXN";
}
//Confirmar item 2 y borrar pantalla
function buyItem2 () {
    alert("Order Flask Confirmed!");
    document.getElementById("total2").innerHTML =  "0 items";
    document.getElementById("price2").innerHTML = "$ 0.00 MXN";
}

//-------------------------------------------------------------------------//

//Seleccionar item 3
function selectItem3() {
    
    let total = Number();   
    let price = Number();
    var prom = 0;
         
    if (isNaN(prom)){
           alert("Invalid request! please ty again... or not.... whatever.") 
    }

    else {
        let prom = Number(prompt("How many items?");
        total = total+prom;
        price = price + (100 * prom);
    }
    
    document.getElementById("total3").innerHTML = total + " items";
    document.getElementById("price3").innerHTML = "$" + price + ".00 MXN";
}

//Confirmar item 3 y borrar pantalla
function buyItem3() {
    alert("Order Keychain Confirmed!");
    document.getElementById("total3").innerHTML =  "0 items";
    document.getElementById("price3").innerHTML = "$ 0.00 MXN";
}

//-----------------------------------------------------------------------//

//Condiciones de impresión item 1
document.getElementById("selectit1").onclick = selectItem1;
document.getElementById("buyit1").onclick = buyItem1;

//Condiciones de impresión item 2
document.getElementById("selectit2").onclick = selectItem2;
document.getElementById("buyit2").onclick = buyItem2;

//Condiciones de impresión item 3
document.getElementById("selectit3").onclick = selectItem3;
document.getElementById("buyit3").onclick = buyItem3;

//-----------------------------------------------------------------------//

//*************************************************************************//
//
//*************************************************************************//