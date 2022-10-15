rock.addEventListener("click", getUserChoice);
paper.addEventListener("click", getUserChoice);
scissors.addEventListener("click", getUserChoice);

let results; // Results DOM variable
let newResults;

let cScore; // Computer score DOM variable
let newCScore;

let pScore; // Player score DOM variable
let newPScore;

// ************************************************************
// PLAYER SELECTION
// ************************************************************

let playerSelection;
let rounds;
function getUserChoice() {
    playerSelection = this.id.toString(); // Changes button content to a string and assigns it to playerSelection
    rounds++;
    console.log(playerSelection);
    console.log(getComputerChoice());
    console.log(playRound(playerSelection, computerSelection));
    return playerSelection;
}

// ************************************************************
// COMPUTER SELECTION
// ************************************************************

let randomInteger;
let computerSelection;
function getComputerChoice() {
    randomInteger = Math.floor(Math.random() * 3 + 1) // Gets random number (1, 2, or 3)
    if (randomInteger === 1) {
        computerSelection = "rock";
        return computerSelection;
    } else if (randomInteger === 2) {
        computerSelection = "paper";
        return computerSelection;
    } else  if (randomInteger === 3) {
        computerSelection = "scissors";
        return computerSelection;
    } else {
        console.log("Error");
    }
}

// ************************************************************
// ROUND RESULT LOGIC
// ************************************************************

let roundResult;
let playerScore = 0;
let computerScore = 0;
function playRound(playerSelection, computerSelection) { // Win/Lose/Tie logic

    if (playerSelection == computerSelection) {
        roundResult = "Round: You tied!";

        results = document.querySelector("#results");
        newResults = document.createElement("div");
        newResults.innerHTML = "<p>" + roundResult + "</p>"
        results.appendChild(newResults);

        return roundResult;
    } else if (playerSelection == "rock" && computerSelection === "scissors") {
        roundResult = "Round: You win! Rock beats scissors!";
        playerScore = ++playerScore;

        results = document.querySelector("#results"); // Display round result
        newResults = document.createElement("div");
        newResults.innerHTML = "<p>" + roundResult + "</p>"
        results.appendChild(newResults);

        return roundResult;
    } else if (playerSelection == "paper" && computerSelection === "rock") {
        roundResult = "Round: You win! Paper beats rock!";
        playerScore = ++playerScore;

        results = document.querySelector("#results");
        newResults = document.createElement("div");
        newResults.innerHTML = "<p>" + roundResult + "</p>"
        results.appendChild(newResults);

        return roundResult;
    } else if (playerSelection == "scissors" && computerSelection === "paper") {
        roundResult = "Round: You win! Scissors beats paper"
        playerScore = ++playerScore;

        results = document.querySelector("#results");
        newResults = document.createElement("div");
        newResults.innerHTML = "<p>" + roundResult + "</p>"
        results.appendChild(newResults);

        return roundResult;
    } else { // No other tie or win condition, lose round
        roundResult = "Round: You lose!"
        computerScore = ++computerScore;

        results = document.querySelector("#results"); // Display Round Results
        newResults = document.createElement("div");
        newResults.innerHTML = "<p>" + roundResult + "</p>"
        results.appendChild(newResults);

        return roundResult;
    } 
}

// ************************************************************
// SCORE
// ************************************************************

pScore = document.querySelector("player-score");
newPScore = document.createElement("div");
newPScore.innerHTML = "<p>" + playerScore + "<p>";

cScore = document.querySelector("computer-score");
newCScore = document.createElement("div");
newCScore.innerHTML = "<p>" + computerScore + "<p>"

pScore.parentNode.replaceChild(newPScore, pScore);

cScore.parentNode.replaceChild(newCScore, cScore);

// ************************************************************
// WIN CONDITION
// ************************************************************

    if (computerScore === 5) {
        console.log("Computer wins the game!");
    }
    
    if (playerScore === 5) {
        console.log("Player wins the game!");
    }