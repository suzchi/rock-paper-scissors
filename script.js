let playerSelection = window.prompt("Choose your weapon:"); // Prompts user to choose between "rock", "paper", and "scissors"
playerSelection = playerSelection.toLowerCase(); { // Changes user input to all lowercase
    if (playerSelection === "rock") {
        playerSelection = 0;
    } else if (playerSelection === "paper") {
        playerSelection = 1;
    } else if (playerSelection === "scissors") {
        playerSelection = 2;
    }
}
console.log(playerSelection, "player");



let randomInteger = Math.floor(Math.random() * 3) // Get 0, 1, 2

let compChoice;

// vv Takes randomInteger and turns it into computer's choice vv
function getComputerChoice() { 
    if (randomInteger === 0) {
        compChoice = 0
        console.log(compChoice, "computer");
        return compChoice;
    } else if (randomInteger === 1) {
        compChoice = 1
        console.log(compChoice, "computer");
        return compChoice;
    } else if (randomInteger === 2) {
        compChoice = 2
        console.log(compChoice, "computer");
        return compChoice;
    } else {
        compChoice = null
        console.log(compChoice, "computer");
        return compChoice;
    }
}

const computerSelection = getComputerChoice();
