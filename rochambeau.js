function Player() {
    this.choice = null;
}

var Rochambeau = {

    // button elements
    rockButton: document.getElementById("rock"),
    paperButton: document.getElementById("paper"),
    scissorsButton: document.getElementById("scissors"),
    lizardButton: document.getElementById("lizard"),
    spockButton: document.getElementById("spock"),

    playButton: document.getElementById("play"),

    player: new Player(),
    computer: new Player(),

    choices: {
        ROCK: 0,
        PAPER: 1,
        SCISSORS: 2,
        LIZARD: 3,
        SPOCK: 4
    },

    score: {
        wins: 0,
        losses: 0,
        ties: 0
    },

    match: {
        wins: 0,
        losses: 0
    },

    results: {
        WIN: 1,
        TIE: 0,
        LOSS: -1
    },

    // player's choice
    storePlayerChoice: function (choice) {
        Rochambeau.player.choice = choice;
        console.log("My choice = " + Rochambeau.player.choice);
        Rochambeau.storeComputerChoice();
    },

    // computer's choice
    storeComputerChoice: function () {
        this.computer.choice = Math.floor(Math.random() * 5);
    },

    // play game
    playGame: function () {
        if (Rochambeau.player.choice == Rochambeau.computer.choice) { // tie
            ++Rochambeau.score.ties;
            Rochambeau.displayGameResult(Rochambeau.score.ties);
        } else if (Rochambeau.player.choice == Rochambeau.choices.ROCK && (Rochambeau.computer.choice == Rochambeau.choices.SCISSORS || Rochambeau.computer.choice == Rochambeau.choices.LIZARD)) {
            ++Rochambeau.score.wins
            Rochambeau.displayGameResult(Rochambeau.score.wins);
        } else if (Rochambeau.player.choice == Rochambeau.choices.PAPER && (Rochambeau.computer.choice == Rochambeau.choices.ROCK || Rochambeau.computer.choice == Rochambeau.choices.SPOCK)) {
            ++Rochambeau.score.wins
            Rochambeau.displayGameResult(Rochambeau.score.wins);
        } else if (Rochambeau.player.choice == Rochambeau.choices.SCISSORS && (Rochambeau.computer.choice == Rochambeau.choices.PAPER || Rochambeau.computer.choice == Rochambeau.choices.LIZARD)) {
            ++Rochambeau.score.wins
            Rochambeau.displayGameResult(Rochambeau.score.wins);
        } else if (Rochambeau.player.choice == Rochambeau.choices.LIZARD && (Rochambeau.computer.choice == Rochambeau.choices.PAPER || Rochambeau.computer.choice == Rochambeau.choices.SPOCK)) {
            ++Rochambeau.score.wins
            Rochambeau.displayGameResult(Rochambeau.score.wins);
        } else if (Rochambeau.player.choice == Rochambeau.choices.SPOCK && (Rochambeau.computer.choice == Rochambeau.choices.ROCK || Rochambeau.computer.choice == Rochambeau.choices.SCISSORS)) {
            ++Rochambeau.score.wins
            Rochambeau.displayGameResult(Rochambeau.score.wins);
        } else {
            ++Rochambeau.score.losses;
            Rochambeau.displayGameResult(Rochambeau.score.losses);
        }
    },

    // result of game
    displayGameResult: function (result) {
        var message = "Your choice was " + Rochambeau.player.choice + " and the computer's choice was " + Rochambeau.computer.choice + ".";
        if (result === Rochambeau.score.wins) {
            // win
            document.getElementById("result").textContent = message + " YOU WIN!";
            document.getElementById("result").className = "alert alert-success";
        } else if (result === Rochambeau.score.losses) {
            // loss
            document.getElementById("result").textContent = message + " YOU LOSE!";
            document.getElementById("result").className = "alert alert-danger";
        } else {
            // tie
            document.getElementById("result").textContent = message + " A tie.";
            document.getElementById("result").className = "alert alert-info";
        }

        Rochambeau.updateScoreBoard();
        Rochambeau.updateMatchScore();
    },

    // displays score
    updateScoreBoard: function () {
        document.getElementById("wins").textContent = Rochambeau.score.wins;
        document.getElementById("losses").textContent = Rochambeau.score.losses;
        document.getElementById("ties").textContent = Rochambeau.score.ties;

        document.getElementById("matchWins").textContent = Rochambeau.match.wins;
        document.getElementById("matchLosses").textContent = Rochambeau.match.losses;
    },

    updateMatchScore: function () {
        if (Rochambeau.score.wins == 2) {
            ++Rochambeau.match.wins;
            Rochambeau.score.wins = 0;
            Rochambeau.score.losses = 0;
            Rochambeau.score.ties = 0;
        } else if (Rochambeau.score.losses == 2) {
            ++Rochambeau.match.losses;
            Rochambeau.score.wins = 0;
            Rochambeau.score.losses = 0;
            Rochambeau.score.ties = 0;
        }
    },
}

// event handlers
Rochambeau.rockButton.addEventListener('click', () => {
    Rochambeau.storePlayerChoice(0);
});
Rochambeau.paperButton.addEventListener('click', () => {
    Rochambeau.storePlayerChoice(1)
});
Rochambeau.scissorsButton.addEventListener('click', () => {
    Rochambeau.storePlayerChoice(2)
});
Rochambeau.lizardButton.addEventListener('click', () => {
    Rochambeau.storePlayerChoice(3);
});
Rochambeau.spockButton.addEventListener('click', () => {
    Rochambeau.storePlayerChoice(4);
});
Rochambeau.playButton.addEventListener('click', () => {
    Rochambeau.storeComputerChoice();
    Rochambeau.playGame();
});
