function getComputerChoice() {
    const validAction = ["rock", "paper", "scissor"];
    const action = validAction[Math.floor(Math.random() * 3)] 
    
    return action;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    let result = 'Draw';
    
    if (playerSelection == "rock") {
        switch (computerSelection) {
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
        }
    }
    console.log('You ' + playerSelection + '/ /' + 'COM ' + computerSelection);
    return result;
}

function game() {
    let playerSelection = '';
    let computerSelection = '';
    // for (let i = 0; i < 5; i++) {
    //      playerSelection = prompt("Input Rock, Paper, or Scissor : ");
    //      computerSelection = getComputerChoice();
    //     console.log(playRound(playerSelection, computerSelection));
    // }
    // buttonPaper.onclick = console.log("PAPER");

    buttonPaper.addEventListener('click', () => {
        console.log("PAPER");
    });
}

const buttonRock = document.querySelector('#rock');
const buttonPaper = document.querySelector('#paper');
const buttonScissor = document.querySelector('#scissor');


// console.log(getComputerChoice())
// console.log(playRound(playerSelection, computerSelection));
game();