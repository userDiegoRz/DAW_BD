//***********************************************************************//
// Terrible implementación de JS para validate.html
//***********************************************************************//

function validatePassword() {
    var pass = prompt("Verify Password please","Overwrite");
    let x = document.getElementById("passwordUser").value;
    
    if (pass == x){
        alert("Success! you were able to re-type correctly your input. Kudos");
    }
    else {
        alert("Nope... Invalid password. Please try again... or don't.");
    }
    
    document.getElementById("idUser").value = "";
    document.getElementById("passwordUser").value = "";
    
    return 0;
}

//-----------------------------------------------------------------------//

//***********************************************************************//
// Terrible implementación de JS para eshop.html
//***********************************************************************//

//Seleccionar item 1

function selectItem1() {
    
    total = 0;   
    price =0;
    var prom = 0;
         
    if (total == 0 && price == 0){
        let prom = Number(prompt("How many items?"));
        total = total+prom;
        price = price + (500 * prom);   
         
    }

    else if (isNaN(prom)) {
        alert("Invalid request! please ty again... or not.... whatever.");
        
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
           alert("Invalid request! please ty again... or not.... whatever.");
    }

    else {
        let prom = Number(prompt("How many items?"));
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
           alert("Invalid request! please ty again... or not.... whatever."); 
    }

    else {
        let prom = Number(prompt("How many items?"));
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

//***********************************************************************//
// Terrible implementación de JS para validate.html
//***********************************************************************//

function setInfo (){
    

    
    let name = document.getElementById("name").value;
    let title1 = document.getElementById("title1").value;
    let title2 = document.getElementById("title2").value;
    let age = document.getElementById("age").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;
    let animal = document.getElementById("animal").value;
    let food = document.getElementById("food").value;
    let date = document.getElementById("date").value;
    
    if (name == 0 || age == 0 || email == 0 || pass == 0 || animal == 0 || food == 0 || date == 0){
        alert("Enter all Fields");
    }
    else {
        if (title1 == 0){
            title2 = "";
        } else {
            title1 = "";
        }
        document.getElementById("outname").innerHTML = name;
        document.getElementById("outanimal").innerHTML = animal;
        document.getElementById("outage").innerHTML = age;
        document.getElementById("outfood").innerHTML = food;
        document.getElementById("outtitle").innerHTML = title1 + title2;
        
        document.getElementById("banner").innerHTML = "Search for changes!";
        document.getElementById("answer").innerHTML = '<br/>' + "Hilarious. Seriously though, now that I have your attention allow me to remind you not to trust unknown websites. Maybe you got here by accident, hopping joyfully arround the web, or maybe you had a grading intention and ended up reading some texts... who am I to judge." + '<br/><br/>' + "But please, if you´re not certain about how will a web aplication use your personal info, dont tell them you are " + title1 + title2 + " " + name + "  contacted at: " + email + " with the password: " + pass + '<br/>' + " [yup, I even got your password, and I'm sort of a dumb app]" + '<br/>' + " accessing Conscience on " + date + "." + '<br/><br/>' + " So... if you ever wonder again in the web, don't give away your info, at least feed some fake data [if you actually do that, the paragraphs will be astonishingly hilarious verily] so you remain safe. Welcome for the friendly reminder. Generate Conscience.";
    }
    
}

//-------------------------------------------------------------------------//

//Condición para introducir informacion en case.html
document.getElementById("getInfo").onclick = setInfo;

//Condiciones de impresión item 1
document.getElementById("selectit1").onclick = selectItem1;
document.getElementById("buyit1").onclick = buyItem1;

//Condiciones de impresión item 2
document.getElementById("selectit2").onclick = selectItem2;
document.getElementById("buyit2").onclick = buyItem2;

//Condiciones de impresión item 3
document.getElementById("selectit3").onclick = selectItem3;
document.getElementById("buyit3").onclick = buyItem3;

//Condiciones de Validación de Password en validate.html
document.getElementById("enterUser").onclick = validatePassword;

//-----------------------------------------------------------------------//

//*************************************************************************//
//
//*************************************************************************//