const buttonRock = document.querySelector('#rock');
const buttonPaper = document.querySelector('#paper');
const buttonScissor = document.querySelector('#scissor');
const buttonRestart = document.querySelector('#restartgame')

function getComputerChoice() {
    const validAction = ["rock", "paper", "scissor"];
    const action = validAction[Math.floor(Math.random() * 3)]; 
    return action;
}

function playRound(playerAction, comAction) {
    if ((playerAction === 'rock' && comAction === 'scissor')
        || (playerAction === 'paper' && comAction === 'rock')
        || (playerAction === 'scissor' && comAction === 'paper')) {
            playerScore++;
            roundWinner = 'Player';
        }
    else if ((playerAction === 'rock' && comAction === 'paper')
        || (playerAction === 'paper' && comAction === 'scissor')
        || (playerAction === 'scissor' && comAction === 'rock')) {
            comScore++
            roundWinner = 'Computer';
        }
    else {
        roundWinner = 'Draw';
    }
}

function restartGame() {
    playerScore = 0;
    comScore = 0;
}

function playerSelection(playerAction) {
    if (playerScore === 5 || comScore === 5) {
        alert("Press restart");
        return;
    }
    const comAction = getComputerChoice();
    playRound(playerAction, comAction);
    console.log(playerAction, comAction, roundWinner);
    console.log(playerScore , ' ' , comScore);

}

buttonRock.addEventListener('click', () => playerSelection('rock'));
buttonPaper.addEventListener('click', () => playerSelection('paper'));
buttonScissor.addEventListener('click', () => playerSelection('scissor'));
buttonRestart.addEventListener('click', () => restartGame());


let playerScore = 0;
let comScore = 0;
let roundWinner = '';
