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

const buttons = document.querySelectorAll("button");
const score = document.querySelector("#results");
const comments = document.querySelector("#comments");
const winner = document.querySelector("#winner");

let humanScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const humanSelection = button.id;
    console.log(humanSelection);
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  });
});

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    comments.textContent = "It's a draw! Fucking boring.";
    displayScore();
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore++;
    comments.textContent = "You suck! Paper fucks rock.";
    displayScore();
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
    comments.textContent = "You win cuz rock fucks up the scissors.";
    displayScore();
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    comments.textContent = "You win cuz paper fucks rock.";
    displayScore();
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore++;
    comments.textContent = "You suck!  Scissors fuck you your shitty paper!";
    displayScore();
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    comments.textContent = "You win cuz scissors fuck up the paper.";
    displayScore();
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore++;
    comments.textContent = "You fucking lost cuz rock fucks up your scissors!";
    displayScore();
  } else {
    computerScore++;
    comments.textContent = "Da fuck did u enter bitch? You lose this round";
    displayScore();
  }
}

function displayScore() {
  score.textContent = `Current score: Human ${humanScore}  Computer ${computerScore}`;
  if (humanScore === 5) {
    winner.textContent = "You won.  You are da shit!";
  } else if (computerScore === 5) {
    winner.textContent = "You lost.  You fucking suck.";
  }
}
