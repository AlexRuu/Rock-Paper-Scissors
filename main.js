function computerPlay() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    let choice = choices[Math.floor(Math.random() * choices.length)].toLowerCase();
    return choice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return "You win! Scissors beats paper!";
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return "You win! Paper beats rock!";
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return "You win! Rock beats scissor!";
    }
    else if (playerSelection == 'rock' && computerSelection == 'paper') {
        return "You lose! Paper beats rock!";
    } 
    else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return "You lose! Scissors beats paper!";
    } 
    else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return "You lose! Rock beats scissor!";
    } 
    else if (playerSelection == computerSelection) {
        return "It's a tie!"
    }
}

function game() {
    let j = 0;
    let l = 0;
    for (i = 0; i < 5; i++) {
        let playerChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();
        let outcome = playRound(playerChoice, computerPlay());
        if (outcome.includes("win")) {
            j++;
        }
        else if (outcome.includes("lose")) {
            l++;
        }
        console.log(outcome)
    }
    if (j > l) {
        return "You're the winner!";
    }
    else if (j < l) {
        return "You're the loser!";
    }
    else {
        return "No winners..."
    }
}

console.log(game())
