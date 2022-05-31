let choices = ["Rock","Paper","Scissors"];


function computerPlay() {

    return choices[Math.floor(Math.random() * choices.length)]

}



function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();

    if ((playerSelection === "rock" && computerSelection === "Paper")|| (playerSelection === "scissors" && computerSelection === "Rock")
    || (playerSelection === "paper" && computerSelection === "Scissors")){
    
        return "You Lose! And You Suck!"

    } else if ((playerSelection === "rock" && computerSelection === "Rock")|| (playerSelection === "scissors" && computerSelection === "Scissors")
    ||(playerSelection === "paper" && computerSelection === "Paper")){
    
        return "Tie! Try again."

    } else if ((playerSelection === "rock" && computerSelection === "Scissors")|| (playerSelection === "scissors" && computerSelection === "Paper")
        ||(playerSelection === "paper" && computerSelection === "Rock")){

        return "You Win, You Crazy Bastard!"}
        
        else ("") 
            return "Give me a real answer!"
}

let playerSelection = "";
const computerSelection = computerPlay();



function game() {

    
    
    for (let i=0; i<5; i++){
        
        playerSelection = prompt("Choose Rock, Paper, or Scissors");
        console.log (playRound(playerSelection, computerSelection));
    }
    
}


console.log(game());