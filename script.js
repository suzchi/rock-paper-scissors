let playerSelection = window.prompt("Choose your weapon:"); // Prompts user to choose between "rock", "paper", and "scissors"
playerSelection = playerSelection.toLowerCase(); { // Changes user input to all lowercase
    if (playerSelection === "rock") {
        playerSelection = 1;
    } else if (playerSelection === "paper") {
        playerSelection = 2;
    } else if (playerSelection === "scissors") {
        playerSelection = 3;
    } else if (playerSelection != "rock", "paper", "scissors") {
        playerSelection = null;
    }
}
console.log(playerSelection, "player selection (1 = rock, 2 = paper, 3 = scissors");


let randomInteger = Math.floor(Math.random() * 3 + 1) // Get 0, 1, 2
// vv Takes randomInteger and turns it into computer's choice vv
let computerSelection = randomInteger;
console.log(computerSelection, "computer selection (1 = rock, 2 = paper, 3 = scissors");

let roundResult;
// 1 = rock, 2 = paper, 3 = scissors
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        roundResult = "You Tied!";
        return roundResult;
    } else if (playerSelection === 1 && computerSelection === 3) {
        roundResult = "You won! Rock beats scissors!";
        return roundResult;
    } else if (playerSelection === 2 && computerSelection === 1) {
        roundResult = "You won! Paper beats rock!";
        return roundResult;
    } else if (playerSelection === 3 && computerSelection === 2) {
        roundResult = "You won! Scissors beats paper"
        return roundResult;
    } else {
        roundResult = "You lose!"
        return roundResult;
    }
}
console.log(roundResult);
console.log(playRound(playerSelection, computerSelection)); // Calls playRound