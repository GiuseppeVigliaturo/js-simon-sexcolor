// DESCRIZIONE:
//Il software deve chiedere all’utente il suo nome e il sesso con due prompt diversi.
// Sulla pagina html deve apparire “Ciao <nome>“, il colore del nome deve essere azzurro o rosa a seconda del sesso inserito.

var scelta= document.getElementById("coloresesso");
var verificato = false;

while (verificato === false) {
  var nome = prompt("Ciao iserisci il tuo nome");
  var sesso = prompt("scegli il sesso");

  if (sesso === "maschio") {
    scelta.style.color = "blue";
    verificato = true;
  }else if (sesso === "femmina") {
    scelta.style.color = "pink";
    verificato = true;
  }else {
    alert("non hai inserito un valore valido");
  }
}


scelta.innerHTML = "ciao " + nome;
