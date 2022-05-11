function computerPlay() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    let choice = choices[Math.floor(Math.random() * choices.length)].toLowerCase();
    console.log(`The computer picked ${choice}`)
    return choice;

}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'scissors' && computerSelection == 'paper') {
        console.log("You win! Scissors beats paper!");
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        console.log("You win! Paper beats rock!");
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        console.log("You win! Rock beats scissor!");
    }
    else if (playerSelection == 'rock' && computerSelection == 'paper') {
        console.log("You lose! Paper beats rock!");
    } 
    else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        console.log("You lose! Scissors beats paper!");
    } 
    else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        console.log("You lose! Rock beats scissor!");
    } 
    else if (playerSelection == computerSelection) {
        console.log("It's a tie!");
    }
}

const selection = document.querySelectorAll('button');

selection.forEach((button) => {
    button.addEventListener('click', function() {
        playRound(button.id, computerPlay());
    });
});