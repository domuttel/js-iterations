

// Hints for the first problem:

//   1. Define a function that:
//     - is assigned to a variable named `sum`
//     - has one parameter named `options`
//     - returns the calculated sum of all of the values of all of the options passed in

// NOTE: use a `for` loop to make this happen.
//This works
function sum(sumOfPrices) {
  var bucket = 0;
  for (i = 0; i < sumOfPrices.length; i++) {
    bucket += sumOfPrices[i];
  }
  return bucket;
}
// This works
function sumAll(){
  var numbers = document.getElementsByClassName('all-prices')[0].children;
  var bucket = [];
    for(i=0; i < numbers.length; i++){
      bucket.push(parseInt(numbers[i].value));
    }
    writeAnswer(sum(bucket));
}
// This works
function averageAll(){
  var numbers = document.getElementsByClassName('all-prices')[0].children;
  var  bucket = [];
    for(i=0; i < numbers.length; i++){
       bucket.push(parseInt(numbers[i].value));
    }
    writeAnswer(sum(bucket) / numbers.length);
}
//This works
function sumSelected() {
  var numbers = document.getElementsByClassName('all-prices')[0].children;
  var bucket = [];
    for (i = 0; i<numbers.length; i++){
      if (numbers[i].selected === true) {
        bucket.push(parseInt(numbers[i].value));
      }
    }
    writeAnswer(sum(bucket));
}
//This works
function countSelected() {
  var numbers = document.getElementsByClassName('all-prices')[0].children;
  var bucket = 0;
    for (i = 0; i<numbers.length; i++){
      if (numbers[i].selected === true) {
        bucket++;
      }
    }
    writeAnswer(bucket);
}
//
function selectedAve() {
  var numbers = document.getElementsByClassName('all-prices')[0].children;
  var bucket = [];
    for (i = 0; i<numbers.length; i++){
      if (numbers[i].selected === true) {
        bucket.push(parseInt(numbers[i].value));
      }
    }
    writeAnswer(sum(bucket) / numbers.length);
}

//////////////////// NAMES ///////////////////////////
//Function works
function printNames() {
  var names = document.getElementsByClassName('all-names')[0].innerHTML;
  var namesIndividual = names.split( "\n" );
    writeAnswer(namesIndividual);
}
  // var namesIndividual = [];

// function nameAnLength() {
//   var names = document.getElementsByClassName('all-names')[0].innerHTML;
//   var namesIndividual = names.split( "\n" );
//     writeAnswer((namesIndividual) + " - "  (namesIndividual.length));
// }
