const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
	return userInput;
  } else {
    return console.log('The function getUserChoice did not execute properly.');
  }
};

const getComputerChoice = () => {
  randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
    return 'rock';
    break;
    case 1:
    return 'paper';
    break;
    case 2:
    return 'scissors';
    break;
    default:
    return 'Invalid Input';
    break;
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice){
    return 'The game ended in a tie!';
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return '(Paper)The computer wins!';
    } else {
      return 'You win!';
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return '(Scissors)The computer wins!';
    } else {
      return 'You win!';
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return '(Rock)The computer wins!';
    } else {
      return 'You win!';
    }
  }
  if (userChoice === 'bomb') {
    return 'You win by cheating!';
  }
};

const playGame = () => {
  userChoice = getUserChoice('paper');
  computerChoice = getComputerChoice();
  console.log(userChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();