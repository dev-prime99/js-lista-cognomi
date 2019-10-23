
var cognomi = ["", "rossi", "verdi", "gialli", "bianco" ];

console.log(cognomi);

var utente = cognomi.push(prompt("Inserisci il tuo cognome"));

console.log(cognomi);

var i = 1;

// onKeyUp="this.value=this.value.substr(0,1).toUpperCase()+th is.value.substr(1,this.value.length).toLowerCase();"

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
