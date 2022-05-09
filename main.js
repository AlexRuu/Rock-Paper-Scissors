function computerPlay() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

