// Rock Paper Scissors game with css, html, js
// Three buttons for each user choice
// Upon button press will compare the user's choice with computers
// Will keep score up to 5, then declare winner
// Have a restart button either pop up middle of screen or somewhere on page
// Have a current score box in div .results

let playerScore = 0
let computerScore = 0
// Game
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) { 
    }
    if (
        (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') || 
        (playerSelection === 'PAPER' && computerSelection === 'ROCK') ||
        (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') 
    ) {
        ++playerScore
    }
    if (
        (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') || 
        (computerSelection === 'PAPER' && playerSelection === 'ROCK') ||
        (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') 
    ) {
        ++computerScore
    }
}

function getcomputerSelection() {
    let randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
        case 0:
            return 'ROCK'
        case 1:
            return 'PAPER'
        case 2:
            return 'SCISSORS'
    }
}

function isGameOver() {
    return playerScore === 5 || computerScore === 5
}
// UI
const rockBtn = document.getElementById('rockBtn')
const paperBtn = document.getElementById('paperBtn')
const scissorsBtn = document.getElementById('scissorsBtn')
const resetBtn = document.getElementById('resetBtn')
const playerSign = document.getElementById('playerSign')
const computerSign = document.getElementById('computerSign')
const displayPlayerScore = document.getElementById('playerScore')
const displayComputerScore = document.getElementById('computerScore')
let gameWinner = ''

rockBtn.addEventListener('click', () => handleClick('ROCK'))
paperBtn.addEventListener('click', () => handleClick('PAPER'))
scissorsBtn.addEventListener('click', () => handleClick('SCISSORS'))
resetBtn.addEventListener('click', () => resetGame())

function handleClick(playerSelection) {
    if (isGameOver()) {
        return
    }
    
    const computerSelection = getcomputerSelection()
    playRound(playerSelection,computerSelection)
    updateChoices(playerSelection,computerSelection)
    updateScore()

    if (isGameOver()) {
        declareWinner()
    if (gameWinner === 'player')
        alert('\n You win! \n \n Please click the reset button to play again.')
    if (gameWinner === 'computer')
        alert('\n You lose. \n \n Please click the reset button to play again.')
    }


}

function updateChoices(playerSelection,computerSelection) {
    switch (playerSelection) {
        case 'ROCK':
            playerSign.textContent = 'Your move: ✊'
            break
        case 'PAPER':
            playerSign.textContent = 'Your move: ✋'
            break
        case 'SCISSORS':
            playerSign.textContent = 'Your move: ✌'
            break
    }
    switch (computerSelection) {
        case 'ROCK':
            computerSign.textContent = 'Computer move: ✊'
            break
        case 'PAPER':
            computerSign.textContent = 'Computer move: ✋'
            break
        case 'SCISSORS':
            computerSign.textContent = 'Computer move: ✌'
            break
    }
}

function updateScore() {
    displayPlayerScore.textContent = `${playerScore}`
    displayComputerScore.textContent = `${computerScore}`
}

function resetGame() {
    playerScore = 0
    computerScore = 0
    displayPlayerScore.textContent = `${playerScore}`
    displayComputerScore.textContent = `${computerScore}`
}

function declareWinner () {
    if (playerScore === 5 && computerScore < 5) {
        gameWinner = 'player'
    }
    if (computerScore === 5 && playerScore < 5) {
        gameWinner = 'computer'
    }
}