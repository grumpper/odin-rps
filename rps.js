function getComputerChoice(rps) {
    // Get random number between 0 and 2
    let num = Math.floor(Math.random() * 3);
    return rps[num]
}

function playRound(playerSelection, computerSelection, divRoundResult) {
    const result = document.createElement('p')
    result.style.cssText = "font-size: large; font-weight: bold"
    if (playerSelection === computerSelection) {
        result.textContent = `It's a tie (both ${playerSelection})! Try again...`
        divRoundResult.appendChild(result)
        return [0, 0]
    }

    if (playerSelection === "rock" && computerSelection === "scissors") {
        result.textContent = "You win! Rock beats scissors"
        divRoundResult.appendChild(result)
        return [1, 0]
    }
    if (playerSelection === "rock" && computerSelection === "paper") {
        result.textContent = "You lose! Paper beats rock"
        divRoundResult.appendChild(result)
        return [0, 1]
    }

    if (playerSelection === "paper" && computerSelection === "rock") {
        result.textContent = "You win! Paper beats rock"
        divRoundResult.appendChild(result)
        return [1, 0]
    }
    if (playerSelection === "paper" && computerSelection === "scissors") {
        result.textContent = "You lose! Scissors beats paper"
        divRoundResult.appendChild(result)
        return [0, 1]
    }

    if (playerSelection === "scissors" && computerSelection === "paper") {
        result.textContent = "You win! Scissors beats paper"
        divRoundResult.appendChild(result)
        return [1, 0]
    }
    if (playerSelection === "scissors" && computerSelection === "rock") {
        result.textContent = "You lose! Rock beats scissors"
        divRoundResult.appendChild(result)
        return [0, 1]
    }
}

function playGame() {
    const rps = ["rock", "paper", "scissors"]
    let playerScore = 0
    let computerScore = 0
    let roundsPlayed = 0
    let computerSelection = ""
    let roundResult = []

    const divRoundResult = document.querySelector("#round-result")
    const divGameResult = document.querySelector("#game-result")
    const buttons = document.querySelectorAll("button")
    for (button of buttons) {
        divGameResult.replaceChildren()
        button.addEventListener(
            'click', () => {
                divRoundResult.replaceChildren()
                divGameResult.replaceChildren()
                computerSelection = getComputerChoice(rps)
                roundResult = playRound(button.id, computerSelection, divRoundResult)
                playerScore += roundResult[0]
                computerScore += roundResult[1]
                roundsPlayed++
                const textRoundSummary = document.createElement('p')
                textRoundSummary.textContent = `
                        Rounds played: ${roundsPlayed};
                        Player: ${playerScore};
                        Computer: ${computerScore};`
                divRoundResult.appendChild(textRoundSummary)
                if (playerScore === 5) {
                    const textGameResult = document.createElement('h2')
                    textGameResult.textContent = `You won ${playerScore} to ${computerScore} \
                    after ${roundsPlayed} rounds! :)`
                    textGameResult.style.cssText = "font-weight: bold; color: green"
                    divGameResult.replaceChildren(textGameResult)
                    playerScore = 0
                    computerScore = 0
                    roundsPlayed = 0
                }
                if (computerScore === 5) {
                    const textGameResult = document.createElement('h2',)
                    textGameResult.textContent = `You lost ${playerScore} to ${computerScore} \
                    after ${roundsPlayed} rounds! :(`
                    textGameResult.style.cssText = "font-weight: bold; color: red"
                    divGameResult.replaceChildren(textGameResult)
                    playerScore = 0
                    computerScore = 0
                    roundsPlayed = 0
                }
            }
        )
    }
}

playGame()