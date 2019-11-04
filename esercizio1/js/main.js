// DESCRIZIONE:

//  Un alert espone 5 numeri casuali. Da li parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire un prompt alla volta i numeri che ha visto precedentemente. Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati;

//Un alert espone 5 numeri casuali. Da li parte un timer di 30 secondi.

var listanumeri = [];
var numInseriti = [];
var numGenerato;
var punteggio = 0;

while (listanumeri.length < 5) { //finchè il mio array non arriva a 5 tu continua a popolarlo
  numGenerato = numRandom(1,100); //generami numeri casuali da 1 a 100 alla volta

  if (listanumeri.includes(numGenerato) == false) { //se il numero è già presente dimmelo
    listanumeri.push(numGenerato); //pusha il numero nell'array
  }

}

alert(listanumeri);
console.log(listanumeri);

//Dopo 30 secondi l’utente deve inserire un prompt alla volta i numeri che ha visto precedentemente
setTimeout(myFunction, (1000*3));
function myFunction() {
  //chiedo all'utente di inserire i numeri visti prima

  for (var i = 0; i < 5 ; i++) {

    var user = parseInt(prompt("inserisci un numero"));

    var mossa = (listanumeri.includes(user));

    if (mossa == true) {
      punteggio +=1;
    }
  }
  console.log("Il tuo punteggio è: ",punteggio);
  console.log(numInseriti);
}







//funzioni
function numRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
