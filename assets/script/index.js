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
 
if(sum < 21) {
    console.log("Would you like to draw a new card?")
} else if (sum === 21) {
    console.log("Blackjack!")
    hasBlackJack = true
} else {
    console.log("You lose.")
    isAlive = false
}