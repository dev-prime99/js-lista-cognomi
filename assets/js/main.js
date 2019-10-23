
var cognomi = ["", "rossi", "verdi", "gialli", "bianco" ];

console.log(cognomi);

var utente = (prompt("Inserisci il tuo cognome")).toLowerCase();

var inserimento = cognomi.push(utente);

console.log(utente);

console.log(cognomi);

var i = 1;

while (i < cognomi.length) {
  cognomi.sort();

  document.getElementById('list').innerHTML += "<li>" + cognomi[i] + "</li>";

  console.log(cognomi.indexOf(utente));

  i++;
}
