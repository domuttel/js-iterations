

// Hints for the first problem:

  // 1. Find the button with the ID of `sum-all`
  // 2. Add an event listener that:
  //   - finds the select element by name (use getElementsByName)
  //   - passes all of its options to the `sum` function defined in `logic.js`
  //   - takes the value returned by the `sum` function and displays it on the page

/// add an event listener to the button to listen for a click.
/// when the click happenes, call a function that collects the numbers from the dom and returns them.
/// pass that to your logic function
/// write the answer to the dom.

// This works
function writeAnswer(answer){
  document.getElementById("answer").innerHTML = answer;
  return;
}

// This works
document.getElementById('sum-all').addEventListener('click', function(){
    sumAll();
});


// //This works
document.getElementById('average-all').addEventListener('click', function(){
    averageAll();
});


// //This works
document.getElementById('count-selected').addEventListener('click', function(){
  countSelected();
});

// //This works
document.getElementById('sum-selected').addEventListener('click', function(){
  sumSelected();

});

// //This works
document.getElementById('average-selected').addEventListener('click', function(){
  selectedAve();
});

//////////////////// NAMES ///////////////////////////
