function getComputerChoice() {
    let validAction = ["rock", "paper", "scissor"];
    let action = validAction[Math.floor(Math.random() * 3)] 
    
    return action;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    // console.log(playerSelection)
    let result = '';
    
    if (playerSelection == "rock") {
        switch (computerSelection) {
            case "rock" :
                result = 'Draw';
                break;
            case "paper" :
                result = 'You Lose';
                break;
            case "scissor" :
                result = 'You Win';
                break;
        }
    } else if (playerSelection == "paper") {
        switch (computerSelection) {
            case "rock" :
                result = 'You Win';
                break;
            case "paper" :
                result = 'Draw';
                break;
            case "scissor" :
                result = 'You Lose';
                break;
        }
    } else if (playerSelection == "scissor") {
        switch (computerSelection) {
            case "rock" :
                result = 'You Lose';
                break;
            case "paper" :
                result = 'You Win';
                break;
            case "scissor" :
                result = 'Draw';
                break;
        }
    }
    console.log('You ' + playerSelection + '/ /' + 'COM ' + computerSelection);
    return result;
}

function game() {
    const playerSelection = '';
    const computerSelection = '';
    for (let i = 0; i < 5; i++) {
         playerSelection = prompt("Input Rock, Paper, or Scissor : ");
         computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}



// console.log(getComputerChoice())
// console.log(playRound(playerSelection, computerSelection));
game();