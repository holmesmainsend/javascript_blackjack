let age = 22

if(age < 21) {
    console.log("You are not permitted on the gambling floor.")
} else {
    console.log("Come right on in!")
}

let firstCard = Math.floor(Math.random() * 10) + 2
let secondCard = Math.floor(Math.random() * 10) + 2
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let gameMessage = ""
 
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