// select buttons and spans
var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById('p2');
var resetButton = document.getElementById('reset');
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
// [type='number'] here allows us to ignore any other inputs that aren't numbers
var numInput = document.querySelector("input[type='number']");
// this is a way of selecting the p within a span, without needing an id on that span
var winningScoreDisplay = document.querySelector("p span");

// to update the state of the game, starts as false
var gameOver = false;
// set winning score
var winningScore = 5;

var p1Score = 0;
var p2Score = 0;

p1Button.addEventListener("click", function(){
  // allows game to continue as long as gameOver is false
  if(!gameOver){
  // need a variable to keep track of the score, increment it, and update the score
  p1Score++;
  if(p1Score === winningScore){
    p1Display.classList.add("winner");
    // changes gameOver to be true, and doesn't allow score to be incremented via ++
    gameOver = true;
  }
  // updates the span with id of p1Display with the incremented score above
  p1Display.textContent = p1Score;
  }
});

p2Button.addEventListener("click", function(){
  if(!gameOver){
  // need a variable to keep track of the score, increment it, and update the score
  p2Score++;
  if(p2Score === winningScore){
    p2Display.classList.add("winner");
    gameOver = true;
  }
  // updates the span with id of p1Display with the incremented score above
  p2Display.textContent = p2Score;
  }
});

resetButton.addEventListener("click", function(){
  reset();
});

// extracted reset into a function as it is used twice
function reset() {
  // reset the score variables to zero
  p1Score = 0;
  p2Score = 0;
  // also have to 'reset' the scores on display by changing the textContent
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  // remove the green text added via classList
  p1Display.classList.remove("winner");
  p2Display.classList.remove("winner");
  // set gameOver back to false to allow game to play
  gameOver = false;
}

// allows user to change the winning score
// 'change' event listens for any change to the input (e.g. when entered via key)
numInput.addEventListener("change", function(){
  winningScoreDisplay.textContent = this.value;
  // set the winning score as the input, turned back into a number from a string
  winningScore = Number(this.value);
  reset();
});
