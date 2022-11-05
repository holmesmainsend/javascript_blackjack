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
    console.log(gameMessage)
} else if (sum === 21) {
    gameMessage = "Blackjack!"
    console.log(gameMessage)
    hasBlackJack = true
} else {
    gameMessage = "You lose."
    console.log(gameMessage)
    isAlive = false
}