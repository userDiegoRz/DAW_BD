function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

function alertActivity() {
   // setInterval(function(){ alert("Remember to try the activity!"); }, 30000);
}

function setStyleText(){
    
    document.getElementById("activity").style.color = "#0cc0dd";

}

function removeStyleText(){
    document.getElementById("activity").style.color = "#000000";
}

function showElement (){
    document.getElementById("info").style.visibility = 'visible';
}

function hideElement (){
    document.getElementById("info").style.visibility = 'hidden';
}

document.getElementById("index").onload = alertActivity;
document.getElementById("actname").onmouseover = setStyleText;
document.getElementById("actname").onmouseout = removeStyleText;
document.getElementById("actinstructions").onmouseover = showElement;
document.getElementById("actinstructions").onmouseout = hideElement;