let playerSelection;
function getUserChoice() { // Gets user choice and then converts it into 1, 2, or 3

    playerSelection = window.prompt("Rock, Paper, or Scissors?") // Prompts user for input
    playerSelection = playerSelection.toLowerCase(); // Changes input to lowercase

    if (playerSelection === "rock") { 
        playerSelection = 1;
        return playerSelection;
    } else if (playerSelection === "paper") {
        playerSelection = 2;
        return playerSelection;
    } else if (playerSelection === "scissors") {
        playerSelection = 3;
        return playerSelection;
    } else {
        playerSelection = null;
        console.log("Please enter a valid move!")
        return playerSelection;
    }
}




let randomInteger;
let computerSelection;
function getComputerChoice() {

    randomInteger = Math.floor(Math.random() * 3 + 1) // Gets random number (1, 2, or 3)
    computerSelection = randomInteger
    console.log(computerSelection, "computer selection (1 = rock, 2 = paper, 3 = scissors")
    return computerSelection;
}

let roundResult;
let wins;
let losses;
function playRound() { // Win/Lose/Tie logic

    // 1 = rock, 2 = paper, 3 = scissors, Win/Lose/Tie logic
    if (playerSelection === computerSelection) { // Tie
        roundResult = "Round: You tied!";
        return roundResult;
    } else if (playerSelection === 1 && computerSelection === 3) { // Rock beats scissors
        roundResult = "Round: You win! Rock beats scissors!";
        wins++;
        return roundResult, wins;
    } else if (playerSelection === 2 && computerSelection === 1) { // Paper beats rock
        roundResult = "Round: You win! Paper beats rock!";
        wins++;
        return roundResult, wins;
    } else if (playerSelection === 3 && computerSelection === 2) { // Scissors beats paper
        roundResult = "Round: You win! Scissors beats paper"
        wins++;
        return roundResult, wins;
    } else { // No other tie or win condition, lose round
        roundResult = "Round: You lose!"
        losses++;
        return roundResult, losses;
    } 
}

let score;

function game() { // Play game function

    for (i = 0; i < 5; ++i) { // Loop until 5 rounds is reached
        getUserChoice();
        console.log(playerSelection, "player selection (1 = rock, 2 = paper, 3 = scissors)");
        getComputerChoice();
        playRound();
        console.log(roundResult)
    }
}

function winCondition() {

    if (wins > losses) { // Win condition
        console.log("Player wins the game! Well done!");
    } else if (losses > wins) { // Lose condition
        console.log("Computer wins the game! Try again!");
    } else if (wins === losses) {
        console.log("Player and Computer tied! Try again!"); // Tie condition
    } else {
        console.log("Error")
    }
}


console.log(game(), winCondition()); // Call game and winCondition