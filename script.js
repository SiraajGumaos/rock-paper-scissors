function getComputerChoice() {
  const randomNumber = Math.min(Math.floor(Math.random() * 3), 2);

  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  return prompt("Choose rock, paper, or scissors:").replace(/[\W_]+/g,"");
}

function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
  );
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
      console.log("It's a tie!");
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      console.log(`You win! ${toTitleCase(humanChoice)} beats ${toTitleCase(computerChoice)}`);
    } else {
      computerScore++;
      console.log(`You lose! ${toTitleCase(computerChoice)} beats ${toTitleCase(humanChoice)}`);
    }

    console.log(`Your score: ${humanScore}`);
    console.log(`Computer score: ${computerScore}`);
  }

  for (let i = 0; i < 5; i++) {
    const computerSelection = getComputerChoice();
    const humanSelection = getHumanChoice();

    playRound(humanSelection, computerSelection);
  }

  console.log("Game over!");
  console.log(`Final score - You: ${humanScore}, Computer: ${computerScore}`);

  if (humanScore > computerScore) {
    console.log("You won!");
  } else if (computerScore > humanScore) {
    console.log("The computer won!");
  } else {
    console.log("Tie!");
  }
}

playGame();
