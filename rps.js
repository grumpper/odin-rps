function getComputerChoice() {
    const rps = ["rock", "paper", "scissors"];
    // Get random number between 0 and 2
    let num = Math.floor(Math.random() * 3);
    return rps[num]
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return ("It's a tie! Try again...")
    }

    if (playerSelection === "rock" && computerSelection === "scissors") {
        return ("You win! Rock beats scissors")
    }
    if (playerSelection === "rock" && computerSelection === "paper") {
        return ("You lose! Paper beats rock")
    }

    if (playerSelection === "paper" && computerSelection === "rock") {
        return ("You win! Paper beats rock")
    }
    if (playerSelection === "paper" && computerSelection === "scissors") {
        return ("You lose! Scissors beats paper")
    }

    if (playerSelection === "scissors" && computerSelection === "paper") {
        return ("You win! Scissors beats paper")
    }
    if (playerSelection === "scissors" && computerSelection === "rock") {
        return ("You lose! Rock beats scissors")
    }
}

let playerSelection = prompt("Make a choice!").toLowerCase()
let computerSelection = getComputerChoice()
console.log(`Your choice was: ${playerSelection}`)
console.log(`Computer's choice was: ${computerSelection}`)
console.log(playRound(playerSelection, computerSelection))