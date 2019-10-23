
var cognomi = ["", "rossi", "verdi", "gialli", "bianco" ];

console.log(cognomi);

var utente = cognomi.push(prompt("Inserisci il tuo cognome"));

console.log(cognomi);

var i = 1;


while (i < cognomi.length) {
  cognomi.sort();
  // Prima lettera maiuscola
  cognomi[i] = cognomi[i].toLowerCase()
      .split(' ')
      .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
      .join(' ');

  document.getElementById('list').innerHTML += "<li>" + cognomi[i] + "</li>";
  i++;
}
