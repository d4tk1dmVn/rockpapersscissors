let humanScore = 0;
let computerScore = 0;
let play = true;

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
  alert();
}

let messageboard = document.querySelector("#messageboard");
let scoreboard = document.querySelector("#scoreboard");
let buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const human_choice = button.textContent.toLowerCase();
    const computer_choice = getComputerChoice();
    messageboard.textContent = playRound(human_choice, computer_choice);
    scoreboard.textContent =
      "Humans: " + humanScore + " || Computers: " + computerScore;
  });
});
