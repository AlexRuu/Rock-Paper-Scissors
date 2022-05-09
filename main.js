function computerPlay() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    let choice = choices[Math.floor(Math.random() * choices.length)].toLowerCase();
    return choice;
}

let playerChoice = prompt("Rock, Paper, or Scissors?").toLowerCase()

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
    for (i = 1; i < 5; i++) {
        let outcome = playRound(playerChoice, computerPlay());
        return outcome;
    }
}

