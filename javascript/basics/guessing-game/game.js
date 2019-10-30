// create secretNumber
var secretNumber = 4;

// ask user for guess, turning the string into a number using (Number(var))
var guess = Number(prompt("Guess a number:"));

// check if guess is right
if (guess === secretNumber) {
  alert("You got it right!");
}
// otherwise, check if higher
else if (guess > secretNumber) {
  alert("Too high! Guess again!");
}
// otherwise, say it's lower
else {
  alert("Too low! Guess again!");
}
