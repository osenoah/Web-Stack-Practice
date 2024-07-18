let firstCard = 10
let secondCard = 17
let BLACKJACK = false
let isAlive = true

let sum = firstCard + secondCard
console.log(sum)


if (sum <= 20) {
    console.log("Do you want to draw a new card")
} else if (sum === 21) {
    console.log("You win! BLACKJACK")
    BLACKJACK = true
} else {
    console.log("You're out of the game.")
    isAlive = false
}

//cash out
console.log(BLACKJACK)
console.log(isAlive)

/* var age = 300
if (age < 100) {
    console.log("You aren't eligible")
} else if (age === 100) {
    console.log("Eligible")
} else {
    console.log("You're not eligible, card delivered already")
}
 */