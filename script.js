let choices = ["Rock","Paper","Scissors"];


function computerPlay() {

    return choices[Math.floor(Math.random() * choices.length)]

}

const winText = "You Win, You Crazy Bastard!";
const loseText = "You Lose! And You Suck!";
const tieText = "Tie! Try again.";

function playRound(playerSelection, computerSelection) {

    

    if ((playerSelection === "rock" && computerSelection === "Paper")|| (playerSelection === "scissors" && computerSelection === "Rock")
    || (playerSelection === "paper" && computerSelection === "Scissors")){
    
        return loseText;

    } else if ((playerSelection === "rock" && computerSelection === "Rock")|| (playerSelection === "scissors" && computerSelection === "Scissors")
    ||(playerSelection === "paper" && computerSelection === "Paper")){
    
        return tieText;

    } else if ((playerSelection === "rock" && computerSelection === "Scissors")|| (playerSelection === "scissors" && computerSelection === "Paper")
        ||(playerSelection === "paper" && computerSelection === "Rock")){

        return winText;
    }
        
        else ("") 
            return "Give me a real answer!"
}

let playerSelection = "";




function game() {

    
    
    for (let i=0; i<5; i++){
        
        playerSelection = prompt("Choose Rock, Paper, or Scissors");
        console.log (playRound(playerSelection, computerSelection));
    }
    
}

let winScore = 0;
let loseScore = 0;
let tieScore = 0;

function score () {

const win = document.querySelector('#win');
const lose = document.querySelector('#lose');
const tie = document.querySelector('#tie');

if (playRound () == winText) {

winScore = winScore + 1;
win.textContent = winScore;

scoreContainer.appendChild(win);
}

else if (playRound () == loseText) {
loseScore = loseScore + 1;
lose.textContent = loseScore;
scoreContainer.appendChild(lose);
}

else (playRound () == tieText) 
    tieScore = tieScore + 1;

    tie.textContent = tieScore;
    scoreContainer.appendChild(tie);

}

//everytime button is clicked select correct playerSelection
const onClick = (event) => {
    playerSelection = event.target.id;
    
    const resultsContainer = document.querySelector('#resultsContainer');

    const computerSelection = computerPlay();

    const results = document.createElement('div');
    
    results.classList.add('results')

    results.textContent = (playRound(playerSelection, computerSelection));

    resultsContainer.appendChild(results);
  
    
    return score();

    
}

//count

window.addEventListener('click', onClick);


