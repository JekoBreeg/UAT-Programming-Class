// this function is to get the computer's choice
function getComputerChoice() {
    // this makes these choices a contant, unable to be changed later on in the code.
    const choices = ["cockroach", "shoe", "nuclear bomb"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    // return a randomly selected choice from the "choices" array, made by the "const" above.
    return choices[randomIndex];
}

// the function to determine the winner of the game
function determineWinner(playerChoice, computerChoice) {
    // this condition states that if the player's choice and computer's choice are equal (the same) it will return the string below.
    if (playerChoice === computerChoice) {
        return "It's a tie! Damn!";
        // This is saying that if the choices are NOT the same, then the game follows the formula below. (The choices are the same OR ELSE this)
    } else if (
        (playerChoice === "shoe" && computerChoice === "cockroach") ||
        (playerChoice === "nuclear bomb" && computerChoice === "shoe") ||
        (playerChoice === "cockroach" && computerChoice === "nuclear bomb")
    ) { // If any of the above options happen, it is to show that the player won by returning the string below.
        return "You won! Woot!!";
    } else { // If the choices are neither equal OR any of the outcomes above, the computer wins, and shows the string below.
        return "Computer Demons Win! Nooo!!";
    }
}

// this is a function to play the game when the button is clicked
function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    
    // this displays the results on the website
    document.getElementById("result").textContent = `You chose ${playerChoice}, the computer chose ${computerChoice}. ${result}`;
}
// event listener for the "Shoe" button, for example, executes playGame("shoe") when clicked, telling the computer that the player chose "Shoe."
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("shoe").addEventListener("click", () => playGame("shoe"));
    document.getElementById("nuclear bomb").addEventListener("click", () => playGame("nuclear bomb"));
    document.getElementById("cockroach").addEventListener("click", () => playGame("cockroach"));
});
