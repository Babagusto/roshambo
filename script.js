let choices = ["Rock","Paper","Scissors"];
let winScore = 0;
let loseScore = 0;
let tieScore = 0;
const winText = "You Win, You Crazy Bastard!";
const loseText = "You Lose! And You Suck!";
const tieText = "Tie! Try again.";
let playerSelection = "";
const rpc = document.querySelector('.rpc');


function computerPlay() {
    return choices[Math.floor(Math.random() * choices.length)]
}

function playRound(playerSelection, computerSelection) {
    if ((playerSelection === "rock" && computerSelection === "Paper")|| (playerSelection === "scissors" && computerSelection === "Rock")
    || (playerSelection === "paper" && computerSelection === "Scissors")){
    
        return loseText;
        loseScore++;

    } else if ((playerSelection === "rock" && computerSelection === "Rock")|| (playerSelection === "scissors" && computerSelection === "Scissors")
    ||(playerSelection === "paper" && computerSelection === "Paper")){
    
        return tieText;
        tieScore++;

    } else if ((playerSelection === "rock" && computerSelection === "Scissors")|| (playerSelection === "scissors" && computerSelection === "Paper")
        ||(playerSelection === "paper" && computerSelection === "Rock")){

        return winText;
        winScore = winScore++;
    }
}

function game() {
    
    for (let i=0; i<5; i++){
        
        playerSelection = prompt("Choose Rock, Paper, or Scissors");
        console.log (playRound(playerSelection, computerSelection));
    }
}

window.addEventListener('click', selection);

function selection (button) {
    playerSelection = button.target.id;
    const computerSelection = computerPlay();
    results.textContent = (playRound(playerSelection, computerSelection));
    win.textContent = winScore;
    lose.textContent = loseScore;
    tie.textContent = tieScore;


    if (playRound(playerSelection, computerSelection) === winText) {
        winScore++;
    }
    else if (playRound(playerSelection, computerSelection) === loseText) {
        loseScore++;
    }
    else if (playRound(playerSelection, computerSelection) === tieText) 
        tieScore++;
    
}




//everytime button is clicked select correct playerSelection
//const onClick = (button) => {
    //playerSelection = button.target.id;
    
    //const resultsContainer = document.querySelector('#resultsContainer');

    //const computerSelection = computerPlay();

    //const results = document.createElement('div');
    
    //results.classList.add('results')

    //results.textContent = (playRound(playerSelection, computerSelection));

    //resultsContainer.appendChild(results);


    //const scoreContainer = document.querySelector('#scoreContainer');

    //const win = document.getElementById('.win');
    
    //win.textContent = 0;
    
    //scoreContainer.appendChild(win);
    
    //return score();



//count

//window.addEventListener('click', onClick);

//Win/Lose/Tie Scorekeeping










