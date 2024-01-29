function getComputerChoice(rps) {
    // Get random number between 0 and 2
    let num = Math.floor(Math.random() * 3);
    return rps[num]
}

function playRound(playerSelection, computerSelection) {
    let msg = ""
    if (playerSelection === computerSelection) {
        msg = "It's a tie! Try again..."
        alert(msg);
        console.log(msg)
        return [0, 0]
    }

    if (playerSelection === "rock" && computerSelection === "scissors") {
        msg = "You win! Rock beats scissors"
        alert(msg);
        console.log(msg)
        return [1, 0]
    }
    if (playerSelection === "rock" && computerSelection === "paper") {
        msg = "You lose! Paper beats rock"
        alert(msg);
        console.log(msg)
        return [0, 1]
    }

    if (playerSelection === "paper" && computerSelection === "rock") {
        msg = "You win! Paper beats rock"
        alert(msg);
        console.log(msg)
        return [1, 0]
    }
    if (playerSelection === "paper" && computerSelection === "scissors") {
        msg = "You lose! Scissors beats paper"
        alert(msg);
        console.log(msg)
        return [0, 1]
    }

    if (playerSelection === "scissors" && computerSelection === "paper") {
        msg = "You win! Scissors beats paper"
        alert(msg);
        console.log(msg)
        return [1, 0]
    }
    if (playerSelection === "scissors" && computerSelection === "rock") {
        msg = "You lose! Rock beats scissors"
        alert(msg);
        console.log(msg)
        return [0, 1]
    }
}

function playGame() {
    const rps = ["rock", "paper", "scissors"]
    let playerScore = 0
    let computerScore = 0
    let roundsPlayed = 0
    let playerSelection = ""
    let computerSelection = ""
    let gameResult = ""
    let roundResult = []

    while (playerScore + computerScore < 5) {
        do {
            playerSelection = prompt("Make a choice!").toLowerCase()
        } while (rps.includes(playerSelection) === false)
        computerSelection = getComputerChoice(rps)
        roundMessage = `You: ${playerSelection}; Computer: ${computerSelection}`
        alert(roundMessage)
        console.log(roundMessage)
        roundResult = playRound(playerSelection, computerSelection)
        playerScore += roundResult[0]
        computerScore += roundResult[1]
        roundsPlayed++
        console.log(`
            Rounds played: ${roundsPlayed};
            Player: ${playerScore};
            Computer: ${computerScore};
            \n
        `)
    }

    if (playerScore > computerScore) {
        gameResult = `You won ${playerScore} to ${computerScore} after ${roundsPlayed} rounds! :)`
    } else {
        gameResult = `You lost ${playerScore} to ${computerScore} after ${roundsPlayed} rounds! :(`
    }
    alert(gameResult)
    console.log(gameResult)
}

playGame()