//all them definitions

const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

let guess = null



//function junction

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

function randomInteger(min, max) {
let range = max - min + 1
return min + Math.floor(Math.random() * range) 
  console.log(randomInteger(1, 100))
}


start();

async function start() {
  console.log("Let's play a game where you (human) make up a number and I (computer) try to guess it.")
  let secretNumber = await ask("What is your secret number?\nI won't peek, I promise...\n");
  console.log('You entered: ' + secretNumber);
  // Now try and complete the program.
  
  guess = randomInteger(1, 100)

  let answer = await ask("Is it " + guess + "? (yes or no)")

  while (answer === "yes") {
    console.log("Congratulations!")
    process.exit()
  }

  while (answer === "no") {
    let newAnswer = await ask("Is it higher or lower?")

      if (newAnswer === "higher") {
        
        let newHigherGuess = randomInteger(guess, 100)
        let newAnswer = await ask("Is it " + newHigherGuess + "?")
      } 

      else if (newAnswer === "lower") {
        let newLowerGuess = randomInteger(1, guess)
        let newAnswer = await ask("Is it" + newLowerGuess + "?")
      }
    }
  process.exit();
}
