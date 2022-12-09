const resultDisplay = document.querySelector('#result')
const choicesDisplay = document.querySelector('#choices-btn')
const choices = ['Rock', 'Paper', 'Scissors']

var winner
let score = [0, 0]

const handleClick = (btn) => {
  getResults(btn.target.innerHTML, choices[Math.floor(Math.random() * choices.length)])
  
  switch(winner) {
    case 0: 
      score[0]++
      break
    case 1:
      score[1]++
      break
    default:
      break;
  }
  
  if(score[0] == 5 || score[1] == 5) {
    const btns = document.getElementsByClassName('choice-btn')
    for(const btn of btns)
      btn.style.display = 'none'

    if(score[0] == 5) 
      resultDisplay.innerHTML = 'You beat the computer'
    else
      resultDisplay.innerHTML = 'The computer beat you'
  }

  console.log(score)

}

choices.forEach(choice => {
  const btn = document.createElement('button')
  btn.innerHTML = choice
  btn.className += 'choice-btn'
  btn.addEventListener('click', handleClick)
  choicesDisplay.appendChild(btn)
})

const getResults = (userChoice, computerChoice) => {
  switch (userChoice + computerChoice) {
    case 'ScissorsPaper':
    case 'RockScissors':
    case 'PaperRock':
      resultDisplay.innerHTML = 'You chose ' + userChoice + ' and the computer chose ' + computerChoice + ' , YOU WIN!'
      winner = 0
      break
    case 'PaperScissors':
    case 'ScissorsRock':
    case 'RockPaper':
      resultDisplay.innerHTML = 'You chose ' + userChoice + ' and the computer chose ' + computerChoice + ' , YOU LOSE!'
      winner = 1
      break
    case 'ScissorsScissors':
    case 'RockRock':
    case 'PaperPaper':
      resultDisplay.innerHTML = 'You chose ' + userChoice + ' and the computer chose ' + computerChoice + ' , ITS A DRAW!'
      winner = 2
      break
  }
  }

