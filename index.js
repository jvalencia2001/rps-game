const resultDisplay = document.querySelector('#result')
const choicesDisplay = document.querySelector('#choices-btn')
const choices = ['Rock', 'Paper', 'Scissors']


choices.forEach(choice => {
    const btn = document.createElement('button')
    btn.innerHTML = choice
    btn.className += 'choice-btn'
    choicesDisplay.appendChild(btn)
})

