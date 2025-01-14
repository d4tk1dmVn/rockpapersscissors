let humanScore = 0;
let computerScore = 0;
let play = true;
//TAKE PLAYER INPUT
function getHumanChoice() {
  let choice = prompt("CHOOSE HUMAN: rock, paper OR scissors?", "");
  if (choice !== null) {
    choice = choice.toLowerCase();
  }
  return choice;
}

//CALCULATE COMPUTER CHOICE
function getComputerChoice() {
  let random_number = Math.floor(Math.random() * 100);
  let choice =
    random_number <= 33 ? "rock" : random_number <= 66 ? "paper" : "scissors";
  return choice;
}

//COMPARE THE CHOICES TO CALCULATE WINNER
function calculateWinner(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "draw!";
  }
  let result = "";
  switch (humanChoice + ":" + computerChoice) {
    case "rock:paper":
      result = "computer";
      computerScore++;
      break;
    case "rock:scissors":
      result = "human";
      humanScore++;
      break;
    case "paper:rock":
      result = "human";
      humanScore++;
      break;
    case "paper:scissors":
      result = "computer";
      computerScore++;
      break;
    case "scissors:paper":
      result = "human";
      humanScore++;
      break;
    case "scissors:rock":
      result = "computer";
      computerScore++;
      break;
    default:
      result = "computer";
      computerScore++;
      break;
  }
  return result;
}

function playRound(humanChoice, computerChoice) {
  if (
    humanChoice !== "rock" &&
    humanChoice !== "paper" &&
    humanChoice !== "scissors"
  ) {
    computerScore++;
    return "computer wins on a technicallity!";
  }
  let result = calculateWinner(humanChoice, computerChoice);
  if (result !== "draw!") {
    return result + " wins!";
  }
  return result;
}

function playGame() {
  const humanChoice = getHumanChoice();
  if (humanChoice === null) {
    alert("Thanks for playing!!");
    play = false;
    return;
  }
  const computerChoice = getComputerChoice();
  alert(playRound(humanChoice, computerChoice));
  alert("Humans: " + humanScore + " || Computers: " + computerScore);
}

while (play) {
  playGame();
}
