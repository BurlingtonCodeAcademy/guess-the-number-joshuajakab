let yourAmount = document.getElementById('your-amount')

//----------------------------Button Variables--------------------------//

let submitButton = document.getElementById('submit')


//----------------------------Buuton Event Listeners---------------------//

submitButton.addEventListener('click', submitAmount)

//--------------------------------Arrays---------------------------------//

let compGuesses = []
let userGuesses = []

//------------------------------Function Junction------------------------//

let min = 1
let max = 100
let yourNumber;


//--------------------------------Computer Guess---------------------------//

function randomInteger(min, max) {
    let range = max - min + 1
    return min + Math.floor(Math.random() * range)
}

//-------------------------------------Submit User Number------------------------------//

function submitAmount(event) {
    if (event.target === submitButton) {
        submitButton.disabled = true;
        yourNumber = document.getElementById("player-number-submit").value;
        currentGuess = randomInteger(min, max)
        document.getElementById('current-guess').innerHTML = currentGuess;
        parseInput()
        function parseInput() {
            if (yourNumber >= 1 && yourNumber <= 100) {
                compGuesses.push(currentGuess)
                console.log(compGuesses)
                yourAmount.innerHTML = yourNumber;
                document.getElementById('question').innerText = "Does the Current Guess match Your Amount?"
                document.getElementById("answer-container").innerHTML = "<button id='no-lower'>No my amount is lower</button><button id='no-higher'>No my amount is higher</button>"
                let noLower = document.getElementById('no-lower')
                let noHigher = document.getElementById('no-higher')
                noLower.addEventListener('click', answerNo)
                noHigher.addEventListener('click', answerNo)
                document.getElementById('comp-score').innerHTML = `Computer's Score:  ${compGuesses.length}`
                document.getElementById('user-score').innerHTML = `User's Score:  ${userGuesses.length}`
                endFirstGame()
            }
            else {
                alert('Please enter a valid number.');
                submitButton.disabled = false;
            }
        }
    }
}

//-------------------------------------------Click the 'No' Buttons---------------------//

function answerNo(event) {

    let noLower = document.getElementById('no-lower')
    let noHigher = document.getElementById('no-higher')
    noLower.addEventListener('click', answerNo)
    noHigher.addEventListener('click', answerNo)
    let newNumber = parseInt(document.getElementById('current-guess').innerText)

    function findMin() {
        if (newNumber !== min) {
            min = (newNumber + 1);
        }
    }
    function findMax() {
        if (newNumber !== max) {
            max = (newNumber - 1);
        }
    }
    if (event.target === noLower) {
        findMax()
        let newGuess = randomInteger(min, max)


        document.getElementById('current-guess').innerHTML = newGuess
        compGuesses.push(newGuess)
        compScore = compGuesses.length
        endFirstGame()
    }

    else if (event.target === noHigher) {
        findMin()
        let newGuess = randomInteger(min, max)


        document.getElementById('current-guess').innerHTML = newGuess
        compGuesses.push(newGuess)
        compScore = compGuesses.length
        endFirstGame()
    }
}

//----------------------------------CHeck if Computer is Right--------------//

function endFirstGame() {
    document.getElementById('comp-score').innerHTML = `Computer's Score:  ${compGuesses.length}`
    currentGuess = document.getElementById('current-guess').innerText;
    if (currentGuess === yourNumber) {
        startSecondGame()
    }
}

//---------------------------------Start Second Part of Game-------------------//

let compNum = randomInteger(1, 100)

function startSecondGame() {

    yourAmount.style.backgroundImage = `url('/Images/CompNumber.svg')`
    yourAmount.innerHTML = '';
    document.getElementById('current-guess').innerText = '';
    document.getElementById('button-container').innerHTML = `<button id='submit-guess' type='submit'>Submit</button>`
    document.getElementById('instructions-one').innerText = `That's your number! Now the computer will pick a number between 1-100 and you will guess`
    document.getElementById('question').innerText = ""
    document.getElementById("answer-container").innerHTML = ""
    let submitGuess = document.getElementById('submit-guess')
    submitGuess.addEventListener('click', submitGuessFunction)

    function submitGuessFunction(event) {
        if (event.target === submitGuess) {
            userGuess = document.getElementById('player-number-submit').value;
            parseGuess()
            document.getElementById('user-score').innerHTML = `User's Score:  ${userGuesses.length}`
            function parseGuess() {
                if (userGuess >= 1 && userGuess <= 100) {
                    document.getElementById('current-guess').innerHTML = userGuess
                    endGame()
                }
            }
        }
    }

//---------------------------------See Who Won!-----------------------------------------//

    function endGame() {

        userScore = userGuesses.length

        if (compNum == userGuess) {

            userGuesses.push(userGuess)
            if (userScore < compScore) {
                document.getElementById('question').innerText = 'You Win!'
            }
            else if (userScore > compScore) {
                document.getElementById('question').innerText = 'You Lose! The computer guessed it in less tries.'
            }
            else {
                document.getElementById('question').innerText = `It's a draw`
            }
        }
        else if (userGuess < compNum) {
            document.getElementById('question').innerText = `No the computer's guess is higher`
            userGuesses.push(userGuess)
        }
        else if (userGuess > compNum) {
            document.getElementById('question').innerText = `No the computer's guess is lower`
            userGuesses.push(userGuess)
        }
    }
}

