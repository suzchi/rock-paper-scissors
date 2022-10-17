// Declarations
let playerSelection;
let rounds;
let randomInteger;
let computerSelection;
let roundResult;
let playerScore = 0;
let computerScore = 0;

// Button event listeners
rock.addEventListener("click", getUserChoice);
paper.addEventListener("click", getUserChoice);
scissors.addEventListener("click", getUserChoice);
resetButton.addEventListener("click", reset);

// Reset button function
function reset() {
    location.reload();
};

// Player selection
function getUserChoice() {
    playerSelection = this.id.toString();
    console.log(playerSelection);
    game();
    return playerSelection;
};

// Computer selection
function getComputerChoice() {
    randomInteger = Math.floor(Math.random() * 3 + 1) // Gets random number (1, 2, or 3)
    if (randomInteger === 1) {
        computerSelection = "rock";
        console.log(computerSelection);
        return computerSelection;
    } else if (randomInteger === 2) {
        computerSelection = "paper";
        console.log(computerSelection);
        return computerSelection;
    } else  if (randomInteger === 3) {
        computerSelection = "scissors";
        console.log(computerSelection);
        return computerSelection;
    } else {
        console.log("Error");
    };
};

// Round result logic, DOM manipulation to show round results and scores on the page
function playRound(playerSelection, computerSelection) { // Win/Lose/Tie logic

    if (playerSelection === computerSelection) { // Tie
        roundResult = "Round: You tied!";
        document.getElementById("results").textContent = roundResult.toString(); // Change round result on page
        
        console.log(roundResult);

        return;
    } else if (playerSelection === "rock" && computerSelection === "scissors") { // Win condition 1
        playerScore = ++playerScore;
        document.getElementById("playerScoreText").textContent = "Player: " + playerScore; // Change score result on page

        roundResult = "Round: You win! Rock beats scissors!"; 
        document.getElementById("results").textContent = roundResult.toString(); // Change round result on page

        winCondition();

        console.log(roundResult);

        return playerScore;
    } else if (playerSelection === "paper" && computerSelection === "rock") { // Win condition 2
        playerScore = ++playerScore;
        document.getElementById("playerScoreText").textContent = "Player: " + playerScore; // Change score result on page

        roundResult = "Round: You win! Paper beats rock!";
        document.getElementById("results").textContent = roundResult.toString(); // Change round result on page

        winCondition();

        console.log(roundResult);

        return playerScore;
    } else if (playerSelection === "scissors" && computerSelection === "paper") { // Win condition 3
        playerScore = ++playerScore;
        document.getElementById("playerScoreText").textContent = "Player: " + playerScore; // Change score result on page

        roundResult = "Round: You win! Scissors beats paper"
        document.getElementById("results").textContent = roundResult.toString(); // Change round result on page

        winCondition();

        console.log(roundResult);

        return playerScore;
    } else {                                           // No other tie or win condition, lose round
        computerScore = ++computerScore;
        computerScoreText = document.getElementById("#computerScoreText");
        computerScoreText = document.createElement("div");
        document.getElementById("computerScoreText").textContent = "Computer: " + computerScore; // Change score result on page

        roundResult = "Round: You lose!"
        document.getElementById("results").textContent = roundResult.toString(); // Change round result on page

        winCondition();

        console.log(roundResult);

        return computerScore;
    };
};

// Win condition function
function winCondition() {
    if (computerScore === 5) {
        document.getElementById("winConditionText").textContent = "Computer Wins the Game!";

        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;
    };
    
    if (playerScore === 5) {
        document.getElementById("winConditionText").textContent = "Player Wins the Game!";

        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;
    };
};

// Game function
function game() {
    getComputerChoice();
    playRound(playerSelection, computerSelection);
};