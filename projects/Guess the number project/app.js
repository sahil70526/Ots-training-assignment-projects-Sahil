let previousGuesses = [];
let randomNumber = Math.ceil(Math.random() * 100 + 1);
console.log(randomNumber);
let numberOfAttempts = 10;
const lowOrHi = document.querySelector(".lowOrHi");

// Main Function
function checkGuess() {
  let guess = parseInt(document.getElementById("guessField").value);

  if (numberOfAttempts >= 1) {
    if (guess === randomNumber) {
      alert("You guessed it correctly!");
      previousGuesses.splice(0,previousGuesses.length);
      numberOfAttempts=10
    } else if (guess > randomNumber) {
      numberOfAttempts--;
      alert("You guessed it more!");
      previousGuesses.push(guess);
    } else {
      numberOfAttempts--;
      alert("You guessed it less!");
      previousGuesses.push(guess);
    }
  } else {
    alert("Sorry your attempts are over!");
    previousGuesses.splice(0,previousGuesses.length);
  }
  const guessSlot = (document.querySelector(".guesses").innerHTML = (previousGuesses));
  const guessesRemaining = (document.querySelector(".lastResult").innerHTML = (numberOfAttempts));
  document.getElementById("guessField").value=' ';
}
