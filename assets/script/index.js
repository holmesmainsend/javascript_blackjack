let firstCard = Math.floor(Math.random() * 10) + 2
let secondCard = Math.floor(Math.random() * 10) + 2
let sum = firstCard + secondCard
 
if(sum < 21) {
    console.log("Would you like to draw a new card?")
} else if (sum === 21) {
    console.log("Blackjack!")
} else {
    console.log("You lose.")
}