// Global selection variables
const container = document.querySelector('.container');
const result = document.querySelector('.results');
const comp = document.querySelector('.computer');

// Computer's randomized selection
function computerPlay() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    let choice = choices[Math.floor(Math.random() * choices.length)].toLowerCase();
    comp.innerHTML = `The computer picked ${choice}`;
    return choice;
};

// Displays score on top of buttons
const button = document.querySelector('button');

let score = document.createElement('div');
let player = 0;
let compScore = 0;

score.classList.add('score');
container.insertBefore(score, button);
score.textContent = `Player: ${player} Computer: ${compScore}`;

// Play round and spits out a winner
function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'scissors' && computerSelection == 'paper') {
        player++;
        result.innerHTML = "You win! Scissors beats paper!";
        return player;
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        player++;
        result.innerHTML = "You win! Paper beats rock!";
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        player++;
        result.innerHTML = "You win! Rock beats scissor!";
    }
    else if (playerSelection == 'rock' && computerSelection == 'paper') {
        compScore++;
        result.innerHTML = "You lose! Paper beats rock!";
    } 
    else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        compScore++;
        result.innerHTML = "You lose! Scissors beats paper!";
    } 
    else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        compScore++;
        result.innerHTML = "You lose! Rock beats scissor!";
    } 
    else if (playerSelection == computerSelection) {
        result.innerHTML = "It's a tie!";
    }
}


// Plays round when button is clicked and checks for a winner 
const selection = document.querySelectorAll('button');
selection.forEach((button) => {
    button.addEventListener('click', function() {
        playRound(button.id, computerPlay());
        score.textContent = `Player: ${player} Computer: ${compScore}`;
        if (player === 5) {
            alert('WINNER!')
        }
        else if (compScore === 5) {
            alert('GAME OVER!')
        };
    });
});
