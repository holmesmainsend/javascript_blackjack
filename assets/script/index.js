// let age = 22

// if(age < 21) {
//     console.log("You are not permitted on the gambling floor.")
// } else {
//     console.log("Come right on in!")
// }

let startEl = document.getElementById("start-button")
let firstCard = Math.floor(Math.random() * 13) + 1
let secondCard = Math.floor(Math.random() * 13) + 1
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let gameMessage = ""
 
function gameStart() {
    console.log("First card is " + firstCard)
    console.log("Second card is " + secondCard)
    if(sum < 21) {
        gameMessage = "Would you like to draw a new card?"
    } else if (sum === 21) {
        gameMessage = "Blackjack!"
        hasBlackJack = true
    } else {
        gameMessage = "You lose."
        isAlive = false
    }
    console.log(gameMessage)
}

startEl.onclick = gameStart