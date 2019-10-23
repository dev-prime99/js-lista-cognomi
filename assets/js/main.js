
var cognomi = ["", "rossi", "verdi", "gialli", "bianco" ];

//BONUS
// var cognomi = ["", "Rossi", "Verdi", "Gialli", "Bianco" ];

console.log(cognomi);

var utente = (prompt("Inserisci il tuo cognome")).toLowerCase();

var comp = utente;

//BONUS
//var comp = utente.toUpperCase().charAt(0) + utente.slice(1);

var inserimento = cognomi.push(comp);

console.log(utente);

console.log(cognomi);

var i = 1;

while (i < cognomi.length) {
  cognomi.sort();

  document.getElementById('list').innerHTML += "<li>" + cognomi[i] + "</li>";

  console.log(cognomi.indexOf(comp));
  document.getElementById('risultato').innerHTML = "Il tuo cognome è alla posizione numero: " + cognomi.indexOf(comp);

  i++;
}
