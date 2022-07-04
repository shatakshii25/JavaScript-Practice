let player = {
    name: "Shatakshi",
    chips: 145,
    greeting: function(){
        console.log("hey! shatakshi ^.^")
    } 
}
// console.log(player.greeting())

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")


let playeEl = document.getElementById("player-el")
playeEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let m = Math.floor(Math.random() * 13) + 1
    if (m === 1)
        return 11
    else if (m > 10)
        return 10
    else
        return m
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards.push(firstCard)
    cards.push(secondCard)
    for (let i = 0; i < cards.length; i++) {
        sum += cards[i]
    }
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got BlackJack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game ! :("
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        console.log(cards)
        renderGame()
    }
}


// CASH OUT
// console.log(hasBlackJack)
// console.log(isAlive)

// for(let i=10; i<=100; i+=10){
//     console.log(i)
// }

// let player1Time = 102
// let player2Time = 107

// function getFastestRaceTime(){
//     if(player1Time<player2Time){
//         return player1Time
//     } else if(player2Time < player1Time){
//         return player2Time
//     } else{
//         return player1Time
//     }
// }

// let fastestRace = getFastestRaceTime()
// console.log(fastestRace)

// function getTotalRaceTime(){
//     return player1Time+player2Time
// }

// let totalTime = getTotalRaceTime()
// console.log(totalTime)

// function rollDice() {
//     let randomNumber = Math.floor(Math.random() * 6) + 1
//     return randomNumber
// }

// console.log(rollDice())

// let course = {
//     title: "this is to learn Js",
//     lesson : 16,
//     creator: "Shatakshi Shree",
//     length: 63,
//     level: 2,
//     isFree: true,
//     tags: ["html", "css", "Js"]
// }

// console.log(course["tags"])

// let castle ={
//     title: "live life king size",
//     priceInDollars: 190,
//     isSuperHost: true,
//     images: ["img/castle1.png", "img/castle2.png"]
// }

// console.log(castle.priceInDollars)
// console.log(castle.isSuperHost)