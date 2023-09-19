function getComputerChoice() {
    let validAction = ["Rock", "Paper", "Scissor"];
    let action = validAction[Math.floor(Math.random(0) * 3)] 
    
    return action;
}

console.log(getComputerChoice())