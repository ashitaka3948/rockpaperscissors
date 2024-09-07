function getComputerChoice() {
  let x = Math.random();
  if (x < 0.33) {
    return "rock";
  } else if (x > 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}
// console.log(getComputerChoice());

function getHumanChoice() {
  let choice = prompt("What's your choice? ");
  return choice;
}
// console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  console.log(humanChoice.toLowerCase());
  if (humanChoice.toLowerCase === computerChoice) {
    console.log("It's a draw! Fucking boring.");
    displayScore();
  } else if (humanChoice.toLowerCase() === "rock" && computerChoice === "paper") {
    computerScore++;
    console.log("You suck! Paper fucks rock.");
    displayScore();
  } else if (humanChoice.toLowerCase() === "rock" && computerChoice === "scissors") {
    humanScore++;
    console.log("You win cuz rock fucks up the scissors.");
    displayScore();
  } else if (humanChoice.toLowerCase() === "paper" && computerChoice === "rock") {
    humanScore++;
    console.log("You win cuz paper fucks rock.");
    displayScore();
  } else if (humanChoice.toLowerCase() === "paper" && computerChoice === "scissors") {
    computerScore++;
    console.log("You suck!  Scissors fuck you your shitty paper!");
    displayScore();
  } else if (humanChoice.toLowerCase() === "scissors" && computerChoice === "paper") {
    humanScore++;
    console.log("You win cuz scissors fuck up the paper.");
    displayScore();
  } else if (humanChoice.toLowerCase() === "scissors" && computerChoice === "rock") {
    computerScore++;
    console.log("You fucking lost cuz rock fucks up your scissors!");
    displayScore();
  } else {
    computerScore++;
    console.log("Da fuck did u enter bitch? You lose this round");
    displayScore();
  }
}

function displayScore() {
  console.log("Current score: Human " + humanScore + "  Computer " + computerScore);
}

function playGame() {

  for (let i = 1; i <= 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  if (humanScore > computerScore) {
    console.log("You win you lucky bastard.");
  } else if (computerScore > humanScore) {
    console.log("You suck shit.  You fucking lost.");
  } else {
    console.log("It's a draw.  So on9.");
  }
}

playGame();