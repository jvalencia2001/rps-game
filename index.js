const resultDisplay = document.querySelector('#result')
const choicesDisplay = document.querySelector('#choices-btn')
const choices = ['Rock', 'Paper', 'Scissors']

var winner

const handleClick = (btn) => {
    getResults(btn.target.innerHTML, choices[Math.floor(Math.random() * choices.length)])
    console.log(winner)
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

