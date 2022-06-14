let choices = ["Rock","Paper","Scissors"];
let winScore = 0;
let loseScore = 0;
let tieScore = 0;
const winText = "You Win, You Crazy Bastard!";
const loseText = "You Lose! And You Suck!";
const tieText = "Tie! Try again.";
let playerSelection = "";


function computerPlay() {
    return choices[Math.floor(Math.random() * choices.length)]
}

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

        
}



function game() {
    
    for (let i=0; i<5; i++){
       
        playerSelection = prompt("Choose Rock, Paper, or Scissors");
        console.log (playRound(playerSelection, computerSelection));
       
    }
}

window.addEventListener('click', selection);

//Player selection and scoring

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
    else if (playRound(playerSelection, computerSelection) === tieText) {
        tieScore++;
    }
    gameOver()
}

function gameOver () {
    if (winScore > 5) {
        alert("Hell Yeah, You Win!")
        winScore = 0;
        loseScore = 0;
        tieScore = 0;
    }

    else if (loseScore > 5) {
        alert("Damn, The Computer Won")
        winScore = 0;
        loseScore = 0;
        tieScore = 0;
    }
}








