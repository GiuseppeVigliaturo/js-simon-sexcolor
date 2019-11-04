// DESCRIZIONE:
//Il software deve chiedere all’utente il suo nome e il sesso con due prompt diversi.
// Sulla pagina html deve apparire “Ciao <nome>“, il colore del nome deve essere azzurro o rosa a seconda del sesso inserito.

var nome = prompt("Ciao iserisci il tuo nome");
var sesso =prompt(" scegli il sesso");

var scelta= document.getElementById("coloresesso");
scelta.innerHTML = "ciao " + nome;

if (sesso === "maschio") {
  scelta.style.color = "blue";
}else if (sesso === "femmina") {
  scelta.style.color = "pink";
}
