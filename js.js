function funkcja() {
var okno = prompt("Witaj, proszę podaj swoje imię","Jakub")
if (okno !== null) {
alert("Witaj \n" +okno+ "");
document.getElementById("funkcyjka").innerHTML="Witaj \n" +okno+ "";
}  
if (okno == null) {
alert("Błąd!"); 
}
}
