const listOfMaterials = ["Rock", "Paper", "Scissors"];
let computerChoice = '';
let playerchoice = '';
const paper = document.getElementById('item2');
const rock = document.getElementById('item3');
const scissors = document.getElementById('item1');
let renewingTxt = document.getElementById('renewing-text');

console.log(computerChoice)

paper.addEventListener('click', () => {
  playerchoice = 'paper';
  generateComputerChoice();
  winner();
})

rock.addEventListener('click', () => {
  playerchoice = 'rock';
  generateComputerChoice();
  winner();
})

scissors.addEventListener('click', () => {
  playerchoice = 'scissors';
  generateComputerChoice();
  winner();
})

function generateComputerChoice() {
  computerChoice = listOfMaterials[Math.floor(Math.random() * 3)];
  console.log(computerChoice)
}

function winner(){
  if (playerchoice === computerChoice) {
    renewingTxt.innerHTML = 'Draw!';
  } else if (
    (playerchoice === 'rock' && computerChoice === 'scissors') ||
    (playerchoice === 'paper' && computerChoice === 'rock') ||
    (playerchoice === 'scissors' && computerChoice === 'paper')
  ) {
    renewingTxt.innerHTML = 'You win!';
  } else {
    renewingTxt.innerHTML = 'Computer wins!';
  }
}