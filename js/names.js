function writeAnswer(answer){
  document.getElementById("answer").innerHTML = answer;
  return;
}

document.getElementById('all-names').addEventListener('click', function() {
  printNames();
});


document.getElementById('first-names').addEventListener('click', function() {
  // debugger;
  firstNames();
});

document.getElementById('last-names').addEventListener('click', function() {
  // debugger;
  lastNames();
});

document.getElementById('names-with-lengths').addEventListener('click', function() {
  withLength();
});

function printNames() {
  var names = document.getElementsByClassName('all-names')[0].innerHTML;
  var namesIndividual = names.split( "\n" );
    writeAnswer(namesIndividual.join("<br>"));
}


function firstNames() {
  var firstNames = [];
  var names = document.getElementsByClassName('all-names')[0].innerHTML.split( "\n" );
  for (i = 0; i < names.length; i++){
    firstNames.push(names[i].split(" ")[0]);
  }
writeAnswer(firstNames.join("<br>"));
}

function lastNames() {
  var lastNames = [];
  var names = document.getElementsByClassName('all-names')[0].innerHTML.split( "\n" );
  for (i = 0; i < names.length; i++) {
    lastNames.push(names[i].split(" ")[1]);
  }
  writeAnswer(lastNames.join("<br>"));
}

var names = document.getElementsByClassName('all-names')[0].innerHTML.split( "\n");

function withLength () {
  var nameLength = [];
  var names = document.getElementsByClassName('all-names')[0].innerHTML.split( "\n");
  for (i = 0; i < names.length; i++) {
    nameLength.push(names[i], names[i].length);
  }
  writeAnswer(nameLength.join("<br>"));
}

