function getComputerChoice() {
    const rps = ["Rock", "Paper", "Scissors"];
    // Get random number between 0 and 2
    let num = Math.floor(Math.random() * 3);
    return rps[num]
}

getComputerChoice()