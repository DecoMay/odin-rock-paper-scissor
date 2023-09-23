const buttonRock = document.querySelector('#rock');
const buttonPaper = document.querySelector('#paper');
const buttonScissor = document.querySelector('#scissor');
const buttonRestart = document.querySelector('#restartgame')
const playerScoreP = document.querySelector('#playerScoreP');
const comScoreP = document.querySelector('#comScoreP');
const roundWinnerP = document.querySelector('#roundWinnerP');

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

function updateScore() {
    playerScoreP.textContent = `Player Score : ${playerScore}`;
    comScoreP.textContent = `Computer Score : ${comScore}`;
    roundWinnerP.textContent = `Round Winner : ${roundWinner}`;
}

function changeColor() {
    if (roundWinner === 'Player') {
        roundWinnerP.setAttribute('style', 'background: green; color: white');
    } else if (roundWinner === 'Computer') {
        roundWinnerP.setAttribute('style', 'background: red; color: white');
    } else {
        roundWinnerP.setAttribute('style', 'background: orange; color: white');
    }
}

function restartGame() {
    playerScore = 0;
    comScore = 0;
    roundWinner = '';
    updateScore();

}

function gameStatus() {
    if (playerScore === 5 || comScore === 5) {
        alert(`${roundWinner} Wins.Press restart`);
        return true;
    }
}

function playerSelection(playerAction) {
    if (gameStatus()) return;
    const comAction = getComputerChoice();
    playRound(playerAction, comAction);
    updateScore();
    changeColor();
    // console.log(playerAction, comAction, roundWinner);
    // console.log(playerScore , ' ' , comScore);
    if (gameStatus()) return;
}

buttonRock.addEventListener('click', () => playerSelection('rock'));
buttonPaper.addEventListener('click', () => playerSelection('paper'));
buttonScissor.addEventListener('click', () => playerSelection('scissor'));
buttonRestart.addEventListener('click', () => restartGame());


let playerScore = 0;
let comScore = 0;
let roundWinner = '';
