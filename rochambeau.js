var playerChoice;
var computerChoice;

var choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];

// Variable to store the score
// score[0] = wins, score[1] = ties, score[2] = losses
var score = [0, 0, 0];
var matches = [0, 0];

// Stores the player's choice, then call's the function for storing the computer's choice
function storePlayerChoice(choice) {
    playerChoice = choice;
    console.log("My choice = " + choice);
    storeComputerChoice();
}

// Generate computer's random choice
function storeComputerChoice() {
    computerChoice = Math.floor(Math.random() * 5);
    console.log("Computer choice = " + computerChoice);
}

// This is the function for playing the game
function playGame() {
    if (playerChoice == computerChoice) {
        updateScore(1);
        displayGameResult("tie");
    } else if (playerChoice == 0 && (computerChoice == 2 || computerChoice == 4)) {
        updateScore(0);
        displayGameResult("win");
    } else if (playerChoice == 1 && (computerChoice == 0 || computerChoice == 3)) {
        updateScore(0);
        displayGameResult("win");
    } else if (playerChoice == 2 && (computerChoice == 1 || computerChoice == 4)) {
        updateScore(0);
        displayGameResult("win");
    } else if (playerChoice == 3 && (computerChoice == 2 || computerChoice == 4)) {
        updateScore(0);
        displayGameResult("win");
    } else if (playerChoice == 4 && (computerChoice == 3 || computerChoice == 0)) {
        updateScore(0);
        displayGameResult("win");
    } else {
        updateScore(2);
        displayGameResult("lose");

    }



if (score[0] == 2) {
    updateMatch(0);
    score = [0, 0, 0];
} else if (score[2] == 2) {
    updateMatch(1);
    score = [0, 0, 0];
}

}
//Displays the result of the game
function displayGameResult(result) {
    // Define an array of text labels for the choices 0, 1, 2;
    // Create a message for the player
    var message = "Your choice was " + choices[playerChoice] + " and the computer's choice was " + choices[computerChoice] + ".";
    // Add to the base message if it was a win, loss, or tie
    if (result === "win") {
        // Display that it was a win
        document.getElementById("result").textContent = message + " YOU WIN!";
        document.getElementById("result").className = "alert alert-success";
    } else if (result === "lose") {
        // Display that it was a loss
        document.getElementById("result").textContent = message + " YOU LOSE!";
        document.getElementById("result").className = "alert alert-danger";
    } else {
        // Display that it was a tie
        document.getElementById("result").textContent = message + " A tie.";
        document.getElementById("result").className = "alert alert-info";
    }

    updateScoreBoard();
}

// Updates the score
function updateScore(val) {
    ++score[val];
    console.log("The score is now " + score);
}


function updateMatch(a) {
    ++matches[a];
    console.log("The Match score is now " + matches)
}




// Function for displaying the score
function updateScoreBoard() {
    document.getElementById("wins").textContent = score[0];
    document.getElementById("losses").textContent = score[2];
    document.getElementById("ties").textContent = score[1];

    document.getElementById("matchwins").textContent = matches[0];
    document.getElementById("matchlosses").textContent = matches[1];
}


// The button elements
var rockButton = document.getElementById("rock");
var paperButton = document.getElementById("paper");
var scissorsButton = document.getElementById("scissors");
var lizardButton = document.getElementById("lizard");
var spockButton = document.getElementById("spock");
var playButton = document.getElementById("play");

// Add the event handlers
rockButton.addEventListener('click', () => {
    storePlayerChoice(0)
});
paperButton.addEventListener('click', () => {
    storePlayerChoice(1)
});
scissorsButton.addEventListener('click', () => {
    storePlayerChoice(2)
});
lizardButton.addEventListener('click', () => {
    storePlayerChoice(3)
});
spockButton.addEventListener('click', () => {
    storePlayerChoice(4)
});
playButton.addEventListener('click', () => {
    playGame()
});
